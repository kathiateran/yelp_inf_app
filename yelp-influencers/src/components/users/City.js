import React, { Component } from 'react'
import UserItem from './UserItem'

class City extends Component {

    state = {

        users: [
            {
                id: '1',
                login: 'Debbie C.',
                type:'Most Friends',
                city:'Madison, WI',
                avatar_url: 'https://www.argentum.org/wp-content/uploads/2018/12/blank-profile-picture-973460_6404-300x300.png',
                html_url: 'https://www.yelp.com/user_details?userid=RR8z_wcpxlH8Hx3E8MrPjg'
            },
            {
                id: '2',
                login: 'Harald C.',
                type:'Most Useful & Elite',
                city:'Las Vegas, NV',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/po2Be-SmtveCzNywELd45A/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=--2vR0DIsmQ6WfcSzKWigw'
            },
            {
                id: '3',
                login: 'Russel S.',
                type:'Oldest & Elite',
                city:'San Francisco, CA',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/JpvIXquK9flx32lJJivTLg/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=c6HT44PKCaXqzN_BdgKPCw'
            },
            {
                id: '4',
                login: 'Mike C.',
                type:'Most Fans & Elite',
                city:'Las Vegas, NV',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/De782H1-_KvJMSR9iE5skg/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=37cpUoM8hlkSQfReIEBd-Q'
            },
            {
                id: '5',
                login: 'Victor G.',
                type:'Highest Review Count',
                city:'Las Vegas, NV',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/Tx8oXPMPyGdIqq20HRbKxA/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=8k3aO-mPeyhbR5HUucA5aA'
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

export default City
