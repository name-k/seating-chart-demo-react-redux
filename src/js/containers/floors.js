export default class App extends React.Component {
  render() {
    return (
      <div className='floors'>

        <div className="floors-item">
          <span className="floors-item__title">
            Floor #1
          </span>
          <button className="floors-item__delete">
            x
          </button>
        </div>

        <button className="floors__add">
          Add new floor
        </button>

      </div>
    );
  }
}