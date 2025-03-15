'use client';

import { useStackApp } from '@stackframe/stack';

export default function CustomOAuthSignIn() {
  const app = useStackApp();

  return (
    <div>
      <h1>My Custom Sign In page</h1>
      <button
        className="button-yellow"
        onClick={async () => {
          // This will redirect to the OAuth provider's login page.
          await app.signInWithOAuth('discord'); //scopes don't work! only default scopes are passed
        }}
      >
        Sign In with discord
      </button>
    </div>
  );
}
