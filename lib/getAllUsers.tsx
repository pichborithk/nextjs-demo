async function getAllUsers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);

  if (!res.ok) throw new Error('Failed to fetch data');

  return res.json();
}

export default getAllUsers;
