import {GovermentBuildingType} from '../les1/04city'

export const getStreetsTitleGovermentsBuilding = (govermentBuildings: Array<GovermentBuildingType>) => {
    return govermentBuildings.map(b => b.address.street.title)
    }