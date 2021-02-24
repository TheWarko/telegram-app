import navbar from '../views/navbar'


const chat = `
    <div class="chat" >

        <header class="header" >
            <div class="header__container" >
                <nav>
                    <div id="header__left" class="header__left" >
                        <span class="back" ><a href="javascript:void(0);" onclick="Routing('#chats','back')" >Back</a></span>                    
                    </div> 
                    <div id="header__center" class="header__center" >
                        <span><h1>Mario</h1></span>
                    </div> 
                    <div id="header__right" class="header__right" >
                        <span></span>
                    </div> 
                </nav>
            </div>
        </header>

        <div class="chat__container">
            <ul id="messages"></ul>
            <form action="">
                <input id="message" autocomplete="off" /><button id="send" >Send</button>
            </form>
        </div>

    </div>

`

export default chat