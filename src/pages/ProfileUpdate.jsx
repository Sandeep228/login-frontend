import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
 import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { reset, updateUser } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


function ProfileUpdate() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        dob: '',
        contactno: '',
    })

    const { name, age, dob, contactno } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth)

    useEffect(() => {
        if (!user) {
            navigate('/login')
          }
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())


    }, [user, isError, isSuccess, message, dispatch, navigate])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {name, age, dob, contactno}
            dispatch(updateUser(userData))
        }
    

     if(isLoading){
         return <Spinner />
     }


    return (
        <>

            <section className='heading' >
                <h3>
                    <FaUser /> profile
                </h3>
                <p>Please Update your profile</p>
            </section>
            <section className='form'>
                <form onSubmit={onSubmit} >
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id='name'
                            name='name'
                            value={name}
                            placeholder='Enter your name'
                            onChange={onChange} 
                            />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id='age'
                            name='age'
                            value={age}
                            placeholder='Enter your Age'
                            onChange={onChange} 
                            />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id='dob'
                            name='dob'
                            value={dob}
                            placeholder='Enter your Date of Birth'
                            onChange={onChange}
                             />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id='contactno'
                            name='contactno'
                            value={contactno}
                            placeholder='Enter your Contact Number'
                            onChange={onChange} 
                            />
                    </div>

                    <div className="form-group">
                        <button type='submit' className='btn btn-block'>Submit</button>
                    </div>

                </form>
            </section>

        </>
    )
}

export default ProfileUpdate