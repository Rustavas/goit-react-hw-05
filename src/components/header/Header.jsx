
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Loader from '../loader/Loader'
import Navigation from '../navigation/Navigation'

const Header = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Header
