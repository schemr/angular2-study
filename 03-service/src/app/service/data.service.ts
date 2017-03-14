import { Injectable } from '@angular/core'
import { LogService } from './log.service';

@Injectable()

export class DataService {
  private data: string[] = [];
  constructor(private LogService: LogService){}

  addData(input: string){
    this.data.push(input);
    this.LogService.writeToLog('Saved item :' + input)
  }
  getData(){
    return this.data;
  }

}
