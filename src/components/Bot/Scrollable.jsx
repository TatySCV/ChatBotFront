import React, { useEffect, useRef } from "react";

function Scrollable({ children }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [children]);

  return (
    <div className="space-y-4 mt-4 overflow-y-auto max-h-96">
      {children}
      <div ref={endRef}></div>
    </div>
  );
}

export default Scrollable;