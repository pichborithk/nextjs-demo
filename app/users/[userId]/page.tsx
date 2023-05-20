import { Suspense } from 'react';

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import getUser from '@/lib/getUser';
import getAllUsers from '@/lib/getAllUsers';
import getUserPosts from '@/lib/getUserPosts';

import UserPosts from './components/UserPosts';

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  if (!user?.id) {
    return {
      title: 'User Not Found',
    };
  }

  return { title: user.name, description: `This is the page of ${user.name}` };
}

const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  // Second recommendation on Next document: Fetch data in parallel to minimize waterfalls and reduce loading times
  // const [user, userPosts] = await Promise.all([userData, userPostsData]);

  // return (
  //   <>
  //     <h2>{user.name}</h2>
  //     <br />
  //     <UserPosts posts={userPosts} />
  //   </>
  // );

  /* ---------------------------------------------- x --------------------------------------------- */

  // Fourth recommendation on Next document: Use Loading UI, Streaming and Suspense to progressively render a page and show a result to the user while the rest of the content loadStaticPaths.

  const user = await userData;

  if (!user?.id) return notFound(); //even we import notFound from Next but it gonna use our custom not-found file

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Server Component */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
};

export default UserPage;

export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  return users.map(user => ({ userId: user.id.toString() }));
}
