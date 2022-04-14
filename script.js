
/*Declare different color and pattern options for the shirt*/
let colorOptions = ['Red','Orange','Yellow','Green','Blue','Indigo','Violet','Salmon','Pink','Black','Purple','Aqua','Chartreuse','White'];
let patternOptions = ['Polka Dots','Stripes','Argyll','Plaid','Stars','Chevron'];

const generatedOption = document.getElementById('design');
const randomizeButton =  document.getElementById('button');
const colorBox1 = document.getElementById('color1');
const colorBox2 = document.getElementById('color2');

randomizeButton.addEventListener('click',() => {

    /*Use the Math features to choose a randomly generated option from the options listed abouve*/
    let randomColor1 = colorOptions[Math.floor(Math.random() * 14)];
    let randomColor2 = colorOptions[Math.floor(Math.random() * 14)];
    let pattern = patternOptions[Math.floor(Math.random() * 6)];

    while (randomColor1 === randomColor2) {
        randomColor2 = colorOptions[Math.floor(Math.random() * 14)];
    }

    /*Check which pattern was randomly selected and format output accordinly */
    if (pattern === 'Polka Dots' || pattern === 'Stars'|| pattern === 'Florals' ){
        output = `${randomColor1} with ${randomColor2} ${pattern}`
    }
    else {
        output = `${randomColor1} and ${randomColor2} ${pattern}`;
    }

    /* update values on app */
    generatedOption.innerText= output;
    colorBox1.style.backgroundColor = randomColor1;
    colorBox2.style.backgroundColor = randomColor2;

})

