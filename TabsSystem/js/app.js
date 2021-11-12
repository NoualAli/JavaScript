const tabWrappers = document.querySelectorAll('.tabs-container')
if(tabWrappers.length){
    tabWrappers.forEach(wrapper => {
        const tabsElt = wrapper.querySelectorAll('.tabs a')
        const tabContentsElt = wrapper.querySelectorAll('.tab-content')
        if(tabsElt.length){
            tabsElt.forEach(tab => {
                tab.addEventListener('click', e => {
                    e.preventDefault()
                    closeTabs(tabsElt, tabContentsElt)
                    openTab(e)
                })
            })
        }
    })
}

/**
 * Open specific tab
 * 
 * @param {Event} e
 * 
 * @return void
 */
function openTab(e){
    console.log(e)
    const target = document.querySelector(e.target.dataset.target)
    e.target.classList.add('active')
    target.classList.add('active')
}

/**
 * Close all tabs
 * @param {HTMLLinkElement} tabsElt
 * @param {HTMLDivElement} tabContentsElt
 * 
 * @return void
 */
function closeTabs(tabsElt, tabContentsElt){
    tabsElt.forEach(tab => {
        tab.classList.remove('active')
    })

    tabContentsElt.forEach(tab => {
        tab.classList.remove('active')
    })
}