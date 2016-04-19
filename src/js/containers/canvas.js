import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { canvasItemDataUpdate, canvasItemSelect } from 'actions/canvas-actions';

import CanvasItem from 'components/canvas-item';

import findObj from 'lodash/find';
import bindAll from 'lodash/bindAll';

import DragAndDrop from 'modules/drag-and-drop';


class Canvas extends React.Component {

  constructor(props) {
    super(props);
    bindAll(this, ['handleItemDataUpdate', 'handleItemSelect']);
  }

  // handleMouseDown(element, id) {
  // }

  // handleMouseUp(event, id) {
  // }

  // handleClick(event) {
  // }

  handleItemDataUpdate(id, newData) {
    this.props.canvasItemDataUpdate(id, newData);
  }

  handleItemSelect(id) {
    this.props.canvasItemSelect(id);
  }

  renderCanvasItems() {
    if(!this.refs.canvas) {
      return (
        <h2>Has no canvas ref yet!</h2>
      )
    }

    return this.props.canvasObjects.map(item => {
      let itemPrototype = findObj(this.props.constructorObjects, {type : item.type});

      return (
        <CanvasItem 
          onItemSelect={this.handleItemSelect}
          onItemDataUpdate={this.handleItemDataUpdate}
          dndScope={this.refs.canvas}
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

    return (
      <div className='canvas' ref='canvas'>
        <div className="canvas__layer">

          {this.renderCanvasItems()}

        </div>
      </div>
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