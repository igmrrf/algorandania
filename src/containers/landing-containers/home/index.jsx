import React from "react";
import Banner from "../../../components/landing-components/banner";
import Invitation from "../../../components/landing-components/invitation";
import OurServices from "../../../components/landing-components/our-services";
import Features from "../../../components/landing-components/features";
import AwardsAndCertificates from "../../../components/landing-components/awards-certificates/";
import Statistics from "../../../components/landing-components/statistics";
import Coins from "../../../components/landing-components/coins";
import Faqs from "../../../components/landing-components/faqs";
import Plans from "../../../components/landing-components/plans";
import LandingFooter from "../../../components/landing-components/footer";

function LandingPage() {
  return (
    <div>
      <Banner />
      <Statistics />
      <Invitation />
      <Features />
      <OurServices />
      <Plans />
      <Coins />
      <Faqs />

      <AwardsAndCertificates />
      <LandingFooter />
    </div>
  );
}
export default LandingPage;
