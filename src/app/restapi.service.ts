import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','fiware-service': 'openiot','fiware-servicepath': '/'})
};

const httpOptionsStateWeatherDepartment = {
  headers: new HttpHeaders({'Content-Type': 'application/json','fiware-service': 'WeatherDepartment','fiware-servicepath': '/'})
};


@Injectable({
  providedIn: 'root'
})
export class RestapiService {

check:any;

  constructor(public http: HttpClient) { }


  getDataValue(): Observable<any> {
    return this.http.get("http://40.77.65.229:4041/iot/devices", httpOptions)
  }


  getEntityName(entityName): Observable<any> {
   
   this.check = this.http.get("http://52.165.150.86:1026/v2/entities/urn:ngsi-ld:"+ entityName, httpOptions)
   console.log(this.check)
    return this.http.get("http://52.165.150.86:1026/v2/entities/urn:ngsi-ld:"+ entityName, httpOptions)
  }


  getNorthWeatherStation(): Observable<any> {
    
    return this.http.get("http://52.165.150.86:1026/v2/entities/urn:ngsi-ld:NorthWeatherStation", httpOptionsStateWeatherDepartment)
  }

  getNorthWeatherStationfromnodeserver(): Observable<any> {
    return this.http.get("http://localhost:3000/fiware/northweatherstation", httpOptions)
  }
}
