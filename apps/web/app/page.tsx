"use client";
import Button from "@repo/ui/components/atoms/Button";
import { useAuthContext } from "@repo/ui/context";
import React from "react";

function DashboardPage() {
  const { user, handleSignOut, loading } = useAuthContext();
  if (loading || !user) return <div>loading...</div>;
  return (
    <div>
      Welcome,
      {user?.username}
      <Button className="w-32" text="Sign out" onClick={handleSignOut} />
    </div>
  );
}

export default DashboardPage;
