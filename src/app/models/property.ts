import { User } from './user';

export class Property {
    id: number;
    title: string;
    description: string;
    price: number;
    currency: string;
    user: User;
    images: string[];
    lat: number;
    lng: number;
    city?:string;
    state?:string;
    acommodationType?:string;
    bedRooms?:number;
    bathRooms?:number;
    realState?:boolean;
}