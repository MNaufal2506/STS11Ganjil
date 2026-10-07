import { NavLink, Link } from "react-router";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <span className="w-8 h-8 bg-black text-white font-bold flex items-center justify-center rounded-lg text-sm">
          L
        </span>
        <span className="font-bold text-lg text-gray-900">Logo</span>
      </Link>

      <nav className="flex items-center gap-1">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "px-4 py-1.5 rounded-lg text-sm transition bg-gray-300 text-gray-900 font-medium"
              : "px-4 py-1.5 rounded-lg text-sm font-bold transition duration-300 text-gray-500 hover:text-gray-900 hover:bg-gray-100 "
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-1.5 rounded-lg text-sm transition bg-gray-300 text-gray-900 font-medium"
              : "px-4 py-1.5 rounded-lg text-sm font-bold transition duration-300 text-gray-500 hover:text-gray-900 hover:bg-gray-100 "
          }
        >
          About
        </NavLink>

        <NavLink
          to="/testimony"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-1.5 rounded-lg text-sm transition bg-gray-300 text-gray-900 font-medium"
              : "px-4 py-1.5 rounded-lg text-sm font-bold transition duration-300 text-gray-500 hover:text-gray-900 hover:bg-gray-100 "
          }
        >
          Testimony
        </NavLink>

        <NavLink
          to="/faq"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-1.5 rounded-lg text-sm transition bg-gray-300 text-gray-900 font-medium"
              : "px-4 py-1.5 rounded-lg text-sm font-bold transition duration-300 text-gray-500 hover:text-gray-900 hover:bg-gray-100 "
          }
        >
          FAQ
        </NavLink>
      </nav>

      <Link className="bg-black text-white px-4.5 py-1.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition duration-700">
        Sign In
      </Link>
    </header>
  );
}
