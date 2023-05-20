import React from 'react'

const UserCard = ({ image, name, surname, email, description }) => {
  return (
    <div>
      <img src={image} alt="UserImage" />
      <h3>{name} {surname}</h3>
      <p>Email: {email}</p>
      <p>Description: {description}</p>
    </div>
  )
}

export default UserCard;