import home from '../../views/home'
import subscription from '../../views/subscription'
import calls from '../../views/calls'


const routes = {
    '/' : home,
    '/subscription' : subscription,
    '/calls' : calls
};

const Routing = (pathname) => {
    const root = document.getElementById('root')
    root.innerHTML = routes[pathname]
}
window.Routing = Routing



export default Routing