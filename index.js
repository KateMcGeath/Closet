/**Create global variables**/
const clothes = [];

var count;
var selectedTops;
var selectedDresses;
var selectedBottoms;
var selectedShoes;
var selectedClothes;
var selectedColor;
var j = 0;
var i = 0;
var h = 0;
var shoe = null;
var dress = null;
var top = null;
var bottom = null;
var one_piece = false;
let values = [];
let topExists = false;
let bottomExists = false;
let dressExists = false;
let shoesExists = false;
let checkboxes = 0;

/**Create and Initialize clothes**/

const short_sleeves = [];
short_sleeves[0] = {img: "short-sleeve1.png", style: "short-sleeve", color: "grey", weather: ["summer", "spring", "fall"], type: "two-piece"};
short_sleeves[1] = {img: "short-sleeve2.png", style: "short-sleeve", color: "blue", weather: ["summer", "spring", "fall"]};
short_sleeves[2] = {img: "short-sleeve3.png", style: "short-sleeve", color: "white", weather: ["summer", "spring", "fall"]};

const long_sleeves = [];
long_sleeves[0] = {img: "long-sleeve1.png", style: "long-sleeve", color: "green", weather: ["winter", "spring", "fall"]};
long_sleeves[1] = {img: "long-sleeve2.png", style: "long-sleeve", color: "blue", weather: ["winter", "spring", "fall"]};
long_sleeves[2] = {img: "long-sleeve3.png", style: "long-sleeve", color: "black", weather: ["winter", "spring", "fall"]};
long_sleeves[3] = {img: "long-sleeve4.png", style: "long-sleeve", color: "purple", weather: ["winter", "spring", "fall"]};
long_sleeves[4] = {img: "long-sleeve5.png", style: "long-sleeve", color: ["grey", "black"], weather: ["winter", "spring", "fall"]};

const skirts = [];
skirts[0] = {img: "skirt1.png", style: "skirt", color: "pink", weather: ["summer", "spring", "fall"]};
skirts[1] = {img: "skirt2.png", style: "skirt", color: "black", weather: ["summer", "spring", "fall"]};
skirts[2] = {img: "skirt3.png", style: "skirt", color: "pink", weather: ["summer", "spring", "fall"]};
skirts[3] = {img: "skirt4.png", style: "skirt", color: "blue", weather: ["summer", "spring", "fall"]};

const dresses = [];
dresses[0] = {img: "dress1.png", style: "dress", color: "grey", weather: ["summer", "spring", "fall"]};
dresses[1] = {img: "dress2.png", style: "dress", color: ["green", "blue"], weather: ["summer", "spring", "fall"]};
dresses[2] = {img: "dress3.png", style: "dress", color: "green", weather: ["summer", "spring", "fall"]};
dresses[3] = {img: "dress4.png", style: "dress", color: "purple", weather: ["summer", "spring", "fall"]};
dresses[4] = {img: "dress5.png", style: "dress", color: "pink", weather: ["summer", "spring"]};
dresses[5] = {img: "dress6.png", style: "dress", color: "orange", weather: ["summer", "spring"]};
dresses[6] = {img: "dress7.png", style: "dress", color: "yellow", weather: ["summer", "spring", "fall"]};
dresses[7] = {img: "dress8.png", style: "dress", color: "purple", weather: ["summer", "spring", "fall"]};
dresses[8] = {img: "dress9.png", style: "dress", color: "brown", weather: ["summer", "spring", "fall"]};
dresses[9] = {img: "dress10.png", style: "dress", color: "pink", weather: ["summer", "spring", "fall"]};
dresses[10] = {img: "dress11.png", style: "dress", color: "black", weather: ["summer", "spring", "fall", "winter"]};
dresses[11] = {img: "dress12.png", style: "dress", color: "pink", weather: ["summer", "spring", "fall"]};
dresses[12] = {img: "dress13.png", style: "dress", color: "yellow", weather: ["summer", "spring", "fall"]};
dresses[13] = {img: "dress14.png", style: "dress", color: "grey", weather: ["summer", "spring", "fall", "winter"]};
dresses[14] = {img: "dress15.png", style: "dress", color: "red", weather: ["summer", "spring", "fall", "winter"]};
dresses[15] = {img: "dress16.png", style: "dress", color: "blue", weather: ["summer", "spring", "fall", "winter"]};
dresses[16] = {img: "dress17.png", style: "dress", color: "blue", weather: ["summer", "spring", "fall"]};
dresses[17] = {img: "dress18.png", style: "dress", color: "blue", weather: ["summer", "spring", "fall"]};
dresses[18] = {img: "dress19.png", style: "dress", color: "red", weather: ["summer", "spring", "fall"]};
dresses[19] = {img: "dress20.png", style: "dress", color: "blue", weather: ["summer", "spring", "fall"]};
dresses[20] = {img: "dress21.png", style: "dress", color: "blue", weather: ["summer", "spring", "fall", "winter"]};
dresses[21] = {img: "dress22.png", style: "dress", color: "purple", weather: ["summer", "spring", "fall"]};

const shoes = [];
shoes[0] = {img: "shoes1.png", style: "shoes", color: "black", weather: ["summer", "spring", "fall", "winter"]};
shoes[1] = {img: "shoes2.png", style: "shoes", color: "red", weather: ["summer", "spring", "fall", "winter"]};
shoes[2] = {img: "shoes3.png", style: "shoes", color: ["black", "grey"], weather: ["summer", "spring", "fall", "winter"]};

const shorts = [];
shorts[0] = {img: "shorts1.png", style: "shorts", color: "blue", weather: ["summer", "spring", "fall"]};
shorts[1] = {img: "shorts2.png", style: "shorts", color: "blue", weather: ["summer", "spring", "fall"]};
shorts[2] = {img: "shorts3.png", style: "shorts", color: "blue", weather: ["summer", "spring", "fall"]};
shorts[3] = {img: "shorts4.png", style: "shorts", color: "blue", weather: ["summer", "spring", "fall"]};

const pants = [];
pants[0] = {img: "pants1.png", style: "pants", color: "blue", weather: ["summer", "spring", "fall", "winter"]};
pants[1] = {img: "pants2.png", style: "pants", color: "blue", weather: ["summer", "spring", "fall", "winter"]};
pants[2] = {img: "pants3.png", style: "pants", color: "black", weather: ["summer", "spring", "fall", "winter"]};

const overalls = [];
overalls[0] = {img: "overalls1.png", style: "overalls", color: "black", weather: ["summer", "spring", "fall"]};
overalls[1] = {img: "overalls2.png", style: "overalls", color: "blue", weather: ["summer", "spring", "fall"]};

const rompers = [];
rompers[0] = {img: "romper1.png", style: "romper", color: "white", weather: "summer"};
rompers[1] = {img: "romper2.png", style: "romper", color: "white", weather: "summer"};
rompers[2] = {img: "romper3.png", style: "romper", color: "black", weather: ["summer", "fall", "spring"]};
rompers[3] = {img: "romper4.png", style: "romper", color: "grey", weather: ["summer", "fall", "spring", "winter"]};
rompers[4] = {img: "romper5.png", style: "romper", color: "grey", weather: ["summer", "fall", "spring", "winter"]};
rompers[5] = {img: "romper6.png", style: "romper", color: "pink", weather: ["summer", "fall", "spring", "winter"]};

const tank_tops = [];
tank_tops[0] = {img: "tanktop1.png", style: "tank-top", color: "white", weather: ["summer", "spring", "fall"]};
tank_tops[1] = {img: "tanktop2.png", style: "tank-top", color: "blue", weather: ["summer", "spring", "fall"]};
tank_tops[2] = {img: "tanktop3.png", style: "tank-top", color: "grey", weather: ["summer", "spring", "fall"]};
tank_tops[3] = {img: "tanktop4.png", style: "tank-top", color: "orange", weather: ["summer", "spring", "fall"]};


/**On Click event for each checkbox that is selected,
 * puts selected checkboxes in an array**/
document.getElementById("btn").addEventListener('click', (event) => {
    checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    if(checkboxes != undefined) {
        checkboxes.forEach((checkbox) => {
            values.push(checkbox.value);
        
        });
    }
    getClothes();
});

/**Call to load and get clothes to display**/
getClothes();

/**Get the selected checkboxes of clothes only**/
function getSelectedClothes() {

    //Initialize variables
    topExists = false;
    bottomExists = false;
    dressExists = false;
    shoesExists = false;
    selectedBottoms = [];
    selectedTops = [];
    selectedDresses = [];
    selectedShoes = []; 
    selectedColor = [];

    //Pop off last value
    var val = values.pop();

    //If nothing is selected, the value of pop will be undefined.
    //If nothing is checked, use short-sleeve and shorts as template.
    if(val == undefined) {

        //Loop through the clothes array.
        for(j = 0; j < short_sleeves.length; j++) { 

            //add object image to selected tops array.
                selectedTops.push(short_sleeves[j].img);
                topExists = true;
            
            //add object image to selected bottoms array.
                selectedBottoms.push(shorts[j].img);
                bottomExists = true;
            
            //add object image to selected shoes array.
                selectedShoes.push(shoes[j].img);
                shoesExists = true;
        }
    }
    else {
        //While val is defined, loop through clothes array.
        while(val) {

            //then compare value to tank-top.
            //If val is equal, push clothes object onto selected tops array.
            if(val === 'tank-top') {
                for(i = 0; i < tank_tops.length; i++) {
                    selectedTops.push(tank_tops[i].img);
                }
                topExists = true;
            }
            //then compare value to short-sleeve.
            //If val is equal, push clothes object onto selected tops array.
            if(val === 'short-sleeve') {
                for(i = 0; i < short_sleeves.length; i++) {
                    selectedTops.push(short_sleeves[i].img);
                }
                topExists = true;
            }
            //then compare value to long-sleeve.
            //If val is equal, push clothes object onto selected tops array.
            if(val === 'long-sleeve') {
                for(i = 0; i < long_sleeves.length; i++) {
                    selectedTops.push(long_sleeves[i].img);
                }
                topExists = true;
            }
            //then compare value to shorts.
            //If val is equal, push clothes object onto selected bottoms array.
            if(val === 'shorts') {
                for(i = 0; i < shorts.length; i++) {
                    selectedBottoms.push(shorts[i].img);
                }
                bottomExists = true;
            }
            //then compare value to pants.
            //If val is equal, push clothes object onto selected bottoms array.
            if(val === 'pants') {
                for(i = 0; i < pants.length; i++) {
                    selectedBottoms.push(pants[i].img);
                }
                bottomExists = true;
            }
            //then compare value to skirt.
            //If val is equal, push clothes object onto selected bottoms array.
            if(val === 'skirt') {
                for(i = 0; i < skirts.length; i++) {
                    selectedBottoms.push(skirts[i].img);
                }
                bottomExists = true;
            }
            //then compare value to dress.
            //If val is equal, push clothes object onto selected dresses array.
            if(val === 'dress') {
                for(i = 0; i < dresses.length; i++) {
                    selectedDresses.push(dresses[i].img);
                }
                dressExists = true;
            }//then compare value to shoes.
            //If val is equal, push clothes object onto selected shoes array.
            if(val === 'shoes') {
                for(i = 0; i < shoes.length; i++) {
                    selectedShoes.push(shoes[i].img);
                }
                shoesExists = true;
            }
                
                // //If clothes object's color is equal to the popped value,
                // if(clothes[j].color === val) {

                //     //then compare value to black.
                //     //If val is equal, push clothes object onto selected color array.
                //     if(val === 'black') {
                //         selectedColor.push(clothes[j].img);
                //         i++;
                //     }
                //     //then compare value to white.
                //     //If val is equal, push clothes object onto selected color array.
                //     if(val === 'white') {
                //         selectedColor.push(clothes[j].img);
                //         i++;
                //     }
                //     //then compare value to grey.
                //     //If val is equal, push clothes object onto selected color array.
                //     if(val === 'grey') {
                //         selectedColor.push(clothes[j].img);
                //         i++;
                //     }
                //     //then compare value to blue.
                //     //If val is equal, push clothes object onto selected color array.
                //     if(val === 'blue') {
                //         selectedColor.push(clothes[j].img);
                //         i++;
                //     }
                //     //then compare value to green.
                //     //If val is equal, push clothes object onto selected color array.
                //     if(val === 'green') {
                //         selectedColor.push(clothes[j].img);
                //         i++;
                //     }
                //     //then compare value to red.
                //     //If val is equal, push clothes object onto selected color array.
                //     if(val === 'red') {
                //         selectedColor.push(clothes[j].img);
                //         i++;
                //     }
                //     //then compare value to pink.
                //     //If val is equal, push clothes object onto selected color array.
                //     if(val === 'pink') {
                //         selectedColor.push(clothes[j].img);
                //         i++;
                //     }
                // } 
            //Pop off the next value that is selected.
            val = values.pop();
        }
    }    
}



/**Get a random outfit from the selected clothes**/
function getOutfit() {

    //If selected is shoes, get random shoes.
    if(shoesExists) {
        var num0 = Math.floor( Math.random() * selectedShoes.length );
        shoe = selectedShoes[ num0 ];
    }
    
    //If selected is a dress, get a random dress.
    if(dressExists) {
        var num3 = Math.floor(Math.random() * selectedDresses.length);
        dress = selectedDresses[ num3 ];
    }

    //If selected is a top, get a random top.
    if(topExists) {
        var num1 = Math.floor( Math.random() * selectedTops.length );
        top = selectedTops[ num1 ]; 
    }

    //If selected is a bottom, get a random bottom.
    if(bottomExists) {
        var num2 = Math.floor( Math.random() * selectedBottoms.length);
        bottom = selectedBottoms[ num2 ];
    }
}

/**Display the outfit depending on if its a one-piece or two-piece**/
function displayOutfit() {

    //If the outfit is a two-piece, display outfit.
    if(topExists && bottomExists) {

        document.getElementById("two-piece-div").style.display = "block";
        document.getElementById("one-piece-div").style.display = "none";

        var imgTop = "images/" + top;
        document.getElementById("top").src = imgTop;

        var imgBottom = "images/" + bottom;
        document.getElementById("bottom").src = imgBottom;

    }
    //If the selected is a two-piece and one-piece,
    //pick a random two-piece or one-piece.
    else if(topExists && dressExists) {

        var num1 = Math.floor( Math.random() * 2 );
        
        if(num1 == 1) {

            document.getElementById("one-piece-div").style.display = "flex";
            document.getElementById("two-piece-div").style.display = "none";

            var imgDress = "images/" + dress;
            document.getElementById("one-piece").src = imgDress;
        }
        else {
        
            document.getElementById("two-piece-div").style.display = "block";
            document.getElementById("one-piece-div").style.display = "none";

            var imgTop = "images/" + top;
            document.getElementById("top").src = imgTop;

            var imgBottom = "images/" + bottom;
            document.getElementById("bottom").src = imgBottom;
        }
    }
    //If the outfit is a one-piece, display the one-piece.
    else if(dressExists) {

        document.getElementById("one-piece-div").style.display = "flex";
        document.getElementById("two-piece-div").style.display = "none";

        var imgDress = "images/" + dress;
        document.getElementById("one-piece").src = imgDress;
    }

    //If shoes are selected, display them.
    if(shoesExists) {

        document.getElementById("shoes-div").style.display = "flex";

        //Display random shoes.
        var imgShoe = "images/" + shoe;
        document.getElementById("shoes-img").src = imgShoe;
    }
    else {
        document.getElementById("shoes-div").style.display = "none";
    }
}


/**Function call to get clothes**/
function getClothes(){

    getSelectedClothes();

    getOutfit();

    displayOutfit();

}

/**Accordion event listener**/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
