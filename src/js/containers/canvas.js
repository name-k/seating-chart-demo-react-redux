import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { canvasItemDataUpdate, canvasItemSelect } from 'actions/canvas-actions';

import CanvasItem from 'components/canvas-item';

import findObj from 'lodash/find';
import bindAll from 'lodash/bindAll';

import DragAndDrop from 'modules/drag-and-drop';

// react-dnd
import { DropTarget } from 'react-dnd';
import * as dndTypes from 'constants/dnd-types';


const boxTarget = {
  drop() {
    return { name: 'Dustbin' };
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
    canDrop              : React.PropTypes.bool.isRequired,
    canvasItemDataUpdate : React.PropTypes.func.isRequired,
    canvasItemSelect     : React.PropTypes.func.isRequired,
    canvasObjects        : React.PropTypes.array.isRequired,
    connectDropTarget    : React.PropTypes.func.isRequired,
    isOver               : React.PropTypes.bool.isRequired,
  };



  handleItemDataUpdate(id, newData) {
    this.props.canvasItemDataUpdate(id, newData);
  }

  handleItemSelect(id) {
    this.props.canvasItemSelect(id);
  }

  renderCanvasItems() {
    if(!this.canvas) {
      return (
        <h2>Canvas is not yet rendered (no canvas ref)!</h2>
      );
    }

    return this.props.canvasObjects.map(item => {
      let itemPrototype = findObj(this.props.constructorObjects, {type : item.type});

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

  componentDidMount() {
    this.forceUpdate();
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

function mapStateToProps({canvasObjects, constructorObjects}) {
  return { 
    canvasObjects, 
    constructorObjects 
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    canvasItemDataUpdate, 
    canvasItemSelect
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);