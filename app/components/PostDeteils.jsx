import React from "react";
async function PostDeteils({ postId }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: { revalidate: 120 },
    }
  );
  const data = await response.json();

  return (
    <div>
      <div
        key={data.id}
        style={{
          background: "green",
          padding: "10px",
          margin: "10px",
          borderRadius: "10px",
          color: "white",
        }}
      >
        <h2>{data.title}</h2>
        <h4>{data.body}</h4>
      </div>
    </div>
  );
}
export default PostDeteils;
