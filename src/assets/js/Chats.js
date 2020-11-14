

const Chats = () => {

    const events = () => {
        const chatsNodes = document.querySelectorAll('[data-chat]')
        chatsNodes.forEach((el) => {
            el.addEventListener('click',(ev) => Routing('#chat/'+ev.currentTarget.getAttribute('data-chat') ))
        })
    }
    events()

}

export default Chats