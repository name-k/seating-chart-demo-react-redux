import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { canvasItemUpdate, canvasItemSelect, canvasItemAdd } from 'actions/canvas-actions';

import CanvasItem from 'components/canvas-item';

import findObj from 'lodash/find';
import bindAll from 'lodash/bindAll';

import DragAndDrop from 'modules/drag-and-drop';

// react-dnd
import { DropTarget } from 'react-dnd';
import * as dndTypes from 'constants/dnd-types';


const boxTarget = {
  drop(props, monitor, component) {
    const cursorInitialPos = monitor.getInitialClientOffset();
    const objectInitialPos = monitor.getInitialSourceClientOffset();
    const cursorPos        = monitor.getClientOffset();
    const canvasCoords     = component.getCanvasCoords();

    const itemProps = monitor.getItem();
    const timestamp = new Date().getTime();

    props.canvasItemAdd({
      id : `id-${timestamp}`,
      isLastSelected : true,
      name : 'noname',
      type : itemProps.type,
      properties : [],
      posX : Math.floor(cursorPos.x - canvasCoords.left),
      posY : Math.floor(cursorPos.y - canvasCoords.top),
    }, props.floorSelected);

    // return {
    //   shiftX : Math.floor(objectInitialPos.x - cursorInitialPos.x) * -1,
    //   shiftY : Math.floor(objectInitialPos.y - cursorInitialPos.y) * -1,
    //   posX : Math.floor(cursorPos.x - canvasCoords.left),
    //   posY : Math.floor(cursorPos.y - canvasCoords.top)
    // };

  }
};


@DropTarget(dndTypes.CONSTRUCTOR_ITEM, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))
class Canvas extends React.Component {

  constructor(props) {
    super(props);
    this.canvas == null;
    bindAll(this, ['handleItemDataUpdate', 'handleItemSelect']);
  }

  static propTypes = {
    canDrop           : React.PropTypes.bool.isRequired,
    canvasItemUpdate  : React.PropTypes.func.isRequired,
    canvasItemSelect  : React.PropTypes.func.isRequired,
    canvas            : React.PropTypes.array.isRequired,
    connectDropTarget : React.PropTypes.func.isRequired,
    isOver            : React.PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.forceUpdate();
  }

  getCanvasCoords() {
    return this.canvas.getBoundingClientRect();
  }

  handleItemDataUpdate(id, newData) {
    this.props.canvasItemUpdate(id, newData, this.props.floorSelected);
  }

  handleItemSelect(id) {
    this.props.canvasItemSelect(id, this.props.floorSelected);
  }

  renderCanvasItems() {
    if(!this.canvas) {
      return (
        <h2>Canvas is not yet rendered (no canvas ref)!</h2>
      );
    }

    let canvasItems = this.props.canvas[this.props.floorSelected]

    return canvasItems.map(item => {
      let itemPrototype = findObj(this.props.constructorData, {type : item.type});

      return (
        <CanvasItem 
          onItemSelect={this.handleItemSelect}
          onItemDataUpdate={this.handleItemDataUpdate}
          dndScope={this.canvas}
          image={itemPrototype.image} 
          selected={item.isLastSelected}
          data={item} 
          key={item.id} />
      );
    });
  }

  render() {

    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '';
    if (isActive) {
      backgroundColor = '#d6eefb';
    } else if (canDrop) {
      backgroundColor = '#eef9ff';
    }

    return (
      connectDropTarget(
        <div 
          style={{ backgroundColor }}
          className='canvas' 
          ref={c => this.canvas = c}>
          <div className="canvas__layer">

            {isActive ? 'Release to drop' : 'Drag here an item from the constructor' }

            {this.renderCanvasItems()}

          </div>
        </div>
      )
    );
  }
}

function mapStateToProps({canvas, constructorData, floorSelected}) {
  return { 
    canvas, 
    constructorData,
    floorSelected
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    canvasItemUpdate, 
    canvasItemSelect,
    canvasItemAdd
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);