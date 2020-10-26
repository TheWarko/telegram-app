import navbar from '../views/navbar'


const subscription = `
    <div class="subscription" >

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

        <div class="subscription__container">
            <h2 class="subscription__title title-medium" >Your Phone</h2>
            <p class="subscription__text" >Please confirm your country code and enter your phone number.</p>

            <form action="" class="validateForm" autocomplete="off" >
                <div class="field">
                    <select name="selectCountry" id="selectCountry" >
                        <option value="+33">France</option>
                        <option value="+49">Germany</option>
                        <option value="+39" selected >Italy</option>
                        <option value="+34">Spain</option>
                        <option value="+44">United Kingdom</option>
                    </select>
                </div>
                <div class="field">
                    <label for="tel" id="labelCountry" >+39</label>
                    <input type="tel" pattern="[0-9]" name="phone" maxlength="10" placeholder="Your phone number" >
                </div>
            </form>
        </div>

        ${navbar}

    </div>
`

export default subscription

