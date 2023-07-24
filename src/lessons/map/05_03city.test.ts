import { CityType } from "../les1/04city";
import {getStreetsTitleGovermentsBuilding} from './05_03city'


let city: CityType;

beforeEach(()=>{
    city = {
        title: 'New York',
        houses: [
            {
            id: 1, buildedAt: 2012, repaired: false,
            address: {
                number: 108,
                street: {title: 'White street'}
            }
        },
        {
            id: 2, buildedAt: 2008, repaired: false,
            address: {
                number: 100,
                street: {title: 'Happy street'}
            }
        },
        {
            id: 3, buildedAt: 2020, repaired: false,
            address: {
                number: 101,
                street: {title: 'Happy street'}
            }
        }
    ],
    govermentBuildings: [
        {
            type: 'HOSPITAL',
            address: {street: {title: 'Central Str'}, number: 12},
            budget: 500000, staffCount: 200
        },
        {
            type: 'FIRE-STATION',
            address: {street: {title: 'South Str'}, number: 12},
            budget: 500000, staffCount: 1000
        }
    ],
    citiesNumber: 100000
}
})


test('list of streets titles of goverments buildings', ()=>{
    let streets = getStreetsTitleGovermentsBuilding(city.govermentBuildings)
    
    expect(streets.length).toBe(2);
    expect(streets[0]).toBe('Central Str');
    expect(streets[1]).toBe('South Str');
})
