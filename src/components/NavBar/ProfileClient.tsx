"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (!user) return null;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Hubo un problema al cargar tu perfil.</div>;

  const slicedName = user.name?.split(" ")[0];

  return (
    <div className="flex justify-center mx-5">
      <img
        referrerPolicy="no-referrer"
        className="rounded-full h-10 w-10 mr-2"
        src={user.picture}
        alt={user.name}
      />
      <div className="my-auto">
        <h2 className="text-md text-emerald-950 dark:text-orange-500">
          {slicedName}
        </h2>
      </div>
    </div>
  );
}
