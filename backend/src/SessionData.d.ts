export * from "express-session";

declare module "express-session" {
  export interface SessionData {
    admin: boolean;
  }
}
