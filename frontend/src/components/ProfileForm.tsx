"use client";

import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function ProfileForm({ email }: { email: string }) {
  return (
    <>
      <Label htmlFor="email">Email</Label>
      <Input disabled={true} id="email" defaultValue={email} />
    </>
  );
}
