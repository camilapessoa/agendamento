import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AppointmentsService } from '../services/appointment.service';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';
@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentsService) {}

  @Get()
  findAll() {
    return this.appointmentService.findAll();
  }

  @Post()
  create(@Body() createDto: CreateAppointmentDto) {
    return this.appointmentService.create(createDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateAppointmentDto) {
    return this.appointmentService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentService.remove(id);
  }
}
