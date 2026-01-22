import { auth } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const { userId } = await auth();

  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-4 text-gray-600">Signed in user: {userId}</p>
    </div>
  );
}
