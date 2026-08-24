import React, { useState } from "react";

const TypingPreview = () => {
  const [type, setType] = useState('');

  const typePreview = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-zinc-100">
        
        {/* Title Section */}
        <h2 className="text-zinc-800 text-xl font-bold text-center mb-6 tracking-tight">
          Real-Time Typing Preview
        </h2>
        
        {/* Input*/}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-zinc-600">
              Type something
            </label>
            <input 
              type="text" 
              placeholder="Start typing here..." 
              className="w-full rounded-lg border border-zinc-300 p-2.5 text-zinc-800 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100 placeholder:text-zinc-400" 
              onChange={typePreview} 
              value={type}
            />
          </div>

          {/*Preview Box */}
          <div className="mt-2 rounded-lg bg-zinc-50 p-4 border border-dashed border-zinc-200 min-h-20 flex flex-col justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-1">
              Live Preview
            </span>
            <p className="text-zinc-700 wrap-break-word font-medium">
              {type || <span className="text-zinc-400 italic">Your preview will appear here...</span>}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TypingPreview;
