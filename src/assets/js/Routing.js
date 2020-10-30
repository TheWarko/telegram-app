import subscription from '../../views/subscription'
import subscription2 from '../../views/subscription2'
import subscription3 from '../../views/subscription3'
import contacts from '../../views/contacts'
import contact from '../../views/contact'
import newcontact from '../../views/newcontact'
import calls from '../../views/calls'
import chats from '../../views/chats'
import settings from '../../views/settings'


import {selectCountryPrefix} from './Utils';
import Form from './Form';
import Contacts from './Contacts';


const routes = {
    '#subscription' : subscription,
    '#subscription2' : subscription2,
    '#subscription3' : subscription3,
    '#contacts' : contacts,
    '#contact' : contact,
    '#newcontact' : newcontact,
    '#calls' : calls,
    '#chats' : chats,
    '#settings' : settings
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
        case '#contacts':
            Contacts()
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
                opacity: 0.4 
            }, 
            { 
                transform: 'translateX(0)', 
                opacity: 1 
            }
        ], { 
            duration: 200,
            iterations: 1
        });
    }
    else{
        selector.animate([
            { 
                transform: 'translateX(-100%)', 
                opacity: 0.4 
            }, 
            { 
                transform: 'translateX(0)', 
                opacity: 1 
            }
        ], { 
            duration: 200,
            iterations: 1
        });
    }
} 


const Routing = (pathname,navDirection) => {
    const root = document.getElementById('root')
    
    if (localStorage.getItem("subscribed") || pathname.includes('#subscription')){
        if (pathname.indexOf('/')>0){
            let parameter = pathname.substr(pathname.indexOf('/'),pathname.length)
            pathname = pathname.substr(0,pathname.indexOf('/'))
            root.innerHTML = routes[pathname]
            pathname = pathname + parameter
        }else{
            root.innerHTML = routes[pathname]
        }
        window.history.pushState({page: pathname.replace('#','')}, pathname.replace('#',''), pathname)
    }else{
        root.innerHTML = routes['#subscription']
        window.history.pushState({page: 'subscription'}, 'subscription', '#subscription')
    }

    const main = document.getElementById('main')
    slideView(main,navDirection)
    events(pathname)
}
window.Routing = Routing




export default Routing