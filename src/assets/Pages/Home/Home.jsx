import { useLoaderData } from "react-router-dom";
import Campaign from "../../components/Campaign/Campaign";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const campaignData = useLoaderData();
  // console.log(campaignData.data);
  console.log(search);

  const handleSearch = searchValue => {
    setSearch(searchValue);
    if (search !== "") {
      const filtered = campaignData.data.filter(categoryName =>
        categoryName.category.toLowerCase().includes(search.toLocaleLowerCase())
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]);
    }
  };
  console.log(filteredResults);
  return (
    <>
      <div className='relative'>
        <img
          className='opacity-20 m-auto object-contain '
          src='/donation_bg.jpg'
          alt=''
        />
        <div className='absolute w-full flex flex-col items-center top-1/2'>
          <h2 className='text-2xl font-bold pb-5'>
            I Grow By Helping People In Need
          </h2>
          <div>
            <input
              onChange={e => handleSearch(e.target.value)}
              className='px-3 py-1 text-lg rounded-l-lg'
              type='text'
              name='search'
              id=''
              placeholder='Search here....'
            />
            <button
              onClick={() => handleSearch()}
              className='bg-[#FF444A] text-xl text-white font-semibold px-3 py-1 rounded-r-lg'
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {search ? (
        <div className='grid mt-10 grid-cols-4 gap-5 max-w-screen-xl m-auto'>
          {filteredResults.map(campaign => (
            <Campaign key={campaign.id} campaign={campaign}></Campaign>
          ))}
        </div>
      ) : (
        <div className='grid mt-10 grid-cols-4 gap-5 max-w-screen-xl m-auto'>
          {campaignData.data.map(campaign => (
            <Campaign key={campaign.id} campaign={campaign}></Campaign>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
