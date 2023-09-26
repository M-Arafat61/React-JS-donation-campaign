import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=''>
      <div className='p-5 flex flex-col gap-10 md:flex-row justify-between items-center max-w-screen-xl m-auto'>
        <img className='w-full md:w-40' src='/Logo.png' alt='' />
        <nav className='flex gap-5 text-xl font-medium'>
          <ul>
            <li>
              <NavLink
                to='/'
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                to='/donation'
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline"
                    : ""
                }
              >
                Donation
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                to='/statistics'
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] underline"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
