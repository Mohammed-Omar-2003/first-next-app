import React from "react";
export const metadata = { title: "post page" };

function layout({ children }) {
  return (
    <div>
      <div
        style={{
          padding: "20px",
          fontSize: "18px",
          marginTop:"30px"
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default layout;
