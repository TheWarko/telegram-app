export const selectCountryPrefix = (selectTarget,labelTarget) => {
    const selectCountry = document.getElementById(selectTarget)
    const labelCountry = document.getElementById(labelTarget)

    selectCountry.addEventListener('change',(e) => { labelCountry.innerHTML = e.target.value } )
}