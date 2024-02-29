import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactApiModel } from '../models/contact-api-model';
import { ContactApiRequest } from '../models/contact-api-request';

@Injectable({
  providedIn: 'root'
})
export class ContactApiService {
  private readonly baseUrl: string

  constructor(private readonly httpClient: HttpClient) {
    this.baseUrl = 'api/contacts'
  }

  public sendContactData = (request: ContactApiRequest): Observable<ContactApiModel> => {
    const response = this.httpClient.post<ContactApiModel>(`${this.baseUrl}`, request);
    return response;
  };
}
