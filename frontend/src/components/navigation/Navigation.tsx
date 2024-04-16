import { isAuth } from "@/actions/auth";
import { NavMember, NavVisitor } from "./NavDefine";

export default async function Navigation() {
  if (isAuth()) return <NavMember />;
  else return <NavVisitor />;
}
