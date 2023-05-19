type Props = {
  promise: Promise<Post[]>;
};

const UserPosts = async ({ promise }: Props) => {
  const posts = await promise;

  return posts.map(post => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <br />
    </article>
  ));
};

export default UserPosts;
