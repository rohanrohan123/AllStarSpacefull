import Post from "../post/Post";
import "./posts.css";

export default function Posts({posts}) {
//  var p=10
  return (
    <div className="posts">
    {posts.map(p=>(
      <Post post={p} />
    ))}
    </div>
  );
}