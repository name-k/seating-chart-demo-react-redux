import Floors from 'containers/floors';
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
        </div>

        <div className='layout__canvas'>
          <h2>Canvas</h2>
        </div>

      </div>
    );
  }
}