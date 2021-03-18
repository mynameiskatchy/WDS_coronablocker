// start with body, loop thru every element
replaceText(document.body)

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/coronavirus/gi)) {
            element.parentElement.style.color = 'black'
            element.parentElement.style.backgroundColor = 'black'
        }
        element.textContent = element.textContent.replace(/coronavirus/gi, '█████')
    }
}