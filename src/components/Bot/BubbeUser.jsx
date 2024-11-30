import React from "react";

function BubbleUser({ contenido, timestamp }) {
  return (
    <div className="flex justify-end">
      <div className="relative group p-3 rounded-lg max-w-xs break-words bg-primary text-white">
        <p>{contenido}</p>
        {timestamp && (
          <span className="text-xs text-gray-500 text-center mt-1 hidden group-hover:block">
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
}

export default BubbleUser;