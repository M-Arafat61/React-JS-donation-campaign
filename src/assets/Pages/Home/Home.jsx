import { useLoaderData } from "react-router-dom";
import Campaign from "../../components/Campaign/Campaign";
// import Campaign from "../../components/Campaign/Campaign";

const Home = () => {
  const campaignData = useLoaderData();
  // console.log(campaignData);
  return (
    <div className='grid grid-cols-4 gap-5 max-w-screen-xl m-auto'>
      {campaignData.data.map(campaign => (
        <Campaign key={campaign.id} campaign={campaign}></Campaign>
      ))}
    </div>
  );
};

export default Home;
