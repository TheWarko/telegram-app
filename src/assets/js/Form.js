const Form = () => {

    const validateForm = (inputs) => {
        let valid = true
        inputs.forEach(el => {
            if(el.value == '') {
                valid = false
            }
        });

        if (valid){
            document.querySelector('.header__right span').classList.remove('hidden')
        }else{
            document.querySelector('.header__right span').classList.add('hidden')
        }
        return valid
    }

    const formFields = document.querySelectorAll('form.validateForm input')
    formFields.forEach(el => el.addEventListener('input',() => validateForm(formFields)))
    
}

export default Form