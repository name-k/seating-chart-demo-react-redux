

export default class App extends React.Component {
  render() {

    return (
      <div className='constructor'>

        <h4 className="constructor__title">Constructor</h4>

        <div className="constructor__list">
          <div className="row nested">

            <div className="column small-4">

              <div className="constructor-item">
                <div className="constructor-item__image">
                  <img src="svg/table_only_square_4.svg" />
                </div>
                <span className="constructor-item__title">
                  Square table
                </span>
              </div>

            </div>

            <div className="column small-4">
              <div className="constructor-item">
                <div className="constructor-item__image">
                  <img src="svg/table_only_circle_4.svg" />
                </div>
                <span className="constructor-item__title">
                  Round table
                </span>
              </div>
            </div>

            <div className="column small-4">
              <div className="constructor-item">
                <div className="constructor-item__image">
                  <img src="svg/table_only_rectangle_8.svg" />
                </div>
                <span className="constructor-item__title">
                  Rectangle table
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}