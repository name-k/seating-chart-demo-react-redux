export default class ConstructorItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="constructor-item">

        <div className="constructor-item__image">
          <img src={this.props.data.image} />
        </div>
        <span className="constructor-item__title">
          {this.props.data.name}
        </span>

      </div>
    );
  }
}