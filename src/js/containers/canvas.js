import CanvasItem from 'components/canvas-item';
import { connect } from 'react-redux';

import findObj from 'lodash/find';

class Canvas extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let items = this.props.canvasObjects.map(item => {
      let itemPrototype = findObj(this.props.constructorObjects, {type : item.type});

      return <CanvasItem image={itemPrototype.image} data={item} key={item.id} />;
    });

    return (
      <div className='canvas'>
        <div className="canvas__layer">

          {items}

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