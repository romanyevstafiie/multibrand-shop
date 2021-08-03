import {
  ReviewAction,
  ReviewActionTypes,
  ReviewsState,
} from '../../types/reviewsTypes';

const initialState: ReviewsState = {
  productReviews: [],
  isLoading: false,
  isReviewUploaded: false,
  error: null,
};

/**
 *@function reviewsReducer
 *@param {ReviewsState} state - state of reducer
 *@param {object} action - action to be reduced
 *@returns {object} - new review state
 */
export const reviewsReducer = (
  state = initialState,
  action: ReviewAction
): ReviewsState => {
  //TODO: INTEGRATION TESTS AFTER ADDING ALL FEATURES
  switch (action.type) {
    case ReviewActionTypes.UPLOAD_PRODUCT_REVIEW:
      return { ...state, isLoading: true };

    case ReviewActionTypes.PRODUCT_REVIEW_WAS_UPLOADED:
      return { ...state, isLoading: false, isReviewUploaded: action.payload };

    case ReviewActionTypes.PRODUCT_REVIEW_UPLOAD_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case ReviewActionTypes.LOAD_PRODUCT_REVIEWS:
      return { ...state, isLoading: true };

    case ReviewActionTypes.PRODUCT_REVIEWS_DID_LOAD:
      return { ...state, isLoading: false, productReviews: action.payload };

    case ReviewActionTypes.PRODUCT_REVIEW_UPLOAD_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};
