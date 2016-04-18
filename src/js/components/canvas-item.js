import bindAll from 'lodash/bindAll';

import DragAndDrop from 'modules/drag-and-drop';

export default class CanvasItem extends React.Component {
  constructor(props) {
    super(props);

    bindAll(this, ['handleMouseDown', 'handleMouseUp', 'handleClick']);
  }

  componentDidMount() {
    new DragAndDrop({
      target : this.refs.item,
      scope  : this.props.dndScope,
      // listenMode : true,
      callbacks : {
        onDragMove : (coords) => {
          
        }
      }
    });
  }

  handleMouseDown(event) {
    
  }


  handleMouseUp(event) {
    // this.props.onDataUpdate(newData);
  }

  handleClick(event) {}

  render() {

    let itemStyles = {
      left : this.props.data.posX,
      top : this.props.data.posY,
    };

    return (

      <div 
        ref='item'
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onClick={this.handleClick}
        className='canvas-item' 
        style={itemStyles}
      >
        <div className="canvas-item__wrapper">

          <div className="canvas-item__object">

            <img className='canvas-item__object__image' src={this.props.image} />

            <span className="canvas-item__object__title">
              {this.props.data.name}
            </span>

          </div>


        </div>
      </div>

    );
  }
}