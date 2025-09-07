import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { MemberService } from './member.service';
import { UpdateMemberDto } from './member.dto';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  findAll() {
    return this.memberService.findAll();
  }

  @Get(':id')
  profile(@Param('id') id: string) {
    return this.memberService.profile(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.memberService.update(id, updateMemberDto);
  }
}
