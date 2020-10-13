const subscription = `
    <div class="subscription" >

        <div class="subscription__container">
            <p class="subscription__title" >Your Phone</p>
            <p class="subscription__text" >Please confirm your country code and enter your phone number.</p>

            <form action="" >
                <div class="field">
                    <select name="country" ></select>
                </div>
                <div class="field">
                    <label for="tel" >0</label>
                    <input type="tel" name="phone" >
                </div>
            </form>
            <button onClick="Routing('/calls')" >CALLS</button>
        </div>

    </div>
`

export default subscription