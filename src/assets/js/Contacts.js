import Users from './Users'
import firebase from 'firebase'


const Contacts = () => {



    const events = () => {
        // const contactsNodes = document.querySelectorAll('[data-contact]')
        // contactsNodes.forEach((el) => {
        //     el.addEventListener('click',(ev) => Routing('#contact/'+ev.currentTarget.getAttribute('data-contact') ))
        // })

        const db = firebase.database()
        const users = db.ref('users')

        const contactsNodes = document.getElementById('contacts__container')
        let tempNode;

        users.once('value',(snapshot) => {
            console.log(snapshot)
            snapshot.forEach((el) => {
                tempNode = `
                <div class="row" data-contact="6" onclick="" >
                    <div class="row__actionLeft"></div>
                    <div class="row__image">
                        <img src="${el.val().avatar}" alt="${el.val().firstname}" >
                    </div>
                    <div class="row__text">
                        <p class="row__text__1" >${el.val().firstname} ${el.val().lastname}</p>
                        <p class="row__text__2" >Lorem ipsum dolor</p>
                    </div>
                </div>
                `
                let node = document.createElement('div')
                node.innerHTML = tempNode
                contactsNodes.appendChild(node)
            })
        })

    }

    Users()
    events()

}

export default Contacts