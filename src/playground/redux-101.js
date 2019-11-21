import { createStore } from "redux";

// Destructuring arguments passed into functions
// const add = ({ a, b }, c) => {
//   return a + b + c;
// };

// console.log(add({ a: 1, b: 2 }, 100));

// Action generators - function that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const resetCount = () => ({
  type: "RESET"
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count
});

// Reducers
// 1, Reducers are pure functions
// Not a pure function
// let myNum;
// const add = num => {
//   myNum = num + 1;
// };
// add(1);
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// I'd like to increment the count
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });
// store.dispatch({
//   type: "INCREMENT"
// });
// store.dispatch({
//   type: "RESET"
// });
// store.dispatch({
//   type: "DECREMENT"
// });
// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 10
// });
// store.dispatch({
//   type: "SET",
//   count: 101
// });

// Refactor
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));
