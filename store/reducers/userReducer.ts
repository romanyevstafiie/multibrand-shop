import {
  UserAction,
  UserActionTypes,
  UserState,
} from '../../types/userReduxTypes';

const initialState: UserState = {
  isLoading: false,
  isLoaded: false,
  error: null,
  loggedOut: false,
  sessionExpired: false,
  location: {
    continent: '',
    country: '',
    countryCode: '',
    city: '',
    region: '',
  },
};
/**
 *@function productsReducer
 *@param {UserState} state - state of reducer
 *@param {object} action - action to be reduced
 *@returns {object} - new user state
 */
export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.GET_USER_LOCATION:
      return { ...state, isLoading: true };

    case UserActionTypes.LOCATION_DID_LOAD:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        location: {
          country: action.payload.country,
          city: action.payload.city,
          continent: action.payload.continent,
          countryCode: action.payload.countryCode,
          region: action.payload.region,
        },
      };
    case UserActionTypes.LOCATION_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
