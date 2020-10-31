
const Contacts = () => {

    const events = () => {
        const contactsNodes = document.querySelectorAll('[data-contact]')
        contactsNodes.forEach((el) => {
            el.addEventListener('click',(ev) => Routing('#contact/'+ev.currentTarget.getAttribute('data-contact') ))
        })
    }

    events()

}

export default Contacts