import { createSelector } from "reselect";

const getUserNames = (state) => state.users;

export const getNames = createSelector([getUserNames], (getUserNames) => {
  return getUserNames.users.map((u) => u.name);
});
