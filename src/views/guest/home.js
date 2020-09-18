import React from "react";
import Banner from "../../components/main-components/banner";
import Invitation from "../../components/main-components/invitation";
import OurServices from "../../components/main-components/our-services";
import Features from "../../components/main-components/features";
import AwardsAndCertificates from "../../components/main-components/awards-certificates";
import Statistics from "../../components/main-components/statistics";
import Coins from "../../components/main-components/coins";
import Faqs from "../../components/main-components/faqs";
import Plans from "../../components/main-components/plans";

function LandingPage() {
  return (
    <div>
      <Banner />
      <Invitation />
      <Statistics />
      <Features />
      <OurServices />
      <Plans />
      <Coins />
      <Faqs />
      <AwardsAndCertificates />
    </div>
  );
}
export default LandingPage;
