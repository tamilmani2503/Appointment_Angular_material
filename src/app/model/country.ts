import { State } from './state';

export interface Country {
    countryCode:string;
    countryDescription:string;
    states?: State[];

}
