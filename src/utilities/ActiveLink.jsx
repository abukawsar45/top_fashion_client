import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'text-blue-600 font-bold duration-75 transition-all'
            : 'font-semibold duration-75 transition-all'
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;