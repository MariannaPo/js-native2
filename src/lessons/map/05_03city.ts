import {GovermentBuildingType, HouseType} from '../les1/04city'

export const getStreetsTitleGovermentsBuilding = (govermentBuildings: Array<GovermentBuildingType>) => {
    return govermentBuildings.map(b => b.address.street.title)
    };

    export const getStreetsTitleHouses = (houses: Array<HouseType>) => {
        return houses.map(s => s.address.street.title)
    }

    export const welcomeMessage = (houses: Array<HouseType>) => {
        return houses.map(w => `Invite residents to vote ${w.address.street.title}`)

    }