import navbar from '../views/navbar'


const chats = `
    <div class="chats" >

        <header class="header" >
            <div class="header__container" >
                <nav>
                    <div id="header__left" class="header__left" >
                        <span></span>
                    </div> 
                    <div id="header__center" class="header__center" >
                        <span><h1>Chats</h1></span>
                    </div> 
                    <div id="header__right" class="header__right" >
                        <span></span>
                    </div> 
                </nav>
            </div>
        </header>

        <div class="chats__container">
            <div class="row" data-chat="1" >
                <div class="row__actionLeft"></div>
                <div class="row__image">
                    <img src="assets/images/contacts/contact2.png" alt="contact1" >
                </div>
                <div class="row__text">
                    <p class="row__text__1" >Lorem ipsum</p>
                    <p class="row__text__2" >Lorem ipsum dolor</p>
                </div>
            </div>
        </div>

        ${navbar.replace('navbar__chats','navbar__chats active')}

    </div>

`

export default chats