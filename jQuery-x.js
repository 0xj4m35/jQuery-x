function jQueryX(selector) {
    if(!(this instanceof jQueryX)) {
        return new jQueryX(selector)
    }
    this.push.apply(this, document.querySelectorAll(selector))
}

jQueryX.prototype = []

jQueryX.prototype.each = function(callback) {
    this.forEach(callback)
    return this
}

jQueryX.fn = jQueryX.prototype
const $ = ( window.$ = jQueryX )

/*--------------------------SAMPLE FUNCTIONS---------------------------*/

jQueryX.fn.addClass = function(className) {
    return this.each(element => {
        element.classList.add(className)
    })
}

jQueryX.fn.color = function(color) {
    return this.each(element => {
        element.style.color = color
    })
}

jQueryX.fn.attr = function(attr, value) {
    return this.each(element => {
        element.setAttribute(attr, value)
    })
}

jQueryX.fn.innerHTML = function(text) {
    return this.each(element => {
        element.innerHTML = text
    })
}