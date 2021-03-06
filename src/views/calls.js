import navbar from '../views/navbar'


const calls = `
    <div class="calls" >

        <header class="header" >
            <div class="header__container" >
                <nav>
                    <div id="header__left" class="header__left" >
                        <span></span>
                    </div> 
                    <div id="header__center" class="header__center" >
                        <span><h1>Calls</h1></span>
                    </div> 
                    <div id="header__right" class="header__right" >
                        <span></span>
                    </div> 
                </nav>
            </div>
        </header>

        <div class="calls__container">
            <div>
                <p>Hello Calls</p>
            </div>
        </div>

        ${navbar.replace('navbar__calls','navbar__calls active')}

    </div>

`

export default calls