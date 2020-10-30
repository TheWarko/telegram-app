const navbar = `
    <nav class="navbar" >
        <div class="navbar__container" >
            <nav>
                <div class="navbar__contacts" onclick="Routing('#contacts')" >Contacts</div>
                <div class="navbar__calls" onclick="Routing('#calls')" >Calls</div>
                <div class="navbar__chats" onclick="Routing('#chats')" >Chats</div>
                <div class="navbar__settings" onclick="Routing('#settings')" >Settings</div>
            </nav>
        </div>
    </nav>
`

export default navbar
