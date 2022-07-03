import { connect } from "react-redux";
import { getUsersFetch } from "../redux/actions";
import { getNames } from "../redux/selector";
import { sagaActions } from "../toolkit/actions";

function mapStateToProps(state) {
  return {
    users: getNames(state), //directly state.users nagarera, memoize garna selectors use huncha.
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onReduxClick: () => dispatch(getUsersFetch()),
    onToolkitClick: () => dispatch({ type: sagaActions.GET_USERS_FETCH }),
  };
};

const List2 = ({ users, onReduxClick, onToolkitClick }) => {
  return (
    <>
      <button onClick={onReduxClick}>GET users using redux</button>
      <button onClick={onToolkitClick}>GET users using toolkit</button>
      <ul>
        { users.map(u => <li>{u}</li>)}
      </ul>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(List2);
