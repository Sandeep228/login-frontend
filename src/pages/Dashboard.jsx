import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProfileUpdate from './ProfileUpdate'

function Dashboard() {
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])
  return (
    <>

      <section className='heading'>
        <h3>Welcome    {user && user.name}</h3>

      </section>
      <ProfileUpdate />

    </>
  )
}
export default Dashboard