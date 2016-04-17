import Floors from 'containers/floors';
import Constructor from 'containers/constructor';
import Canvas from 'containers/canvas';

import Api from 'modules/api-requests';

const api = new Api({cacheName : 'seating-chart'});
let appData = api.getChartData();
if(!appData) {
  appData = require('config/saved.data.sample');
}


export default class App extends React.Component {
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