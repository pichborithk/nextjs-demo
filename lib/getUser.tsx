async function getUser(userId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`);

  if (!res.ok) throw new Error('Failed to fetch user');

  return res.json();
}
export default getUser;
