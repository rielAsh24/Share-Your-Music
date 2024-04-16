"use client";

import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function ProfileForm() {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input disabled={true} id="name" defaultValue="Test Profile" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input disabled={true} id="email" defaultValue="test@email.com" />
      </div>
    </>
  );
}
