import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ResponseMeasurementDTO} from "../../ResponseMeasurementDTO";
import {MeasurementRequest} from "../../MeasurementRequest";


@Injectable({
  providedIn: 'root'
})
export class MeasurementClient {

  constructor(private http: HttpClient) {
  }

  public createMeasurement(userId: number, requestBody: MeasurementRequest) {
    return this.http.post<ResponseMeasurementDTO>(`http://localhost:8080/user/${userId}/measurements`, requestBody);
  }

}
