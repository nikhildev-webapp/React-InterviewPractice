import React, { useEffect, useState } from 'react'

const UserProfiles = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            setData(users);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching users:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

  return (
      <>
          <div className="bg-teal-950 min-h-screen p-4">
              <div className="flex justify-center items-center">
                    <h3 className='text-emerald-500 font-semibold text-2xl uppercase'>Fetching User Profiles...</h3>
              </div>     
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((user) => (
                    <div key={user.id} className="border-emerald-300 border bg-transparent  p-3 rounded shadow m-2 hover:translate-y-1 transition-transform duration-300">
                        <h4 className='text-lg font-semibold text-white'><span className='font-bold text-emerald-500'>Name:</span> {user.name}</h4>
                        <p className='text-white'><span className='font-semibold text-emerald-500'>Email:</span> {user.email}</p>
                        <p className='text-white'><span className='font-semibold text-emerald-500'>Phone:</span> {user.phone}</p>
                        <p className='text-white'><span className='font-semibold text-emerald-500'>Website:</span> {user.website}</p>
                    </div>
                ))}
              </div>
         </div>
      </>
  )
}

export default UserProfiles