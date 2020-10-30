import Routing from "./Routing";

const Subscription = () => {
    localStorage.setItem("subscribed", true)
    Routing('#contacts')
}
window.Subscription = Subscription

export default Subscription