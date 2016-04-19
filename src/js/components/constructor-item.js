import { DragSource } from 'react-dnd';
import * as dndTypes from 'constants/dnd-types';


const boxSource = {
  beginDrag(props) {
    return {
      id: props.id
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      window.alert( // eslint-disable-line no-alert
        `You dropped item with id "${item.id}"" into the canvas! Sorry! Not yet 100% ready! Next step is to save dropped data.`
      );
    }

  }
};



@DragSource(dndTypes.CONSTRUCTOR_ITEM, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class ConstructorItem extends React.Component {

  static propTypes = {
    connectDragSource : React.PropTypes.func.isRequired,
    id                : React.PropTypes.string.isRequired,
    image             : React.PropTypes.string.isRequired,
    isDragging        : React.PropTypes.bool.isRequired,
    name              : React.PropTypes.string.isRequired,
  };



  render() {

    const { isDragging, connectDragSource } = this.props;
    const { image, name } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return (
      connectDragSource(
        <div
          className="constructor-item"
          style={{opacity}} >

          <div className="constructor-item__image">
            <img src={image} />
          </div>
          <span className="constructor-item__title">
            {name}
          </span>

        </div>
      )
    );
  }
}