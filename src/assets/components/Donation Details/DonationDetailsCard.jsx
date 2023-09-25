import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const DonationDetailsCard = ({ campaign }) => {
  const { id, image, title, price, description, text_color } = campaign || {};

  const handleAddToDonation = () => {
    console.log("clicked donate");
    const donationItemsArray = [];
    const addedDonationItems = JSON.parse(localStorage.getItem("donations"));
    if (!addedDonationItems) {
      donationItemsArray.push(campaign);
      localStorage.setItem("donations", JSON.stringify(donationItemsArray));
    } else {
      const isExist = addedDonationItems.find(donation => donation.id === id);
      if (!isExist) {
        donationItemsArray.push(...addedDonationItems, campaign);
        localStorage.setItem("donations", JSON.stringify(donationItemsArray));
      } else {
        alert("already added");
      }
    }
  };

  return (
    <div className='p-10 space-y-5'>
      <div className='relative'>
        <img className='m-auto object-contain' src={image} alt='' />
        <div className='absolute w-full bottom-0 bg-black bg-black-rgba text-[#f1f1f1] opacity-100 p-5 '>
          {
            <Link className=''>
              <button
                onClick={handleAddToDonation}
                style={{
                  backgroundColor: text_color,
                }}
                className='text-white font-semibold -tracking-tighter text-xl px-2 rounded-md py-1 '
              >
                Donate ${parseInt(price)}
              </button>
            </Link>
          }
        </div>
      </div>
      <div className='space-y-3'>
        <h3 className='text-xl font-bold'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
DonationDetailsCard.propTypes = {
  campaign: PropTypes.object,
};
export default DonationDetailsCard;
