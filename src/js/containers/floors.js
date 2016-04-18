

export default class App extends React.Component {
  render() {

    return (
      <div className='floors'>

        <h4 className="floors__title">Floors</h4>

        <div className="floors__list">

          <div className="floors-item is-active">
            <span className="floors-item__title">
              Floor #1
            </span>
            <span className="hollow floors-item__delete">
              <i className="fa fa-close fa-lg"></i>
            </span>
          </div>

        </div>
        

        <button className="floors__add button small">
          Add new floor
        </button>

      </div>
    );
  }
}