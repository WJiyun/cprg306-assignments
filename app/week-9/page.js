"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="container mx-auto p-4">
      {!user ? (
        <button
          onClick={gitHubSignIn}
          className="py-2 px-4 bg-blue-500 text-white rounded"
        >
          Login with GitHub
        </button>
      ) : (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button
            onClick={firebaseSignOut}
            className="py-2 px-4 bg-red-500 text-white rounded"
          >
            Logout
          </button>
          <Link href="/week-9/shopping-list">
            <a className="py-2 px-4 bg-green-500 text-white rounded">
              Go to Shopping List
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}