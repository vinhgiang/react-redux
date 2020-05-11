import React from 'react';
import { connect } from 'react-redux';

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

export default connect(
  mapStateToProps
)(InventoryContainer);