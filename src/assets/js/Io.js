import io from 'socket.io-client';

const Io = () => {

    var socket = io('http://localhost:3000');
    socket.on('connect', onConnect);
    function onConnect() {
        console.log('connect ' + socket.id);
        socket.on('disconnect', () => console.log('disconnect ' + socket.id));
    }


    const msgButton = document.getElementById('send')
    const msgInput = document.getElementById('message')
    const msgArea = document.getElementById('messages')

    //send message
    msgButton.addEventListener('click',(ev) => {
        socket.emit('message', msgInput.value);
        msgInput.value = ''
    })

    //print messages
    socket.on('messages', function(msg) {
        let node = document.createElement('li')
        node.innerHTML = msg
        msgArea.appendChild(node)
    });

}

export default Io