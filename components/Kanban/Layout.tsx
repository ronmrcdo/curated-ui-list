import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Sidebar from './Sidebar';

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title }: Props) {
  const [showSidebar, toggleSidebar] = useState(true);

  const onToggle = () => {
    toggleSidebar(!showSidebar);
  };

  return (
    <div className="flex min-h-screen dark:bg-dark-800">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {showSidebar ? <Sidebar toggleSidebar={onToggle} /> : null}

      <div className="flex-auto overflow-hidden shadow-lg rounded-r-lg">
        <Header toggleSidebar={onToggle} />

        <main className="px-6 py-5 w-full flex flex-col h-full">
          {children}
        </main>
      </div>
    </div>
  );
}

Layout.defaultProps = {
  children: null,
  title: 'This is the default title',
};

export default Layout;
