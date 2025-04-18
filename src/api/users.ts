// src/api/users.ts
import axiosClient from './axios'

export const getUsers = async () => {
    try {
        const res = await axiosClient.get('/users')
        return res.data
    } catch (error) {
        throw error
    }
}