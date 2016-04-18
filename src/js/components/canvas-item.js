export default class CanvasItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let specs = this.props.data;
    let itemStyles = {
      top : specs.posY,
      left : specs.posX
    };

    console.log(itemStyles);

    return (

      <div 
        className='canvas-item' 
        style={itemStyles}
      >
        <div className="canvas-item__wrapper">

          <div className="canvas-item__object">

            <img className='canvas-item__object__image' src={this.props.image} />

            <span className="canvas-item__object__title">
              {specs.name}
            </span>

          </div>


        </div>
      </div>

    );
  }
}