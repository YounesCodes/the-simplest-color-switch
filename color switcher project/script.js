function colorSwitch() {
    colors = ['yellow', 'orange', 'blue', 'green', 'cyan', 'white', 'coral', 'grey', 'pink', 'red', 'purple', 'brown', 'cyan', 'beige', 'blush', 'citron', 'crimson', 'corn', 'AliceBlue', 'Lime', 'Fuchsia', 'indigo', 'antiquewhite', 'gold', 'slateblue', 'yellowgreen', 'turquoise', 'teal', 'palegreen', 'springgreen', 'mediumvoilet', 'tomato']
 document.getElementById('colorbg').style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
}

