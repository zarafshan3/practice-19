var top_side = 10
var left_side = 10
var top_side2 = 10
var left_side2 = 10
var z_index = 1
var plane1 = document.getElementById('plane1')
var plane2 = document.getElementById('plane2')

onkeydown = (e) => {

 // plane1-function
    
    if (e.key == "ArrowDown") {
        plane1.style.top = top_side+ "px"
        top_side += 10
    }
    if (e.key == "ArrowUp") {
        plane1.style.top = top_side+ "px"
        top_side -= 10
    }
    if (e.key == "ArrowLeft") {
        plane1.style.left = left_side+ "px"
        left_side -= 10
    }
    if (e.key == "ArrowRight") {
        plane1.style.left = left_side+ "px"
        left_side += 10
    }
// plane2-function

    if (e.key == "s") {
        plane2.style.top = top_side2+ "px"
        top_side2 += 10
    }
    if (e.key == "w") {
        plane2.style.top = top_side2+ "px"
        top_side2 -= 10
    }
    if (e.key == "a") {
        plane2.style.left = left_side2+ "px"
        left_side2 -= 10
    }
    if (e.key == "d") {
        plane2.style.left = left_side2+ "px"
        left_side2 += 10
    }

// z_index

if (e.key == "o") {
    plane1.style.zIndex = z_index
    z_index += 1 
}

if (e.key == "p") {
    plane2.style.zIndex = z_index
    z_index += 1 
}
}