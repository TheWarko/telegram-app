import navbar from '../views/navbar'


const newContact = `
    <div class="newContact" >

        <header class="header" >
            <div class="header__container" >
                <nav>
                    <div id="header__left" class="header__left" >
                        <span class="back" onclick="Routing('contacts')" >Back</span>
                    </div> 
                    <div id="header__center" class="header__center" >
                        <span><h1>Info</h1></span>
                    </div> 
                    <div id="header__right" class="header__right" >
                        <span class="hidden" ><a href="javascript:void(0);" onclick="Routing('#')" >+</a></span>
                    </div> 
                </nav>
            </div>
        </header>

        <div class="newContact__container">
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

export default newContact

