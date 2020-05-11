import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

const UserContainer = props => {
  useEffect(() => {
    props.fetchUsers();
  }, [])
  return props.userData.loading ? (
    <h2>Loading</h2>
  ) : props.userData.error ? (
    <h2>{props.userData.error}</h2>
  ) : (
    <>
      <h2>User list</h2>
      <div>
        {props.userData && props.userData.users && props.userData.users.map(user => <p key={user.id}>{user.name}</p>)}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);