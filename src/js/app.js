import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchInitialAppData, fetchInitialAppConfig, saveAppData } from 'actions/data-api-actions';

import Floors from 'containers/floors';
import Constructor from 'containers/constructor';
import Canvas from 'containers/canvas';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.saveAppData = this.saveAppData.bind(this);
    this.init();
  }

  init() {
    this.props.fetchInitialAppConfig();
    this.props.fetchInitialAppData();
  }


  saveAppData() {
    this.props.saveAppData(this.props.state.appData, this.props.state.canvasObjects);
  }


  render() {
    return (
      <div className='layout'>

        <div className='layout__sidebar sidebar'>
          
          <div className='sidebar__box'>
            <Floors />
          </div>

          <div className='sidebar__box'>
            <Constructor />
          </div>

          <div className='sidebar__box'>
            <button 
              onClick={this.saveAppData}
              className='button success'>Save</button>
          </div>

        </div>


        <div className='layout__canvas'>

          <Canvas />

        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {state};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    fetchInitialAppData,
    fetchInitialAppConfig,
    saveAppData
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);