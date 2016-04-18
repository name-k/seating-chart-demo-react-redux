import CanvasItem from 'components/canvas-item';
import { connect } from 'react-redux';

import findObj from 'lodash/find';
import bindAll from 'lodash/bindAll';


class Canvas extends React.Component {

  constructor(props) {
    super(props);
    // bindAll(this, ['handleMouseDown', 'handleMouseUp', 'handleClick']);
  }

  // handleMouseDown(element, id) {
  // }

  // handleMouseUp(event, id) {
  // }

  // handleClick(event) {
  // }

  onItemDataUpdate(newData) {}

  componentWillMount() {
    this.items = [];
  }

  componentDidMount() {
    this.items = this.props.canvasObjects.map(item => {
      let itemPrototype = findObj(this.props.constructorObjects, {type : item.type});

      return (
        <CanvasItem 
          onDataUpdate={this.onItemDataUpdate}
          dndScope={this.refs.canvas}
          image={itemPrototype.image} 
          data={item} 
          key={item.id} />
      );
    });
    this.forceUpdate();
  }

  render() {

    

    return (
      <div className='canvas' ref='canvas'>
        <div className="canvas__layer">

          {this.items}

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

export default connect(mapStateToProps)(Canvas);