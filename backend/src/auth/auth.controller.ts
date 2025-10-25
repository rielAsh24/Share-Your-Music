import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApplyDto, LoginDto } from './auth.dto';
import { IsPublic } from '../decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post('login')
  login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }

  @Get('refresh')
  refresh(@Req() req: any) {
    return this.authService.refresh(req.user.id, req.headers['refresh-token']);
  }

  @IsPublic()
  @Post('register')
  register(@Body() data: ApplyDto) {
    return this.authService.register(data);
  }
}
