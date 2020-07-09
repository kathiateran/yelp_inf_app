import React, { Component } from 'react'
import UserItem from './UserItem'


class Users extends Component {

    state = {

        users: [
            {
                id: 'a',
                login: 'Sarah K.',
                type:'Friendliest',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/ym15t8rQdfvdZo3RWRZbWQ/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=y4aEhXdfKAX8klEvOszSCA'
            },
            {
                id: 'b',
                login: 'Harald C.',
                type:'Friendliest',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/po2Be-SmtveCzNywELd45A/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=--2vR0DIsmQ6WfcSzKWigw'
            },
            {
                id: 'c',
                login: 'Jeremy "Big Papa" S.',
                type:'Friendliest',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/5JHCEnieoILDB6FyFsu0NA/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=nkN_do3fJ9xekchVC-v68A'
            }
            
        ]
    }


    render() {
        return (
            <div style={userStyle} className="text-top">
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))} 
            </div>
           
        );
    }
}

const userStyle ={
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap:'1rem'
}

export default Users
