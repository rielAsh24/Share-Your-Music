import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateActivityDto, UpdateActivityDto } from './activity.dto';
import { Activity, ActivityStatus } from '../models/activity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  async create(data: CreateActivityDto) {
    const existingActivity = await this.activityRepository.findOneBy({
      name: data.name,
    });

    if (existingActivity)
      throw new BadRequestException('Activity already exists');

    // Notify of new activity
    await this.activityRepository.save(
      this.activityRepository.create({
        ...data,
        status: ActivityStatus.UPCOMING,
      }),
    );
    return {
      message: 'Activity created successfully',
    };
  }

  findAll() {
    return this.activityRepository.find();
  }

  findOne(id: string) {
    return this.activityRepository.findOneBy({ _id: new ObjectId(id) });
  }

  async update(id: string, updateActivityDto: UpdateActivityDto) {
    const existingActivity = await this.activityRepository.findOneBy({
      _id: new ObjectId(id),
    });

    if (!existingActivity) throw new NotFoundException('Activity not found');

    Object.assign(existingActivity, updateActivityDto);
    await this.activityRepository.save(existingActivity);

    return {
      message: 'Activity updated successfully',
    };
  }

  async cancel(id: string) {
    const existingActivity = await this.activityRepository.findOneBy({
      _id: new ObjectId(id),
    });

    if (!existingActivity) throw new NotFoundException('Activity not found');

    existingActivity.status = ActivityStatus.CANCELLED;
    await this.activityRepository.save(existingActivity);

    return {
      message: 'Activity updated successfully',
    };
  }
}
