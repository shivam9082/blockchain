import React from 'react'
import logo from '../assets/images/logo192.png';
import CurrentActivity from './CurrentActivity';
import RecentTransactions from './RecentTransactions';
import QuickLinks from './QuickLinks';


const MainComponent = () => {
  return (
    <section className="p-4 flex-grow bg-gray-400 text-gray-800">
        <CurrentActivity />
        <RecentTransactions />
        <QuickLinks />
  </section>
  )
}

export default MainComponent