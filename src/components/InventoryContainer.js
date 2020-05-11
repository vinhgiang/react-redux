import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from "../redux";

const InventoryContainer = props => {
  return (
    <div>
      <h2>Number of {props.type}: {props.amount}</h2>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const amount = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;
  const type = ownProps.cake ? 'Cakes' : 'Ice Cream';
  return {
    amount,
    type
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryContainer);