import navbar from '../views/navbar'


const newcontact = `
    <div class="newcontact" >

        <header class="header" >
            <div class="header__container" >
                <nav>
                    <div id="header__left" class="header__left" >
                        <span class="back" ><a href="javascript:void(0);" onclick="Routing('#contacts','back')" >Back</a></span>                    
                    </div> 
                    <div id="header__center" class="header__center" >
                        <span><h1>Info</h1></span>
                    </div> 
                    <div id="header__right" class="header__right" >
                        <span></span>
                    </div> 
                </nav>
            </div>
        </header>

        <div class="newcontact__container">
            <div class="row" >
                <div class="row__image">
                    <img src="assets/images/contacts/contact2.png" alt="contact1" >
                </div>
                <div class="row__text">
                    <p class="row__text__1" >Tony Manera</p>
                    <p class="row__text__2" >online</p>
                </div>
                <div class="row____actionRight" >

                </div>
            </div>
            
        </div>

        ${navbar}

    </div>
`

export default newcontact

