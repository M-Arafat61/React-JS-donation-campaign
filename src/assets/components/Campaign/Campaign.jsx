import CampaignCard from "./CampaignCard";

const Campaign = ({ campaign }) => {
  //   console.log(campaign);
  return (
    <div>
      <CampaignCard campaign={campaign}></CampaignCard>
    </div>
  );
};

export default Campaign;
