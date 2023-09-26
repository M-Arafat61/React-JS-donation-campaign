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
      className=' flex flex-col lg:flex-row rounded-lg space-y-5'
    >
      <div>
        <img
          className='object-fill h-auto md:h-full w-full md:w-96 rounded-s-lg '
          src={image}
          alt=''
        />
      </div>
      <div className='flex flex-col  pl-2  md:pl-5 '>
        <div>
          <span
            style={{ backgroundColor: category_bg_color, color: text_color }}
            className='inline-block px-2 py-1 rounded-md text-lg font-medium'
          >
            {category}
          </span>
        </div>
        <h3 className='text-2xl font-bold '>{title}</h3>
        <p style={{ color: text_color }} className='text-lg font-bold'>
          ${price}
        </p>

        {
          <Link to='/' className='pb-2 pt-5'>
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
  );
};
DonationsCard.propTypes = {
  eachDonation: PropTypes.object,
};
export default DonationsCard;
