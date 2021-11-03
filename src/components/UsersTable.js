import React from 'react'

const UsersTable = (props) => {
  const {users,handleClick}=props
  return (
    <div>
      {users.map(person => (
        <div
          className="card text-center "
          data-id={person.id}
          key={person.id}
          onClick={handleClick}
        >
           <marquee>Please Click on Card</marquee>
          <div className="card">
            <h4>Username:</h4>
            <p>{person.username}</p>
          </div>
        </div>
      ))}
    </div>


  )
}

export default UsersTable

