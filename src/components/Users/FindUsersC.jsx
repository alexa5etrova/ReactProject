import * as axios from 'axios';
import React from 'react';
import s from './FindUsers.module.scss';
import userPhoto from './../../assets/images/userPhoto.png';


class FindUsers extends React.Component {
    componentDidMount(){
        axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });

    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });


    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

        

        return (<div>
            <div>
                { pages.map(p => {
                    return <span className={this.props.currentPage === p && s.selectedPage}
                    onClick={()=>{this.onPageChanged(p)} }>{p}  </span>
                })}
            </div>




            {
                this.props.users.map(u =>
                    <div key={u.id} className={s.userContainer}>
                        <div className={s.avatarCont}>
                            <div className={s.round}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userAva} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button className={s.btnFollow} onClick={() => { this.props.toggleFollow(u.id) }}>Unfollow</button>
                                    : <button className={s.btnFollow} onClick={() => { this.props.toggleFollow(u.id) }}>Follow</button>}

                            </div>
                        </div>
                        <div className={s.userInfoShield}>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>"u.location.country"</div>
                                <div>"u.location.city"</div>
                            </div>
                        </div>
                    </div>)
            }


        </div>)
    }


}


export default FindUsers;