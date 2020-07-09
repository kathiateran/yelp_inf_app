import React, { Component } from 'react'
import UserItem from './UserItem'


class Categories extends Component {
    state = {

        users: [
            {
                id: '1',
                login: 'Thai V.',
                type:'Most Friends',
                category:'Ramen, Japanese',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/ErX__Hv7w6S9QTn5lGV-nA/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=UDATvQLaHkx-FiMPQIGh0Q'
            },
            {
                id: '2',
                login: 'Mike C.',
                type:'Most Fans & Elite',
                category:'Italian',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/F3XWrYq1V4m4nZ5aVufJlQ/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=37cpUoM8hlkSQfReIEBd-Q'
            },
            {
                id: '3',
                login: 'Russel S.',
                type:'Oldest & Elite',
                category:'Food Delivery Service',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/JpvIXquK9flx32lJJivTLg/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=c6HT44PKCaXqzN_BdgKPCw'
            },
            {
                id: '4',
                login: 'Harald C.',
                type:'Most Useful & Elite',
                category: 'Arts & Ent., Restaurants.',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/po2Be-SmtveCzNywELd45A/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=--2vR0DIsmQ6WfcSzKWigw'
            },
            {
                id: '5',
                login: 'Victor G.',
                type:'Highest Review Count',
                business: 'Arts & Ent., Restaurants.',
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

export default Categories
