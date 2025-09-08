import { IsString, IsEmail, IsBoolean, IsOptional } from 'class-validator';

export class UpdateMemberDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsBoolean()
  @IsOptional()
  isBlocked: boolean;
}
