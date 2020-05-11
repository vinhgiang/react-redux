import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/index';
import InventoryContainer from "./InventoryContainer";

const CakeContainer = props => {
  return (
    <div>
      <InventoryContainer cake />
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
};

export default connect(
  null,
  mapDispatchToProps
)(CakeContainer);