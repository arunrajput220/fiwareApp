import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','fiware-service': 'openiot','fiware-servicepath': '/'})
};

const httpOptionsStateWeatherDepartment = {
  headers: new HttpHeaders({'Content-Type': 'application/json','fiware-service': 'WeatherDepartment','fiware-servicepath': '/'})
};

const httpOptionsfirebase = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
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
    return this.http.get("http://localhost:1337/localhost:3000/fiware/northweatherstation", httpOptions)
  }


  getSouthWeatherStationfromnodeserver(): Observable<any> {
    return this.http.get("http://localhost:3000/fiware/southweatherstation", httpOptions)
  }




  
getGkitchenFanStatus(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/gkitchen/Fan.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptionsfirebase)
}
setGkitchenFanStatus(payload): Observable<any> {
  return this.http.put("https://iotapp-aad4a.firebaseio.com/gkitchen/Fan.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", payload,httpOptionsfirebase)
}


getGkitchenJuicerStatus(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/gkitchen/Juicer.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptionsfirebase)
}
setGkitchenJuicerStatus(payload): Observable<any> {
  return this.http.put("https://iotapp-aad4a.firebaseio.com/gkitchen/Juicer.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", payload,httpOptionsfirebase)
}

getGkitchenLightsStatus(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/gkitchen/Lights.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptionsfirebase)
}
setGkitchenLightsStatus(payload): Observable<any> {
  return this.http.put("https://iotapp-aad4a.firebaseio.com/gkitchen/Lights.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", payload,httpOptionsfirebase)
}

getGkitchenMicrowaveOvenStatus(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/gkitchen/MicrowaveOven.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptionsfirebase)
}
setGkitchenMicrowaveOvenStatus(payload): Observable<any> {
  return this.http.put("https://iotapp-aad4a.firebaseio.com/gkitchen/MicrowaveOven.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", payload,httpOptionsfirebase)
}

getGkitchenRefrigratorStatus(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/gkitchen/Refrigrator.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptionsfirebase)
}
setGkitchenRefrigratorStatus(payload): Observable<any> {
  return this.http.put("https://iotapp-aad4a.firebaseio.com/gkitchen/Refrigrator.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", payload,httpOptionsfirebase)
}

getGkitchenSpeakerStatus(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/gkitchen/Speaker.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptionsfirebase)
}
setGkitchenSpeakerStatus(payload): Observable<any> {
  return this.http.put("https://iotapp-aad4a.firebaseio.com/gkitchen/Speaker.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", payload,httpOptionsfirebase)
}

getGkitchenToasterStatus(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/gkitchen/Toaster.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptionsfirebase)
}
setGkitchenToasterStatus(payload): Observable<any> {
  return this.http.put("https://iotapp-aad4a.firebaseio.com/gkitchen/Toaster.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", payload,httpOptionsfirebase)
}


}





