import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/index';

const DynamicCakeContainer = props => {
  const [number, setNumber] = useState(1);
  return (
    <div><br/>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DynamicCakeContainer);