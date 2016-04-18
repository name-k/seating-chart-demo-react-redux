import assign from 'lodash/assign';

import bindAll from 'lodash/bindAll';

export default class DragAndDrop {
  constructor(options = {}) {

    const defaults = {
      target : null, // DOM element
      scope : document.body, // DOM element

      // only listen for new coords with a callback, 
      // no real move handling
      listenMode : false, 

      callbacks : {
        onDragStart : () => {},
        onDragMove : () => {},
        onDragEnd : () => {}
      }
    };
    this.config = assign(defaults, options);


    bindAll(this, ['handleMouseDown', 'handleMouseMove', 'handleMouseUp']);


    this.currentTargetCoords = {};
    this.coordsShift = {};
    this.dragZoneCoords = {};

    this.init();
  }


  init() {

    if(!this.config.target) {
      throw new Error('No target supplied to drag.');
    }

    let scope = this.config.scope;
    this.dragZoneCoords = this.getElementCoords(scope);

    this.config.target.addEventListener('mousedown', this.handleMouseDown);
    this.config.target.ondragstart = () => false;

  }


  handleMouseDown(event) {
    this.currentTargetCoords = this.getElementCoords(this.config.target);

    this.coordsShift = {
      x : event.pageX - this.currentTargetCoords.x,
      y : event.pageY - this.currentTargetCoords.y,
      x1 : event.pageX - this.currentTargetCoords.x1,
      y1 : event.pageY - this.currentTargetCoords.y1,
    };
    this.coordsLimit = {
      x : this.dragZoneCoords.x + this.coordsShift.x,
      y : this.dragZoneCoords.y + this.coordsShift.y,
      x1 : this.dragZoneCoords.x1 + this.coordsShift.x1,
      y1 : this.dragZoneCoords.y1 + this.coordsShift.y1,
    };

    this.config.scope.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }


  handleMouseMove(event) {

    let pageX = event.pageX;
    let pageY = event.pageY;

    if(pageX < this.coordsLimit.x) {
      pageX = this.coordsLimit.x;
    } else if(pageX > this.coordsLimit.x1) {
      pageX = this.coordsLimit.x1;
    } 
    if(pageY < this.coordsLimit.y) {
      pageY = this.coordsLimit.y;
    } else if(pageY > this.coordsLimit.y1) {
      pageY = this.coordsLimit.y1;
    } 

    console.log(pageY, this.coordsLimit.y1);

    let x = pageX - this.dragZoneCoords.x - this.coordsShift.x;
    let y = pageY - this.dragZoneCoords.y - this.coordsShift.y;

    this.moveTargetTo(x, y);
  }


  handleMouseUp() {
    this.config.scope.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }


  moveTargetTo(x, y) {

    if(!this.config.listenMode) {
      this.config.target.style.left = x + 'px';
      this.config.target.style.top = y + 'px';
    }

    // this.config.callbacks.onDragMove({x, y});
  }


  getElementCoords(el) {
    const box = el.getBoundingClientRect();
    const coords = {
      x: Math.floor(box.left + pageXOffset),
      y: Math.floor(box.top + pageYOffset),
      x1 : Math.floor(box.left + pageXOffset + el.offsetWidth),
      y1 : Math.floor(box.top + pageYOffset + el.offsetHeight),
    };
    return coords;
  }


}