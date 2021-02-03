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
            .get(`users?page=${currentPage}&count=${pageSize}`);
                },

    followUser(userId) {
        return instance
            .post(`follow/${userId}`);
      
   
    },

    unfollowUser(userId){
        return instance
        .delete(`follow/${userId}`);
        
    }
};




export const profileApi = {
    getProfileInfo(userId){
        return instance.get('profile/' + userId);
    },
    getStatus(userId){
        return instance.get('profile/status/' +userId);
    },
    updateStatus(status){
        return instance.put('profile/status/', { status:status});
    }

}

export const authApi = {
    checkAuth(){
        return instance.get ('auth/me');
        
    },

    login(email, password, rememberMe = false){
        return instance.post('auth/login', {email, password, rememberMe});
    },

    logout(){
        return instance.delete('auth/login');
    }
}