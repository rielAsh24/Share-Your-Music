import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ApplyDto, LoginDto } from './auth.dto';
import { Member, UserRole } from '../models/member.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId, Repository } from 'typeorm';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { type PayloadType } from '../decorators/user.decorator';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  private async generateTokens(member: Member) {
    const prunedMember = {
      id: member._id.toString(),
      name: member.name,
      email: member.email,
      role: member.role,
    };

    const payload: PayloadType = {
      ...prunedMember,
      loggedInAt: new Date().toISOString(),
    };

    const token = await this.jwtService.signAsync(payload, {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: this.configService.get('JWT_EXPIRY'),
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: this.configService.get('JWT_REFRESH_EXPIRY'),
    });

    return {
      token,
      refreshToken,
      user: prunedMember,
    };
  }

  async login(data: LoginDto) {
    const { email, password } = data;
    const member = await this.memberRepository.findOne({
      where: { email },
    });

    if (!member) throw new NotFoundException('Member not found');

    const isPasswordValid = await compare(password, member.password);

    if (!isPasswordValid) throw new UnauthorizedException('Invalid password');

    return this.generateTokens(member);
  }

  async refresh(id: string, refreshToken: string) {
    if (!refreshToken)
      throw new UnauthorizedException('Refresh token is required');

    try {
      const isValidRefreshToken = await this.jwtService.verifyAsync(
        refreshToken,
        {
          secret: this.configService.get('JWT_SECRET'),
        },
      );

      if (!isValidRefreshToken)
        throw new UnauthorizedException('Invalid refresh token');
    } catch (error) {
      throw new Error(`Invalid refresh token ${error}`);
    }

    const member = await this.memberRepository.findOne({
      where: { _id: new ObjectId(id) },
    });

    if (!member) throw new NotFoundException('Member not found');

    return this.generateTokens(member);
  }

  async register(data: ApplyDto) {
    const { name, email, password } = data;
    const existingMember = await this.memberRepository.findOneBy({
      email,
    });

    if (existingMember)
      throw new BadRequestException(
        'An account with this email already exists',
      );

    try {
      await this.memberRepository.save(
        this.memberRepository.create({
          name,
          email,
          password,
          role: UserRole.MEMBER,
        }),
      );
    } catch (error) {
      throw new Error('Failed to register member', { cause: error });
    }

    // Email notification
    return {
      message: 'Member registered successfully',
    };
  }
}
