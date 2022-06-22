import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "../redux/actions";
import { sagaActions } from "../toolkit/sagas";

const List = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  return (
    <div>
      <button onClick={() => dispatch(getUsersFetch())}>
        GET users using redux
      </button>
      <button onClick={() => dispatch({ type: sagaActions.FETCH_DATA_SAGA })}>
        GET users using toolkit
      </button>
      {JSON.stringify(users, null, 4)}
    </div>
  );
};

export default List;
