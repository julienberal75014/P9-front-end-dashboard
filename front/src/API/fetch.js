import getDataApi from "../API/fetchUrl"
import { getDataMocked } from "../API/fetchData"

/**
 * 
 * @param {number} id 
 * @returns new class data
 */

function getData(id, type) {
    if (process.env.REACT_APP_MOCKED_DATA === 'true') {
        return getDataMocked(id, type)
    } else {
        return getDataApi(id, type)
    }
}

export default getData;