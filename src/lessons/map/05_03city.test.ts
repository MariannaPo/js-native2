import { CityType } from "../les1/04city";
import {getStreetsTitleGovermentsBuilding} from './05_03city';
import { getStreetsTitleHouses} from './05_03city';
import {welcomeMessage} from './05_03city'


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

test('list of streets titles of houses', ()=>{
    let streetsHouses = getStreetsTitleHouses(city.houses)
    
    expect(streetsHouses.length).toBe(3);
    expect(streetsHouses[0]).toBe('White street');
    expect(streetsHouses[1]).toBe('Happy street');
    expect(streetsHouses[2]).toBe('Happy street');
})

test('Welcome message', () => {
    let message =  welcomeMessage(city.houses)

    expect(message.length).toBe(3);
    expect(message[0]).toBe('Invite residents to vote White street');
    expect(message[1]).toBe('Invite residents to vote Happy street');
    expect(message[2]).toBe('Invite residents to vote Happy street');
})