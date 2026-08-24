import React from 'react'

const UserProfile = ({ imgURL, name, age, profession, about }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      {/* Header Banner */}
      <div className="m-3 p-4 max-w-xl w-full rounded-2xl bg-blue-500 text-white text-center shadow-lg">
        <h3 className="text-xl font-semibold">Props Task</h3>
        <p className="text-sm text-blue-100 opacity-90">Create a reusable profile card</p>
      </div>

      {/* Profile Card */}
      <div className="flex flex-col m-3 p-6 border-none rounded-2xl w-80 bg-gray-800 text-white shadow-xl transform transition hover:scale-105 duration-300">
        <h3 className="text-gray-400 text-xs font-bold tracking-wider uppercase mb-4">User Profile</h3>
        
        {/* Avatar Container */}
        <div className="flex justify-center mb-5">
          <img 
            src={imgURL || "https://placeholder.com"} 
            alt={`${name}'s profile`} 
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-md" 
          />
        </div>

        {/* Profile Information */}
        <div className="space-y-3">
          <div className="flex flex-col border-b border-gray-700 pb-2">
            <span className="text-xs text-slate-400 uppercase tracking-wide">Name</span>
            <span className="text-lg font-medium text-slate-100">{name}</span>
          </div>

          <div className="flex flex-col border-b border-gray-700 pb-2">
            <span className="text-xs text-slate-400 uppercase tracking-wide">Age</span>
            <span className="text-lg font-medium text-slate-100">{age}</span>
          </div>

          <div className="flex flex-col border-b border-gray-700 pb-2">
            <span className="text-xs text-slate-400 uppercase tracking-wide">Profession</span>
            <span className="text-lg font-medium text-blue-400">{profession}</span>
          </div>

          <div className="flex flex-col pt-1">
            <span className="text-xs text-slate-400 uppercase tracking-wide">About</span>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed wrap-break-word">{about}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
