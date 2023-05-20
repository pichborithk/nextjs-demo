async function getUserPosts(userId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?userId=${userId}`,
    { next: { revalidate: 60 } }
  );

  // if (!res.ok) throw new Error('Failed to fetch user');
  // return undefined to let the build-in notFound of Next handle this
  if (!res.ok) return undefined;

  return res.json();
}
export default getUserPosts;
