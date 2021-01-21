import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b4b88448-459a-4ee2-987d-453bfb5dee49'
    }
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    followUser(userId) {
        return instance
            .post(`follow/${userId}`)
            .then(response => {
                return response.data
            });
   
    },

    unfollowUser(userId){
        return instance
        .delete(`follow/${userId}`)
        .then(response =>{
           return response.data
         } );
    }
};




export const profileApi = {
    getProfileInfo(userId){
        return instance
        .get('profile/' + userId)
        .then(response => {
            return response.data
        });
    }
}

export const authApi = {
    checkAuth(){
        return instance
        .get ('auth/me')
        .then(response => {
            return response.data
        });
    }
}