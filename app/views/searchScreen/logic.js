export const getCategoryImages = item => {
    let result = item;
    if (item === 'people') {
        result = 'character';
    }
    return result;
}