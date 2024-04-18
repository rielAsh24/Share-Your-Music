import { isAuth } from "@/actions/auth";
import { NavMember, NavVisitor } from "./NavDefine";

export default async function Navigation() {
  const isloggedIn = await isAuth();
  if (isloggedIn) return <NavMember />;
  else return <NavVisitor />;
}
