import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchInitialAppData, fetchInitialAppConfig } from 'actions/data-api-action';

import Floors from 'containers/floors';
import Constructor from 'containers/constructor';
import Canvas from 'containers/canvas';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.init();

  }

  init() {
    this.props.fetchInitialAppConfig();
    this.props.fetchInitialAppData();
  }


  render() {
    return (
      <div className='layout'>

        <div className='layout__sidebar'>

          <Floors />
          <Constructor />

        </div>


        <div className='layout__canvas'>

          <Canvas />

        </div>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    fetchInitialAppData,
    fetchInitialAppConfig
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);