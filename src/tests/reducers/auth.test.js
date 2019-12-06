import authReducer from "../../reducers/auth";

test("should set uid for login", () => {
  const action = {
    type: "LOGIN",
    uid: "2323nb23"
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("should clear uid for logut", () => {
  const action = {
    type: "LOGOUT"
  };
  const state = authReducer({ uid: "323nn23" }, action);
  expect(state).toEqual({});
});
