import navbar from '../views/navbar'


const contacts = `
    <div class="contacts" >

        <header class="header" >
            <div class="header__container" >
                <nav>
                    <div id="header__left" class="header__left" >
                        <span></span>
                    </div> 
                    <div id="header__center" class="header__center" >
                        <span><h1>Contacts</h1></span>
                    </div> 
                    <div id="header__right" class="header__right" >
                        <span class="add" ><a href="javascript:void(0);" onclick="Routing('#newcontact')" >+</a></span>
                    </div> 
                </nav>
                <input type="text" class="header__searchbar searchbar" placeholder="Search" >
            </div>
        </header>

        <div class="contacts__container">
            <div class="row">
                <div class="row__action"></div>
                <div class="row__image">
                </div>
                <div class="row__text">
                    <p class="row__text__label" >Add people nerby</p>
                </div>
            </div>
            <div class="row">
                <div class="row__action"></div>
                <div class="row__image">
                </div>
                <div class="row__text">
                    <p class="row__text__label" >Invite friends</p>
                </div>
            </div>
            <div class="row" data-contact="1" >
                <div class="row__action"></div>
                <div class="row__image">
                    <img src="assets/images/contacts/contact2.png" alt="contact1" >
                </div>
                <div class="row__text">
                    <p class="row__text__1" >Lorem ipsum</p>
                    <p class="row__text__2" >Lorem ipsum dolor</p>
                </div>
            </div>
            <div class="row" data-contact="2">
                <div class="row__action"></div>
                <div class="row__image">
                    <img src="assets/images/contacts/contact1.png" alt="contact1" >
                </div>
                <div class="row__text">
                    <p class="row__text__1" >Lorem ipsum</p>
                    <p class="row__text__2" >Lorem ipsum dolor</p>
                </div>
            </div>
            <div class="row" data-contact="3">
                <div class="row__action"></div>
                <div class="row__image">
                    <img src="assets/images/contacts/contact2.png" alt="contact1" >
                </div>
                <div class="row__text">
                    <p class="row__text__1" >Lorem ipsum</p>
                    <p class="row__text__2" >Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div class="row" data-contact="4">
                <div class="row__action"></div>
                <div class="row__image">
                    <img src="assets/images/contacts/contact2.png" alt="contact1" >
                </div>
                <div class="row__text">
                    <p class="row__text__1" >Lorem ipsum</p>
                    <p class="row__text__2" >Lorem lorem ipsum dolor</p>
                </div>
            </div>
            <div class="row" data-contact="5">
                <div class="row__action"></div>
                <div class="row__image">
                    <img src="assets/images/contacts/contact1.png" alt="contact1" >
                </div>
                <div class="row__text">
                    <p class="row__text__1" >Lorem ipsum</p>
                    <p class="row__text__2" >Lorem ipsum dolor</p>
                </div>
            </div>
            <div class="row" data-contact="6" >
                <div class="row__action"></div>
                <div class="row__image">
                    <img src="assets/images/contacts/contact2.png" alt="contact1" >
                </div>
                <div class="row__text">
                    <p class="row__text__1" >Lorem ipsum</p>
                    <p class="row__text__2" >Lorem ipsum dolor</p>
                </div>
            </div>
            <div class="row" data-contact="7">
                <div class="row__action"></div>
                <div class="row__image">
                    <img src="assets/images/contacts/contact1.png" alt="contact1" >
                </div>
                <div class="row__text">
                    <p class="row__text__1" >Lorem ipsum</p>
                    <p class="row__text__2" >Lorem ipsum dolor</p>
                </div>
            </div>
            <div class="row" data-contact="8">
                <div class="row__action"></div>
                <div class="row__image">
                    <img src="assets/images/contacts/contact2.png" alt="contact1" >
                </div>
                <div class="row__text">
                    <p class="row__text__1" >Lorem ipsum</p>
                    <p class="row__text__2" >Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div class="row" data-contact="9">
                <div class="row__action"></div>
                <div class="row__image">
                    <img src="assets/images/contacts/contact2.png" alt="contact1" >
                </div>
                <div class="row__text">
                    <p class="row__text__1" >Lorem ipsum</p>
                    <p class="row__text__2" >Lorem lorem ipsum dolor</p>
                </div>
            </div>
            <div class="row" data-contact="10">
                <div class="row__action"></div>
                <div class="row__image">
                    <img src="assets/images/contacts/contact1.png" alt="contact1" >
                </div>
                <div class="row__text">
                    <p class="row__text__1" >Lorem ipsum</p>
                    <p class="row__text__2" >Lorem ipsum dolor</p>
                </div>
            </div>
            <div class="row" data-contact="11" >
                <div class="row__action"></div>
                <div class="row__image">
                    <img src="assets/images/contacts/contact2.png" alt="contact1" >
                </div>
                <div class="row__text">
                    <p class="row__text__1" >Lorem ipsum</p>
                    <p class="row__text__2" >Lorem ipsum dolor</p>
                </div>
            </div>
            <div class="row" data-contact="12">
                <div class="row__action"></div>
                <div class="row__image">
                    <img src="assets/images/contacts/contact1.png" alt="contact1" >
                </div>
                <div class="row__text">
                    <p class="row__text__1" >Lorem ipsum</p>
                    <p class="row__text__2" >Lorem ipsum dolor</p>
                </div>
            </div>
            <div class="row" data-contact="13">
                <div class="row__action"></div>
                <div class="row__image">
                    <img src="assets/images/contacts/contact2.png" alt="contact1" >
                </div>
                <div class="row__text">
                    <p class="row__text__1" >Lorem ipsum</p>
                    <p class="row__text__2" >Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <div class="row" data-contact="14">
                <div class="row__action"></div>
                <div class="row__image">
                    <img src="assets/images/contacts/contact2.png" alt="contact1" >
                </div>
                <div class="row__text">
                    <p class="row__text__1" >Lorem ipsum</p>
                    <p class="row__text__2" >Lorem lorem ipsum dolor</p>
                </div>
            </div>
            <div class="row" data-contact="15">
                <div class="row__action"></div>
                <div class="row__image">
                    <img src="assets/images/contacts/contact1.png" alt="contact1" >
                </div>
                <div class="row__text">
                    <p class="row__text__1" >Lorem ipsum</p>
                    <p class="row__text__2" >Lorem ipsum dolor</p>
                </div>
            </div>
        </div>

        ${navbar.replace('navbar__contacts','navbar__contacts active')}

        
    </div>
`


export default contacts

