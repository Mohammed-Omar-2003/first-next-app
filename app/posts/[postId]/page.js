import { Suspense } from "react";
import PostDeteils from "@/app/components/PostDeteils";
async function PostDeteilsPage({ params }) {
  const idParams = (await params).postId;

  return (
    <div>
      <h1>PostDeteils</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <PostDeteils postId={idParams} />
      </Suspense>
    </div>
  );
}
export default PostDeteilsPage;
