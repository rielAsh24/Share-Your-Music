import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateMemberDto } from './member.dto';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Member } from 'src/models/member.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>,
  ) {}

  findAll() {
    return this.memberRepository.find({
      select: ['_id', 'name', 'email', 'isBlocked', 'role'],
    });
  }

  profile(id: string) {
    return this.memberRepository.findOne({
      select: ['_id', 'name', 'email', 'isBlocked', 'role'],
      where: { _id: new ObjectId(id) },
    });
  }

  async update(id: string, updateMemberDto: UpdateMemberDto) {
    const member = await this.memberRepository.findOneBy({
      _id: new ObjectId(id),
    });

    if (!member) throw new NotFoundException('Member not found');

    Object.assign(member, updateMemberDto);

    await this.memberRepository.save(member);

    return {
      message: 'Member updated successfully',
    };
  }
}
