import { createSelector } from 'reselect';

export const getModuleState = state => state.loginModule;

export const getIsLoading = state => getModuleState(state).isLoading;

export const getUsers = state => getModuleState(state).users;

export const getLoggedInUserId = state => getModuleState(state).loggedInUserId;

export const getLoggedInUser = createSelector(
  [getUsers, getLoggedInUserId],
  (users, loggedInUserId) =>
    users.find(user => user.id === loggedInUserId)
);
