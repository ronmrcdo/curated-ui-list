import {
  ClipboardListIcon,
  ChartSquareBarIcon,
  CogIcon,
  CalendarIcon,
  ChevronDoubleLeftIcon,
  PlusSmIcon,
} from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

type Props = {
  toggleSidebar: () => void;
};

function Sidebar({ toggleSidebar }: Props) {
  return (
    <div className="w-64 bg-slate-50 flex h-full min-h-screen flex-col items-start px-5 py-2 absolute sm:static z-50 transform transition ease-in-out duration-300 dark:bg-dark-700">
      <div className="flex flex-col space-y-6 w-full mb-10">
        <div className="w-full flex justify-between space-x-5 items-center mb-10">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center font-bold text-lg text-indigo-600 dark:text-pink-600">
              B
            </div>
            <h3 className="text-indigo-600 dark:text-pink-600 ml-4 leading-tight text-2xl font-bold">
              Kanban
            </h3>
          </div>
          <button
            type="button"
            className="bg-transparent sm:hidden"
            onClick={() => toggleSidebar()}
          >
            <ChevronDoubleLeftIcon className="w-6 text-slate-300" />
          </button>
        </div>
        <a className="relative inline-block text-slate-600 dark:text-gray-300">
          <ClipboardListIcon className="w-6 inline-block" />
          <span className="ml-4 font-semibold">Tasks</span>
        </a>
        <a className="relative inline-block text-slate-600 dark:text-gray-300">
          <CalendarIcon className="w-6 inline-block" />
          <span className="ml-4 font-semibold">Calendar</span>
        </a>
        <a className="relative inline-block text-slate-600 dark:text-gray-300">
          <ChartSquareBarIcon className="w-6 inline-block" />
          <span className="ml-4 font-semibold">Performance</span>
        </a>
        <a className="relative inline-block text-slate-600 dark:text-gray-300">
          <CogIcon className="w-6 inline-block" />
          <span className="ml-4 font-semibold">Settings</span>
        </a>
      </div>

      <div className="flex flex-col space-y-5 w-full">
        <div className="flex items-center justify-between text-slate-600 dark:text-gray-300">
          <h4 className="font-bold text-md ">Projects</h4>
          <button
            type="button"
            className="border border-1 border-gray-600 dark:border-gray-300 rounded-full bg-transparent flex items-center justify-center"
          >
            <PlusSmIcon className="w-4" />
          </button>
        </div>

        <a className="relative inline-block text-slate-600 dark:text-gray-300">
          <div className="w-2 h-2 rounded-full inline-block bg-indigo-600" />
          <span className="ml-4">eRx Project</span>
        </a>

        <a className="relative inline-block text-slate-600 dark:text-gray-300">
          <div className="w-2 h-2 rounded-full inline-block bg-green-600" />
          <span className="ml-4">cPassport</span>
        </a>

        <a className="relative inline-block text-slate-600 dark:text-gray-300">
          <div className="w-2 h-2 rounded-full inline-block bg-pink-600" />
          <span className="ml-4">Messaging App</span>
        </a>
      </div>
      <div className="flex-auto" />
      <div className="py-5 w-full">
        <div className="bg-white dark:bg-dark-500 rounded-lg w-full shadow-md p-5 space-y-5 flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full items-center p-2 justify-center bg-amber-100">
            <StarIcon className="text-amber-400" />
          </div>
          <div className="text-center text-sm text-slate-600 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            iaculis, libero hendrerit lacinia vehicula, neque urna finibus
            massa.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
