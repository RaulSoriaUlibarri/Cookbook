"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className="flex justify-center mx-3">
        <img
          className="rounded-full h-10 w-10 mr-2"
          src={user.picture}
          alt={user.name}
        />
        <div className="">
          <h2 className="text-sm font-semibold text-gray-800">{user.name}</h2>
          <p className="text-xs text-gray-600">{user.email}</p>
        </div>
      </div>
    )
  );
}
