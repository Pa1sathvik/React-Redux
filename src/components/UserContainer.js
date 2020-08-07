import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer() {

  useEffect(({ userData, fetchUsers }) => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <diV>
      <h2>
        <div>
          {userData &&
            userData.users &&
            userData.users.map((user) => {
              <p>{user.name}</p>;
            })}
        </div>
      </h2>
    </diV>
  );
}

const mapStateToProps = (state) => {
  return { userData : state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
