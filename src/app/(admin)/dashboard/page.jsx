import React from 'react'

import TitlePage from '@/components/TitlePage'

export const metadata = {
  title: "Dashboard",
  description: "Dashboard.jsx",
};

const Dashboard = ({children}) => {
  return (
    <>
        <TitlePage title={"Dashboard"} />
        {children}
    </>
  )
}

export default Dashboard