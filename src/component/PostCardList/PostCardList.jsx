import PostCard from "./PostCard";
import PostsCardContext from "../../providers/PostProviders";
import { useContext } from "react";

function PostCardList() {
  // const [posts, setPosts] = useState([]);
  const { posts } = useContext(PostsCardContext);

  return posts.length == 0
    ? "loading..."
    : posts.map((post) => (
        <PostCard
          content={post.text}
          image={post.image}
          authorFirstName={post.owner.firstName}
          key={post.id}
        />
      ));
}

export default PostCardList;
