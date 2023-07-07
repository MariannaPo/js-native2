import { CityType } from "./04city";

let city:CityType; 

beforeEach(()=>{city = {
    title: "SPb",
    houses: [
        {
            buildedAt: 2012, repaired: false,
            address: {number: 108, street: {title: "White street"}}
        },
        {
            buildedAt: 2008, repaired: false,
            address: {number: 100, street: {title: "Happy street"}}
        },
        {
            buildedAt: 2020, repaired: false,
            address: {number: 101, street: {title: "Happy street"}}
        },
    ],
    govermentBuildings: [
        {
            type: "HOSPITAL", budget: 200000, staffCount: 200,
            address: {street: {title: "Central Str"}}
        },

        {
            type: "FIRE-STATION", budget: 500000, staffCount: 1800,
            address: {street: {title: "South Str"}}
        }
    ],
    citiesNumber: 150000
}})