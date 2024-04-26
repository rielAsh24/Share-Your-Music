"use client";

import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function ProfileForm({ email }: { email: string }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input disabled={true} id="email" defaultValue={email} />
    </div>
  );
}
