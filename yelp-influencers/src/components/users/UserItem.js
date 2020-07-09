import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({user: { login, avatar_url, html_url, type, city, business, category}}) => {
        
        return (
            <div className='card text-center'>
                <img
                    src={avatar_url}
                    alt=''
                    className='round-img'
                    style={{ width: '60px'}}
                />
                <h3>{login}</h3> 
                <h4>{type}</h4>
                <h5>{city}</h5> 
                <h5>{business}</h5> 
                <h5>{category}</h5> 

                <div>
                <a target='_blank' rel="noopener noreferrer" href={html_url} className='btn btn-dark btn-sm my-1'>
                    More
                </a>
                </div> 
            </div>
        );
    };

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem
