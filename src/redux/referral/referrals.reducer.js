import ReferralActionTypes from "./referrals.types";

const initialState = {
  isFetching: false,
  errorMessage: null,
  data: [],
};

const referralReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReferralActionTypes.GET_REFERRAL_START:
      return {
        ...state,
        isFetching: true,
      };
    case ReferralActionTypes.GET_REFERRAL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: { ...action.payload },
      };
    case ReferralActionTypes.GET_REFERRAL_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
export default referralReducer;
