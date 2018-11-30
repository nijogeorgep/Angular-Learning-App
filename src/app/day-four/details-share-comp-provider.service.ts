import { Injectable } from '@angular/core';

@Injectable()
export class DetailsShareCompProviderService {
  public studentDetails: string[];
  constructor() {
    this.studentDetails = [];
  }

  public addStudentDetails(name: string) {
    this.studentDetails.push(name);
  }

  public getStudentDetails(): string[] {
    return this.studentDetails;
  }

}
