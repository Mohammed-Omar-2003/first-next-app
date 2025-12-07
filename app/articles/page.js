import React from "react";
import Link from "next/link";
function page() {
  return (
    <div>
      acrticles page <Link href={"/posts"}>go to articles </Link>
    </div>
  );
}

export default page;
