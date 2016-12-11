import { Injectable } from '@angular/core';
import { Property } from 'app/models/property';
import { User } from 'app/models/user';
import { City } from 'app/models/city';

@Injectable()
export class PropertiesService {

  constructor() { }

  getPropertiesByCity(cityName: string): any {
    let user:User = { id: 1, picture: 'assets/images/system/avatar_03.png', email: '', firstname: 'Guillermo', lastname: 'Tell' };

    let city:City = {id: 1, name: cityName, lat: -31.4203551, lng: -64.5012438, zoom: 14, state: 'Córdoba', country: 'Argentina'};
    let data:Property[] = [
      {id: 10, title: 'Casa 1', description: 'Descripcion de la casa 1', price: 1000, currency: 'ARS', user: user, images:[], lat: -31.4232934, lng: -64.4959727},
      {id: 10, title: 'Casa 2', description: 'Descripcion de la casa 2', price: 2000, currency: 'ARS', user: user, images:['assets/images/casa1.jpg'], lat: -31.4244042, lng: -64.4952285},
      {id: 10, title: 'Casa 3', description: 'Descripcion de la casa 3', price: 3000, currency: 'ARS', user: user, images:['assets/images/casa2.jpg','assets/images/casa1.jpg'], lat: -31.4168353, lng: -64.5068826},
      {id: 10, title: 'Casa 4', description: 'Descripcion de la casa 4', price: 4000, currency: 'ARS', user: user, images:['assets/images/casa3.jpg','assets/images/casa2.jpg','assets/images/casa1.jpg'], lat: -31.4199755, lng: -64.4977119},
      {id: 10, title: 'Casa 5', description: 'Descripcion de la casa 5', price: 1000, currency: 'ARS', user: user, images:[], lat: -31.4255934, lng: -64.4954727},
      {id: 10, title: 'Casa 6', description: 'Descripcion de la casa 6', price: 2000, currency: 'ARS', user: user, images:['assets/images/casa1.jpg'], lat: -31.4274042, lng: -64.4952885},
      {id: 10, title: 'Casa 7', description: 'Descripcion de la casa 7', price: 3000, currency: 'ARS', user: user, images:['assets/images/casa2.jpg','assets/images/casa1.jpg'], lat: -31.4108353, lng: -64.5062826},
      {id: 10, title: 'Casa 8', description: 'Descripcion de la casa 8', price: 4000, currency: 'ARS', user: user, images:['assets/images/casa3.jpg','assets/images/casa2.jpg','assets/images/casa1.jpg'], lat: -31.4299755, lng: -64.4977219},
      {id: 10, title: 'Casa 9', description: 'Descripcion de la casa 9', price: 1000, currency: 'ARS', user: user, images:[], lat: -31.4212934, lng: -64.4989727},
      {id: 10, title: 'Casa 10', description: 'Descripcion de la casa 10', price: 2000, currency: 'ARS', user: user, images:['assets/images/casa1.jpg'], lat: -31.4244642, lng: -64.4922285},
      {id: 10, title: 'Casa 11', description: 'Descripcion de la casa 11', price: 3000, currency: 'ARS', user: user, images:['assets/images/casa2.jpg','assets/images/casa1.jpg'], lat: -31.4118353, lng: -64.5061826},
      {id: 10, title: 'Casa 12', description: 'Descripcion de la casa 12', price: 4000, currency: 'ARS', user: user, images:['assets/images/casa3.jpg','assets/images/casa2.jpg','assets/images/casa1.jpg'], lat: -31.4198755, lng: -64.4927119}
    ];
    return { city: city, data: data };
  }
}
