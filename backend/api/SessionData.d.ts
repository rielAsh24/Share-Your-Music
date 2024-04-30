import { Profile } from "./models/Members";

export * from "express-session";

declare module "express-session" {
  export interface SessionData {
    profile: Profile;
  }
}
