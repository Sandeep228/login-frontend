import axios from 'axios'

const API_URL = '/api/users/'

// Register User
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Update User
const updateUser = async ( userID, userData, token) => {

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    
  
    const response = await axios.put(API_URL + userID, userData , config)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

  
    return response.data
  }


// login User
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}


// Logout User
const logout = ()=>{
    localStorage.removeItem('user')
}

const authService = {
    register,
    updateUser,
    logout,
    login,
}

export default authService