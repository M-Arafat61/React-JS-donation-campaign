import { useLoaderData } from "react-router-dom";
import Campaign from "../../components/Campaign/Campaign";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const campaignData = useLoaderData();

  const handleSearchRecords = () => {
    const filtered = campaignData.data.filter(eachCampaign =>
      eachCampaign.category.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setFilteredResults(filtered);
  };

  const renderedResults =
    search.length > 0 ? filteredResults : campaignData.data;

  return (
    <>
      <div className='relative mb-5 max-w-screen-xl m-auto '>
        <img
          className='opacity-20 m-auto object-cover p-5 h-[70vh] w-full'
          src='/donation_bg.jpg'
          alt=''
        />
        <div className='absolute w-full flex flex-col items-center bottom-1/2'>
          <h2 className='text-2xl font-bold pb-5'>
            I Grow By Helping People In Need
          </h2>

          <div className='flex justify-center items-center'>
            <input
              className='px-3 py-1 text-lg rounded-l-lg'
              onChange={e => setSearch(e.target.value)}
              type='text'
              name='search'
              id=''
              placeholder='Search here....'
              onInput={handleSearchRecords}
            />
            <button className='bg-[#FF444A] text-xl text-white font-semibold px-3 py-1 rounded-r-lg'>
              Search
            </button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl m-auto'>
        {renderedResults.map(campaign => (
          <Campaign key={campaign.id} campaign={campaign}></Campaign>
        ))}
      </div>
    </>
  );
};

export default Home;
