import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(){
    return []
  }

  @Get(':idwwerwer')
  getReportById(){
    return [1,2,3,4]
  }

  @Post()
  addNewReport(){
    return 'Add new report'
  }

  @Put(':id')
  putReport(){
    return 'Put report by id'
  }

  @Delete(':id')
    deleteReport(){
      return 'Delete report by id'
    }
}