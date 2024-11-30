import React from "react";

function BubbleBot({ contenido, timestamp }) {
  return (
    <div className="flex justify-start">
      <div className="relative group p-3 rounded-lg max-w-xs break-words bg-secondary text-right">
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

export default BubbleBot;