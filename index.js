function newImage (url, left, bottom) {
    let Object = document.createElement('img')
    Object.src = url
    Object.style.position = 'fixed'
    Object.style.left = left + 'px'
    Object.style.bottom = bottom + 'px'
    document.body.append(Object)
    return Object
}



function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}