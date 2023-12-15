import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    const loadedUsers= useLoaderData();
    const [users,setUsers]=useState(loadedUsers);
    const handleDelete=id=>{
        console.log('delete id =>',id)
        fetch(`http://localhost:5000/users/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{console.log(data)
        if(data.deletedCount>0){
            alert('user Delated Succes fully ');
            const remaining = users.filter(user=>user._id!==id);
            setUsers(remaining);
        }})
    }
    return (
        <div>
            User{users.length}
            {
                users.map(user=><p key={user._id}>{user.name}={user.email} :{user._id}<Link to={`/update/${user._id}`}><button>
                    Update</button></Link> <button onClick={()=>handleDelete(user._id)}>X</button></p>)
            }
        </div>
    );
};

export default User;