import ReferralTypes from "./referrals.types";
import axios from "../../../utils/axios";
import { token, id } from "../../../utils/constants";

//GETTING referralS
const getReferralsStart = () => ({
  type: ReferralTypes.GET_REFERRAL_START,
});

const getReferralsSuccess = (referrals) => ({
  type: ReferralTypes.GET_REFERRAL_SUCCESS,
  payload: referrals,
});

const getReferralsFailure = (message) => ({
  type: ReferralTypes.GET_REFERRAL_FAILURE,
  payload: message,
});

export const getReferralsStartAsync = () => {
  return (dispatch) => {
    dispatch(getReferralsStart());
    axios
      .get("referrals/" + id)
      .then((res) => {
        const referrals = res.data;
        if (res.data.success === false) throw new Error(res.data.message);
        dispatch(getReferralsSuccess(referrals));
      })
      .catch((error) => dispatch(getReferralsFailure(error.message)));
  };
};
