import home from '../../views/home'
import subscription from '../../views/subscription'
import subscription2 from '../../views/subscription2'
import subscription3 from '../../views/subscription3'
import calls from '../../views/calls'
import Header from './Header';

import {selectCountryPrefix} from './Utils';
import Form from './Form';


const routes = {
    '#' : home,
    '#subscription' : subscription,
    '#subscription2' : subscription2,
    '#subscription3' : subscription3,
    '#calls' : calls
};

const events = (pathname) => {
    switch (pathname) {
        case '#subscription':
            selectCountryPrefix('selectCountry','labelCountry')
            Form()
            break;
        case '#subscription2':
            Form()
            break;
        case '#subscription3':
            Form()
            break;
        default:
            break;
    }
}

const Routing = (pathname) => {
    const root = document.getElementById('root')
    root.innerHTML = routes[pathname]
    window.history.pushState({page: pathname.replace('#','')}, pathname.replace('#',''), pathname)
    // Header(pathname.replace('/',''))

    events(pathname)

}
window.Routing = Routing




export default Routing