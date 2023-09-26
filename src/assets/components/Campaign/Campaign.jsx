import CampaignCard from "./CampaignCard";
import PropTypes from "prop-types";
const Campaign = ({ campaign }) => {
  //   console.log(campaign);
  return (
    <div>
      <CampaignCard campaign={campaign}></CampaignCard>
    </div>
  );
};
Campaign.propTypes = {
  campaign: PropTypes.object,
};
export default Campaign;
