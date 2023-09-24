import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
    <div className='flex justify-between items-center p-5 max-w-screen-xl m-auto'>
      <Logo></Logo>
      <nav className='flex gap-4 text-xl'>
        <ul>
          <li>
            {" "}
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
  );
};

export default NavBar;
