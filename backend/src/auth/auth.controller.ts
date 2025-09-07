import { Controller, Get, Post, Body, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './auth.dto';
import { PayloadType, User } from '../decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }

  @Get('refresh')
  refresh(
    @User() user: PayloadType,
    @Headers('refresh-token') refreshToken: string,
  ) {
    return this.authService.refresh(user.id, refreshToken);
  }
}
