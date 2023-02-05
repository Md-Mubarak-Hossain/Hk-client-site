import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const View = () => {
    const[user,setUser]=useState([])
    
    useEffect(()=>{
        fetch('https://hk-server.vercel.app/user')
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            setUser(result)
        })
    },[])

    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure??')
        if(proceed){
            fetch(`https://hk-server.vercel.app/user/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    const remainUser=user.filter(d=>d._id !==id)
                    setUser(remainUser)
                   alert('successfully deleted')
                   
                }
            })
        }
    }
    
    return (
        <div className='m-2 lg:m-5 rounded-2xl grid grid-cols-1 lg:grid-cols-2 lg:gap-4 place-items-start text-Justify'>
        {
            user.map(u=><div className="hero p-2 my-5 bg-violet-900 shadow-2xl flex flex-col place-items-start" key={u._id}>
            <div className="hero-content">
              <div className="max-w-md flex flex-col place-items-start lg:h-72 lg:my-10">
                <h1 className="text-xl font-bold uppercase">Name:{u.name}</h1>              
                <p className="py-2"><span className='px-1'>Sector:</span>{u.sector}</p>
                <p className="py-2"><span className='px-1'>Terms:</span>{u.terms}</p>
                <div className='lg:flex w-full'>
                <Link to={`/edit/${u._id}`}><button className="btn btn-primary  uppercase mx-1 w-40">Edit</button></Link>
                <button className="btn bg-danger  uppercase mx-1 w-40" onClick={()=>handleDelete(u._id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>)
        }
        </div>
    );

};

export default View;