import bindAll from 'lodash/bindAll';

import DragAndDrop from 'modules/drag-and-drop';

export default class CanvasItem extends React.Component {
  constructor(props) {
    super(props);
    bindAll(this, ['handleMouseDown']);
  }

  componentDidMount() {
    const id = this.props.data.id;
    new DragAndDrop({
      target : this.refs.item,
      scope  : this.props.dndScope,
      // listenMode : true,
      callbacks : {
        onDragStart : (coords) => {},
        onDragMove : (coords) => {},
        onDragEnd : (coords) => {
          if(coords.x && coords.y) {
            this.props.onItemDataUpdate(id, {
              posX : coords.x,
              posY : coords.y
            });  
          }
        }
      }
    });
  }

  handleMouseDown(event) {
    this.props.onItemSelect(this.props.data.id);
    return false;
  }

  render() {

    let itemStyles = {
      left : this.props.data.posX,
      top : this.props.data.posY,
      zIndex : (this.props.data.isLastSelected ? '2' : '1') 
    };

    return (

      <div 
        ref='item'
        onMouseDown={this.handleMouseDown}
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