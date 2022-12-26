import { profileActionTypes } from './profileActions';

const initialState = {
  birthday: null,
  expectedAge: null,
  isLoading: true,
};

function handleSetBirthday(state, { birthday }) {
  return { ...state, birthday };
}

function handleSetExpectedAge(state, { expectedAge }) {
  return { ...state, expectedAge };
}

function handleSetProfile(state, { birthday, expectedAge }) {
  return { ...state, birthday, expectedAge };
}

function handleSetIsLoading(state, { isLoading }) {
  return { ...state, isLoading };
}

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case profileActionTypes.SET_BIRTHDAY:
      return handleSetBirthday(state, action.payload);

    case profileActionTypes.SET_EXPECTED_AGE:
      return handleSetExpectedAge(state, action.payload);

    case profileActionTypes.SET_PROFILE:
      return handleSetProfile(state, action.payload);

    case profileActionTypes.SET_IS_LOADING:
      return handleSetIsLoading(state, action.payload);

    default:
      return state;
  }
}
