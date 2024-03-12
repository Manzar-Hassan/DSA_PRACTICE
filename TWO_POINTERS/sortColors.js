function swapColors(colors, firstPointer, secondPointer) {
    let tempColor = colors[firstPointer];
    colors[firstPointer] = colors[secondPointer];
    colors[secondPointer] = tempColor;
}

function sortColors(colors){
    let redPointer = 0;
    let whitePointer = 0;
    let bluePointer = colors.length - 1

    while(whitePointer <= bluePointer) {
        if(colors[whitePointer] === 0) {
            swapColors(colors, whitePointer, redPointer)
            redPointer++;
            whitePointer++;

        } else if(colors[whitePointer] === 2) {
            swapColors(colors, whitePointer, bluePointer)

            bluePointer--;

        } else {
            whitePointer++;
        }
    }

    return colors;
}

console.log(sortColors([0,1,0]))
