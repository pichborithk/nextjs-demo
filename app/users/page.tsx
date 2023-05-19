import getAllUsers from '@/lib/getAllUsers';
import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Users | NextJS Demo',
  description: 'Generated by create next app',
};

const UsersPage = async () => {
  // First recommendation on Next document: Fetch data on server using Server Component
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  console.log('Hello User Page');

  return (
    <section>
      <h2>
        <Link href='/'>Back to Home</Link>
      </h2>
      <br />
      {users.map(user => (
        <React.Fragment key={user.id}>
          <p>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
          <br />
        </React.Fragment>
      ))}
    </section>
  );
};
export default UsersPage;