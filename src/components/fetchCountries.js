import {createMarkup, createMarkupForOne}  from './createMarkup';
import notification from './notification';



const fetchCountries = (url) => {
    return fetch(url)
        .then(res => res.json())
        .then(countries => {
            createMarkup(countries);
            const countriesLength = [...countries].length;
            if (countriesLength >= 10) {
                notification.notify();
            } else if (countriesLength === 1){
                createMarkupForOne(countries);
            } else {
                notification.isActive = false;
            }
        })
        .catch(error => {
            console.log(error)
        })
}


export default fetchCountries;