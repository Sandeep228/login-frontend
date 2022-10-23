
import { useSelector } from 'react-redux'

function Profile() {
    const { user } = useSelector((state) => state.auth)


    return (
        <>
            <section className='heading'>
                <h2>Welcome    {user && user.name}</h2>
                <h5>{user && user.age}</h5>
                <h5>{user && user.dob}</h5>
                <h5>{user && user.email}</h5>
                <h5>{user && user.contactno}</h5>
            </section>
        </>
    )
}

export default Profile