const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
// if the below line is removed, it wont show the first  three content div
// if the line is active, it will show them initially without any scrolliing (just the first three)
// because it was initially called so it will calculate and add 3 div.box
//so comment it and then return it to visualize the difference
checkBoxes()

function checkBoxes(){
    const triggerBottom = (window.innerHeight / 5 * 4 )
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom){
            box.classList.add('show')
        } else{
            box.classList.remove('show')
        }
    })
}