import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class CanvasItemSettings extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className=''>
        Canvas Item Settings
      </div>
    );
  }

}


function mapStateToProps({ canvas, constructorData }) {
  return {
    canvas, constructorData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasItemSettings);