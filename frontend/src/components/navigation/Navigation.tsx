import { isAuth } from "@/actions/auth";
import { NavMember, NavVisitor } from "./NavDefine";
import { Separator } from "../ui/separator";

export default async function Navigation() {
  const isloggedIn = await isAuth();
  return (
    <div className="w-full">
      {isloggedIn ? <NavMember /> : <NavVisitor />}
      <Separator />
    </div>
  );
}
