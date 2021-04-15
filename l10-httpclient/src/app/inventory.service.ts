import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';
import { HttpClient } from '@angular/common/http';          // HttpClient Service
import { Observable } from 'rxjs'                           // Observable returned from HttpClient methods

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  // Base URL to access our RESTful Controller
  private baseURL = "http://localhost:3000/vehicle"

  constructor(private httpClient: HttpClient) { }             // Inject HttpClient service!

  public addVehicle(vObj:Vehicle) : Observable<any>  {        // C: Create
    return this.httpClient.post(`${this.baseURL}`, vObj)
  }

  public getInventory() : Observable<Vehicle[]> {             // R: Retrieve
    return this.httpClient.get<Vehicle[]>(`${this.baseURL}`)
  }
                                                              // U: Update
  public updateVehicle(vin:string, vObj:Vehicle) : Observable<any>  {
   return this.httpClient.put(`${this.baseURL}/${vin}`, vObj)
  }

 public deleteVehicle(vObj:Vehicle) : Observable<any> {       // D: Delete 
    return this.httpClient.delete(`${this.baseURL}/${vObj.VIN}`)
 }

}
