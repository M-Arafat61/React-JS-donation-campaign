import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const DonationDetailsCard = ({ campaign }) => {
  const { image, title, price, description, button_color } = campaign || {};
  return (
    <div className='p-10 space-y-5'>
      <div className='relative'>
        <img className='w-full' src={image} alt='' />
        <div className='absolute w-full bottom-0 bg-black bg-black-rgba text-[#f1f1f1] opacity-100 p-5 '>
          {
            <Link className=''>
              <button
                style={{
                  backgroundColor: button_color,
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
  campaign: PropTypes.object.isRequired,
};
export default DonationDetailsCard;
