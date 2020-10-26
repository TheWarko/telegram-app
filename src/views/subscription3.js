import navbar from './navbar'

const subscription3 = `
    <div class="subscription3" >

        <header class="header" >
            <nav>
                <div class="header__container" >
                    <div id="header__left" class="header__left" >
                        <span class="back" ><a href="javascript:void(0);" onclick="Routing('#subscription2','back')" >Back</a></span>                    
                    </div> 
                    <div id="header__center" class="header__center" >
                        <span></span>
                    </div> 
                    <div id="header__right" class="header__right" >
                        <span class="hidden" ><a href="javascript:void(0);" onclick="Routing('#contacts')" >Next</a></span>
                    </div> 
                </div>
            </nav>
        </header>

        <div class="subscription3__container" >
            <h2 class="subscription3__title title-medium" >Your Password</h2>
            <p class="subscription3__text" >You have Two-Step Verification enabled, so your account is protected with an additional password.</p>

            <form action="" class="validateForm" autocomplete="off" >                    
                <div class="field">
                    <input type="text" name="code" placeholder="your hint" >
                </div>
            </form>

            <a class="subscription3__message" href="javascript:void(0);">Forgot password?</a>

        </div>

        ${navbar}

    </div>
`

export default subscription3