import axios from "axios"


const api = axios.create({
    baseURL: 'https://movie-app-backend-szlu.onrender.com',
    withCredentials: true,
})
export const getAllUsers = async () => {
    try {
        const response = await api.get('/get/users');
        return {
            success: true,
            data: response.data,
            message: 'Success'
        }
    } catch (error) {
        return {
            success: false,
            message: error?.response?.data?.message
        }
    }
}

export const deleteUser = async (userId) => {
    try {
        const response =await api.delete('/users/delete/'+userId);
        return {
            success: true, 
            data: response.data,
            message: "Success"
        }
    } catch (error) {
        return {
            success: false,
            message: error.response.data.message
        }
    }
}