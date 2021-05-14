export const getRightCategoryForImage = item => {
    let result = '';
    if (item?.title) result = 'films/';
    else if (item?.classification) result = 'species/';
    else if (item?.mass) result = 'characters/';
    else if (item?.vehicle_class) result = 'vehicles/';
    else if (item?.starship_class) result = 'starships/';
    else if (item?.orbital_period) result = 'planets/';
    return result;
}

export const getNumberForImage = link => {
    let oneToLastChar = link?.[link?.length - 2];
    let twoToLastChar = link?.[link?.length - 3];
    let tempValue = twoToLastChar + oneToLastChar;
    let result = 0;
    if (isFinite(tempValue) || oneToLastChar == 0){
        result = tempValue;
    }
    else if (!isFinite(tempValue) && oneToLastChar != 0){
        result = oneToLastChar;
    }
    return result;
}

export const getRightImage = (item, url, fn, secondFn, imgLink) => {
    let result = ' ';
    if (item?.starship_class) {
        if (fn(url) == 2 || fn(url) == 3 || fn(url) == 17) {
            result = imgLink + 'placeholder.jpg';
        }
        else {
            result = imgLink + secondFn(item) + 
                fn(item?.url) + '.jpg';
        }
    }
    else if (!item?.starship_class) {
        if (item?.orbital_period && fn(url) == 1) {
            result = imgLink + 'placeholder.jpg';
        }
        else {
            result = imgLink + secondFn(item) + 
                fn(item?.url) + '.jpg';
        }
    }
    return result;
}