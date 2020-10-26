import home from '../../views/home'
import subscription from '../../views/subscription'
import subscription2 from '../../views/subscription2'
import subscription3 from '../../views/subscription3'
import contacts from '../../views/contacts'
import calls from '../../views/calls'


import {selectCountryPrefix} from './Utils';
import Form from './Form';


const routes = {
    '#' : home,
    '#subscription' : subscription,
    '#subscription2' : subscription2,
    '#subscription3' : subscription3,
    '#contacts' : contacts,
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

const slideView = (selector,navDirection) => {
    if(navDirection == 'next' || !navDirection){
        selector.animate([
            { 
                transform: 'translateX(100%)', 
                opacity: 0 
            }, 
            { 
                transform: 'translateX(0)', 
                opacity: 1 
            }
        ], { 
            duration: 300,
            iterations: 1
        });
    }
    else{
        selector.animate([
            { 
                transform: 'translateX(-100%)', 
                opacity: 0 
            }, 
            { 
                transform: 'translateX(0)', 
                opacity: 1 
            }
        ], { 
            duration: 300,
            iterations: 1
        });
    }
} 


const Routing = (pathname,navDirection) => {
    const root = document.getElementById('root')
    root.innerHTML = routes[pathname]
    window.history.pushState({page: pathname.replace('#','')}, pathname.replace('#',''), pathname)

    const main = document.getElementById('main')
    slideView(main,navDirection)
    events(pathname)
}
window.Routing = Routing




export default Routing