import { Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Member } from './models/members.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(
    private dataSource: DataSource,
    private configService: ConfigService,
  ) {}

  initTestData(): Promise<void> {
    return this.dataSource.transaction(async (manager) => {
      const MemberRepository = manager.getRepository(Member);

      const adminExists = await MemberRepository.findOneBy({
        email: this.configService.get('ADMIN_EMAIL'),
      });

      // Create Members
      if (!adminExists) {
        await MemberRepository.insert([
          {
            email: this.configService.get('TEST_EMAIL'),
            name: 'Test',
            password: this.configService.get('TEST_PASS'),
          },
          {
            email: this.configService.get('ADMIN_EMAIL'),
            name: 'Admin',
            password: this.configService.get('ADMIN_PASS'),
          },
        ]);

        this.logger.verbose('Data initialized');
      }
    });
  }
}
