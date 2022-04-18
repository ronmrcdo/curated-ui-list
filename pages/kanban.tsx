import { CogIcon } from '@heroicons/react/outline';
import { UserAddIcon } from '@heroicons/react/solid';
import Avatar from '../components/Kanban/Avatar';
import Board from '../components/Kanban/Board';
import Layout from '../components/Kanban/Layout';
import { User } from '../interfaces';
import { sampleUserData } from '../utils/sample-data';

function IndexPage() {
  return (
    <Layout title="Kanban Redesign">
      <div className="w-full flex items-center justify-between">
        <div className="relative flex items-start space-x-2 text-slate-600 dark:text-gray-300">
          <h1 className="text-2xl leading-tight mb-3 font-bold">eRx Project</h1>
          <CogIcon className="w-6" />
        </div>

        <div className="hidden md:flex space-x-5">
          <button
            type="button"
            className="bg-slate-200 text-slate-500 rounded-full p-2 flex items-center justify-center"
          >
            <UserAddIcon className="w-6" />
          </button>

          <div className="flex -space-x-3 text-white font-bold">
            {sampleUserData.map((user: User) => (
              <Avatar key={user.id} name={user.name} image={user.avatar} />
            ))}
            <div className="w-10 h-10 rounded-full shadow-lg ring-2 ring-white dark:ring-dark-400 z-50 flex items-center justify-center text-blue-700 bg-blue-300">
              +1
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-slate-500 dark:text-gray-400">
        Project description of this application.
      </p>

      <div className="w-full relative mt-5 flex h-full max-h-[85%] justify-between">
        <Board />
      </div>
    </Layout>
  );
}

export default IndexPage;
