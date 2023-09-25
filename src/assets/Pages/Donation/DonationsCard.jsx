import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const DonationsCard = ({ eachDonation }) => {
  const {
    image,
    category,
    text_color,
    title,
    price,
    card_bg_color,
    category_bg_color,
  } = eachDonation;
  //   console.log(eachDonation);
  return (
    <div
      style={{ backgroundColor: card_bg_color }}
      className=' flex items-center  rounded-lg gap-5'
    >
      <div className=''>
        <img
          className=' h-52 w-96 rounded-s-lg object-cover'
          src={image}
          alt=''
        />
      </div>

      <div className=''>
        <div className='space-y-1'>
          <span
            style={{ backgroundColor: category_bg_color, color: text_color }}
            className='px-2 py-1 rounded-md text-lg font-medium'
          >
            {category}
          </span>
          <h3 className='text-2xl font-bold '>{title}</h3>
          <p style={{ color: text_color }} className='text-lg font-bold'>
            ${price}
          </p>
          <div className='pt-2'>
            {
              <Link className=''>
                <button
                  style={{
                    backgroundColor: text_color,
                  }}
                  className='text-white font-semibold -tracking-tighter text-xl px-2 rounded-md py-1 '
                >
                  View Details
                </button>
              </Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
DonationsCard.propTypes = {
  eachDonation: PropTypes.object,
};
export default DonationsCard;
