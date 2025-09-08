import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserRole } from 'src/models/member.entity';

export const User = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);

export type PayloadType = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  loggedInAt: string;
};
