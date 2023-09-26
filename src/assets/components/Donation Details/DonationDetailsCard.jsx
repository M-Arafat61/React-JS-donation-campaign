import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationDetailsCard = ({ campaign }) => {
  const { id, image, title, price, description, text_color } = campaign || {};

  const handleAddToDonation = () => {
    const donationItemsArray = [];
    const addedDonationItems = JSON.parse(localStorage.getItem("donations"));
    if (!addedDonationItems) {
      donationItemsArray.push(campaign);
      localStorage.setItem("donations", JSON.stringify(donationItemsArray));
      return toast.success("Thank You. You've Successfully Donated!", {
        style: {
          color: "white",
          fontSize: "20px",
          backgroundColor: "blue",
        },
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const isExist = addedDonationItems.find(donation => donation.id === id);

      if (!isExist) {
        donationItemsArray.push(...addedDonationItems, campaign);
        localStorage.setItem("donations", JSON.stringify(donationItemsArray));
        return toast.success("Thank You. You've Successfully Donated!", {
          style: {
            color: "white",
            fontSize: "20px",
            backgroundColor: "blue",
          },
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      } else {
        return toast.error("You've Already Donated for this Campaign!", {
          style: {
            color: "white",
            fontSize: "20px",
            backgroundColor: "red",
          },
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };

  return (
    <div className='p-10 space-y-5'>
      <div className='relative'>
        <img className='m-auto w-full object-cover' src={image} alt='' />
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
      <ToastContainer></ToastContainer>
    </div>
  );
};
DonationDetailsCard.propTypes = {
  campaign: PropTypes.object,
};
export default DonationDetailsCard;
