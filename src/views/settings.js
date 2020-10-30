import navbar from '../views/navbar'


const settings = `
    <div class="settings" >

        <header class="header" >
            <div class="header__container" >
                <nav>
                    <div id="header__left" class="header__left" >
                        <span></span>
                    </div> 
                    <div id="header__center" class="header__center" >
                        <span><h1>Settings</h1></span>
                    </div> 
                    <div id="header__right" class="header__right" >
                        <span></span>
                    </div> 
                </nav>
            </div>
        </header>

        <div class="settings__container">
            <div>
                <p>Hello Settings</p>
            </div>
        </div>

        ${navbar.replace('navbar__settings','navbar__settings active')}

    </div>

`

export default settings