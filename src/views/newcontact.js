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
                        <span><h1>New contact</h1></span>
                    </div> 
                    <div id="header__right" class="header__right" >
                        <span></span>
                    </div> 
                </nav>
            </div>
        </header>

        <div class="newcontact__container">
            <div class="row">
                <div class="row__action"></div>
                <div class="row__image">
                </div>
                <div class="row__text">
                    <p class="row__text__label" >Add people nerby</p>
                </div>
            </div>
            
        </div>

        ${navbar}

    </div>
`

export default newcontact

