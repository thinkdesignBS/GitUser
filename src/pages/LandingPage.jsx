import { Outlet, useNavigation } from 'react-router-dom'
import Header from '../components/Header'

const LandingPage = () => {
  const navigation = useNavigation()
  const ispageLoading = navigation.state === 'loading'
  return (
    <>
      <Header />
      <div className='container mx-auto'>
        {ispageLoading ? (
          <div className=' text-2xl'>Loading ...</div>
        ) : (
          <Outlet />
        )}
      </div>
    </>
  )
}

export default LandingPage
