import refs from './refs';
import countriesTemplate from '../templates/countries.hbs';
import oneCountryTemplate from '../templates/oneCountry.hbs';

export const createMarkup = (countries) => {
    const markup = countriesTemplate(countries);
    refs.mainListRef.insertAdjacentHTML('beforeend', markup);
}

export const createMarkupForOne = (data) => {
    const markup = oneCountryTemplate(data);
    refs.mainListRef.insertAdjacentHTML('beforeend', markup);
}

// export default createMarkup;