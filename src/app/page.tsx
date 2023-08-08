import {auth} from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();
  console.log(userId)
  return <div>User Id: {userId}</div>;
}
