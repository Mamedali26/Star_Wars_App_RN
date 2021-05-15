export const urlFirstPart = 'http://swapi.dev/api/';
export const constantsForUrl = {
    people: 'people/',
    planets: 'planets/',
    films: 'films/',
    vehicles: 'vehicles/',
    starships: 'starships/',
    species: 'species/',
}

export const constantForSearch = "?search=";

export const nextPage = '?page=';

export const imgLink = 'https://starwars-visualguide.com/assets/img/';

export const sendRequest = async(urlFirstPart, urlSecondPart = '', urlThirdPart = '') => {
    try {
        const response = await fetch(urlFirstPart + urlSecondPart + urlThirdPart);
        let result;
        if (response?.status >= 400) {
            console.log('Some error with response in sendRequest');
        } else {
            result = await response.json();
        }
        return result;
    } catch (e) {
        console.log('sendRequest error ', e);
    }
}
