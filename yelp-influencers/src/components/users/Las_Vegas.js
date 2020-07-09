import React, { Component } from 'react'
import UserItem from './UserItem'

class Las_Vegas extends Component {
    state = {

        users: [
            {
                id: '1',
                login: 'Sarah K.',
                type:'Most Friends',
                business:'Primeburger',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/ym15t8rQdfvdZo3RWRZbWQ/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=y4aEhXdfKAX8klEvOszSCA'
            },
            {
                id: '2',
                login: 'Harald C.',
                type:'Most Useful & Elite',
                business: 'Fashion Show',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/po2Be-SmtveCzNywELd45A/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=--2vR0DIsmQ6WfcSzKWigw'
            },
            {
                id: '3',
                login: 'Jeremy "Big Papa" S.',
                type:'Oldest & Elite',
                business: 'Botero',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/5JHCEnieoILDB6FyFsu0NA/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=nkN_do3fJ9xekchVC-v68A'
            },
            {
                id: '4',
                login: 'Mike C.',
                type:'Most Fans & Elite',
                business: 'Di Fara Pizza',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/F3XWrYq1V4m4nZ5aVufJlQ/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=37cpUoM8hlkSQfReIEBd-Q'
            },
            {
                id: '5',
                login: 'Victor G.',
                type:'Highest Review Count',
                business: 'Circus Las Vegas Hotel & Casino',
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

export default Las_Vegas
