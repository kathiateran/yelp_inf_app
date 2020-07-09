import React, { Component } from 'react'
import UserItem from './UserItem'

class Top_Influencers extends Component {
    state = {

        users: [
            {
                id: '1',
                login: 'Kristina F.',
                type:'1. Most Friends',
                city:'Madison, WI',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/SYIXFYsyQtjrc7jEQF2jAQ/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=m2G3Az7rhKzOM6GmRLWU2Q'
            },
            {
                id: '2',
                login: 'Marla E.',
                type:'2. Most Friends',
                city:'Madison, WI',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/oBkT-Y7Qs7boGGRUJvsykA/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=6yRliUr4a4NOa87y86oEKQ'
            },
            {
                id: '3',
                login: 'Harald C.',
                type:'1. Most Useful',
                city:'Hamburg, Germany',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/po2Be-SmtveCzNywELd45A/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=--2vR0DIsmQ6WfcSzKWigw'
            },
            {
                id: '4',
                login: 'Richard R.',
                type:'2. Most Useful',
                city: 'Suwanee, GA',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/bXbn31BDNpUe1TvPJIn-ww/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=JjXuiru1_ONzDkYVrHN0aw'
            },
            {
                id: '5',
                login: 'Victor G.',
                type:'1. Highest Review Count',
                category: 'Average Stars: 3.28',
                city: 'Oakland, CA',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/Tx8oXPMPyGdIqq20HRbKxA/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=8k3aO-mPeyhbR5HUucA5aA'
            },
            {
                id: '6',
                login: 'Shila B.',
                type:'2. Highest Review Count',
                category: 'Average Stars: 3.85',
                city: 'Vancouver, Canada',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/8fYlBvPW5Eezov8-32XwFA/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=RtGqdDBvvBCjcu5dUqwfzA'
            },
            {
                id: '7',
                login: 'Mike C.',
                type:'1. Most Fans',
                city:'Forest Hills, NY',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/De782H1-_KvJMSR9iE5skg/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=37cpUoM8hlkSQfReIEBd-Q'
            },
            {
                id: '8',
                login: 'Katie B.',
                type:'2. Most Fans',
                city:'Austin, TX',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/wH1tuxKtj-YJMPMy1lbllQ/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=hizGc5W1tBHPghM5YKCAtg'
            },
            {
                id: '9',
                login: 'Russel S.',
                type:'1. Oldest',
                city:'San Francisco, CA',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/JpvIXquK9flx32lJJivTLg/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=c6HT44PKCaXqzN_BdgKPCw'
            },
            {
                id: '10',
                login: 'Jeremy "Big Papa" S.',
                type:'2. Oldest',
                city:'San Francisco, CA',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/5JHCEnieoILDB6FyFsu0NA/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=nkN_do3fJ9xekchVC-v68A'
            },
            {
                id: '11',
                login: 'Matthew Y.',
                type:'1. Elite',
                city:'Richmond Hill, Canada',
                avatar_url: 'https://s3-media0.fl.yelpcdn.com/photo/KsFWokoLdjbKvI8BEFF9LA/ls.jpg',
                html_url: 'https://www.yelp.com/user_details?userid=3Fmj7MfGfsUUK1kTWCSL_g'
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


export default Top_Influencers
