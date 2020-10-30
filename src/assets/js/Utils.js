export const selectCountryPrefix = (selectTarget,labelTarget) => {
    const selectCountry = document.getElementById(selectTarget)
    const labelCountry = document.getElementById(labelTarget)

    selectCountry.addEventListener('change',(e) => { labelCountry.innerHTML = e.target.value } )
}

export const isMobile = () => {
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))  alert("Visit the page from a Mobile Device")
}