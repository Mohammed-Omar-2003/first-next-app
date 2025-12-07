import React from "react";
import Todo from "../components/Todo";
import Link from "next/link";
async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 120 },
  });
  const data = await response.json();
  return (
    <div>
      <h1>posts page</h1>
      <div>
        {data.map((e) => (
          <Link
            href={`/posts/${e.id}`}
            key={e.id}
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background: "green",
                padding: "10px",
                margin: "10px",
                borderRadius: "10px",
                width: "90%",
              }}
            >
              <h2>{e.title}</h2>
              <h4>{e.body}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
