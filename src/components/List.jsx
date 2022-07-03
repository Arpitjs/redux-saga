import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "../redux/actions";
import { sagaActions } from "../toolkit/actions";
import { decrement, increment } from "../toolkit/createReducer";

const List = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { counter } = useSelector(state => state.counter);
  return (
    <div>
      <button onClick={() => dispatch(getUsersFetch())}>
        GET users using redux
      </button>
      <button onClick={() => dispatch({ type: sagaActions.GET_USERS_FETCH })}>
        GET users using toolkit
      </button>
      { JSON.stringify(users, null, 4)}
       <button onClick={() => dispatch(increment())}>
        +
      </button>
      <button onClick={() => dispatch(decrement())}>
        -
      </button>
      counter: {counter} 
    </div>
  );
};

export default List;
