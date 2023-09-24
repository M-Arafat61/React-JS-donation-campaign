import { Link } from "react-router-dom";

const CampaignCard = ({ campaign }) => {
  const {
    card_bg_color,
    image,
    category,
    title,
    text_color,
    category_bg_color,
  } = campaign;
  console.log(campaign);
  return (
    <div>
      <Link>
        <div
          style={{ backgroundColor: card_bg_color }}
          className=' w-full h-auto rounded-lg '
        >
          <div className=''>
            <div className='flex justify-center items-center '>
              <img className='object-cover rounded-lg' src={image} alt='' />
            </div>
            <div style={{ color: text_color }} className='py-2 p-3'>
              <span
                className='px-3 rounded-lg'
                style={{ backgroundColor: category_bg_color }}
              >
                {category}
              </span>
              <p className='text-lg font-semibold'>{title}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CampaignCard;
