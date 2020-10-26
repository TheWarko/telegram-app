import navbar from '../views/navbar'


const contacts = `
    <div class="contacts" >

        <header class="header" >
            <nav>
                <div class="header__container" >
                    <div id="header__left" class="header__left" >
                        <span></span>
                    </div> 
                    <div id="header__center" class="header__center" >
                        <span></span>
                    </div> 
                    <div id="header__right" class="header__right" >
                        <span class="hidden" ><a href="javascript:void(0);" onclick="Routing('#subscription2')" >Next</a></span>
                    </div> 
                </div>
            </nav>
        </header>

        <div class="contacts__container">
            
        
        </div>

        ${navbar}

    </div>
`

export default contacts

