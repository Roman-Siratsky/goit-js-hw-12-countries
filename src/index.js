import './styles.css';
import _ from 'lodash';
import refs from './components/refs';
import fetchCountries from './components/fetchCountries';


const debouncedInputCallback = _.debounce((event) => {
    const inputValue = event.target.value;
    switch (inputValue.length) {
        case 0:
            refs.mainListRef.innerHTML = '';
            fetchCountries(refs.allUrl);
            break;

        default:
            refs.mainListRef.innerHTML = '';
            fetchCountries(refs.sortedUrl + inputValue);
    }
}, 500)

refs.inputRef.addEventListener('input', debouncedInputCallback);

