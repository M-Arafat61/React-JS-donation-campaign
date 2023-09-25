import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "./DonationDetailsCard";

const DonationDetails = () => {
  const [campaign, setCampaign] = useState();
  const loaderData = useLoaderData();
  const { id } = useParams();
  const campaignData = loaderData.data;
  // console.log(campaignData);
  useEffect(() => {
    const findCampaign = campaignData?.find(
      eachCampaign => eachCampaign.id === parseInt(id)
    );
    setCampaign(findCampaign);
  }, [id, campaignData]);
  //   console.log(campaign);
  return (
    <div className='max-w-screen-xl m-auto'>
      <DonationDetailsCard campaign={campaign}></DonationDetailsCard>
    </div>
  );
};

export default DonationDetails;
