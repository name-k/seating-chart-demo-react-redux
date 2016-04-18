import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ConstructorItem from 'components/constructor-item';

class Constructor extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {

    let items = this.props.items.map((object) => {
      return (
        <div 
          
          className="column small-4" 
          key={object.id}>
          <ConstructorItem data={object} />
        </div>
      );
    });

    return (
      <div className='constructor'>

        <h4 className="constructor__title">Objects to drag</h4>

        <div className="constructor__list">
          <div className="row nested">

            {items}

          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items : state.constructorObjects,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(mapStateToProps)(Constructor);