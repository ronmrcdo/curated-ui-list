import {
  SearchIcon,
  BellIcon,
  MenuIcon,
  SunIcon,
  MoonIcon,
} from '@heroicons/react/outline';
import { useState } from 'react';

type Props = {
  toggleSidebar: () => void;
};

function Header({ toggleSidebar }: Props) {
  const [isLightMode, setLightTheme] = useState(true);

  const toggleTheme = () => {
    setLightTheme(!isLightMode);
    if (isLightMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="w-full shadow-sm flex items-center justify-between px-6 py-2">
      <div className="relative flex space-x-4">
        <button
          type="button"
          className="bg-transparent text-slate-600 dark:text-gray-300"
          onClick={() => toggleSidebar()}
        >
          <MenuIcon className="w-5" />
        </button>

        <div className="relative w-64 hidden md:block">
          <input
            className="w-full rounded-md bg-slate-100 dark:bg-dark-500 dark:text-white border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            type="search"
            placeholder="Search"
          />
          <SearchIcon className="w-5 pointer-events-none absolute transform top-1/2 -translate-y-1/2 right-3 text-slate-600 dark:text-gray-300" />
        </div>
      </div>

      <div className="relative flex space-x-4 text-slate-600 dark:text-gray-300">
        <BellIcon className="w-6" />

        <button
          type="button"
          className="
            text-gray-500
            dark:text-gray-400
            hover:bg-gray-100
            dark:hover:bg-gray-700
            focus:outline-none
            focus:ring-4
            focus:ring-gray-200
            dark:focus:ring-gray-700
            rounded-lg
            text-sm
            p-2.5
          "
          onClick={toggleTheme}
        >
          {isLightMode ? (
            <SunIcon className="w-6" />
          ) : (
            <MoonIcon className="w-6" />
          )}
        </button>

        <button
          type="button"
          className="relative flex items-center space-x-2 bg-transparent"
        >
          <span className="font-semibold hidden md:block">Hi, Ron Mercado</span>

          <img
            className="w-10 h-10 rounded-full flex items-center justify-center"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="user"
          />
        </button>
      </div>
    </div>
  );
}

export default Header;
