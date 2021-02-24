import firebase from 'firebase'



const Users = () => {

    const db = firebase.database();

    const createUser = (firstname, lastname, avatar) => {
        db.ref('users').push({
            firstname: firstname,
            lastname: lastname,
            avatar : avatar
        })
    }

    createUser('Mario','Rossi','https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png')

}

export default Users