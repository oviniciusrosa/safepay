import { useAuthSession } from "@/src/core/store/auth-session";
import React from "react";

export function Home() {
  const { signOut } = useAuthSession();

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>Home WEB</p>

      <button onClick={signOut}>Sair</button>
    </div>
  );
}
