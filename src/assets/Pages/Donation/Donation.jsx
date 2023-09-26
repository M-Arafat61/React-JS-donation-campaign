import { useEffect, useState } from "react";
import DonationsCard from "./DonationsCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNoFound] = useState("");
  const [seeAll, setSeeAll] = useState(false);
  useEffect(() => {
    const addedDonationItems = JSON.parse(localStorage.getItem("donations"));

    if (addedDonationItems) {
      setDonation(addedDonationItems);
    } else {
      setNoFound("no donations made");
    }
  }, []);
  console.log(donation);
  return (
    <>
      {noFound && (
        <p className='min-h-[100vh] text-center flex justify-center items-center'>
          {noFound}
        </p>
      )}

      {seeAll ? (
        <div className='max-w-screen-xl m-auto grid grid-cols-2 gap-5 p-10'>
          {donation.map(eachDonation => (
            <DonationsCard
              key={eachDonation.id}
              eachDonation={eachDonation}
            ></DonationsCard>
          ))}
        </div>
      ) : (
        <div className='max-w-screen-xl m-auto grid grid-cols-2 gap-5 p-10'>
          {donation.slice(0, 4).map(eachDonation => (
            <DonationsCard
              key={eachDonation.id}
              eachDonation={eachDonation}
            ></DonationsCard>
          ))}
        </div>
      )}
      {donation.length > 4 && !seeAll && (
        <div className='pb-10 flex items-center justify-center'>
          <button
            onClick={() => setSeeAll(!seeAll)}
            className='px-5 py-1 bg-green-600 text-xl font-medium rounded-md text-white '
          >
            See all
          </button>
        </div>
      )}
    </>
  );
};

export default Donation;
