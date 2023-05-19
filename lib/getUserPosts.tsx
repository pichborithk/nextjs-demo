async function getUserPosts(userId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?userId=${userId}`
  );

  if (!res.ok) throw new Error('Failed to fetch user');

  return res.json();
}
export default getUserPosts;
