import React from "react";

function ConversationHeader({ titulo, fecha }) {
  return (
    <div className="text-center">
      <h1 className="text-xl font-bold">{titulo}</h1>
      <p className="text-sm text-gray-600">{fecha}</p>
    </div>
  );
}

export default ConversationHeader;