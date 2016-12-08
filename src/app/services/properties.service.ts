import { Injectable } from '@angular/core';
import { Property } from 'app/models/property';

@Injectable()
export class PropertiesService {

  constructor() { }

  getPropertiesByCity(name: string): Property {
    let prop: Property = {id: 10, city: name};
    return prop;
  }
}
