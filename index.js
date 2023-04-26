/**Create global variables**/
const clothes = [];
var selectedTops;
var selectedDresses;
var selectedBottoms;
var selectedShoes;
var selectedClothes;
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
let checkboxes = 0;

/**Create and Initialize clothes**/
const short_sleeve1 = {img: "short-sleeve1.png", style: "short-sleeve", color: "grey", weather: ["summer", "spring", "fall"], type: "two-piece"};
const short_sleeve2 = {img: "short-sleeve2.png", style: "short-sleeve", color: "blue", weather: ["summer", "spring", "fall"]};
const short_sleeve3 = {img: "short-sleeve3.png", style: "short-sleeve", color: "white", weather: ["summer", "spring", "fall"]};
const long_sleeve1 = {img: "long-sleeve1.png", style: "long-sleeve", color: "green", weather: ["winter", "spring", "fall"]};
const long_sleeve2 = {img: "long-sleeve2.png", style: "long-sleeve", color: "blue", weather: ["winter", "spring", "fall"]};
const long_sleeve3 = {img: "long-sleeve3.png", style: "long-sleeve", color: "black", weather: ["winter", "spring", "fall"]};
const long_sleeve4 = {img: "long-sleeve4.png", style: "long-sleeve", color: "purple", weather: ["winter", "spring", "fall"]};
const long_sleeve5 = {img: "long-sleeve5.png", style: "long-sleeve", color: ["grey", "black"], weather: ["winter", "spring", "fall"]};
const skirt1 = {img: "skirt1.png", style: "skirt", color: "pink", weather: ["summer", "spring", "fall"]};
const skirt2 = {img: "skirt2.png", style: "skirt", color: "black", weather: ["summer", "spring", "fall"]};
const skirt3 = {img: "skirt3.png", style: "skirt", color: "pink", weather: ["summer", "spring", "fall"]};
const skirt4 = {img: "skirt4.png", style: "skirt", color: "blue", weather: ["summer", "spring", "fall"]};
const dress1 = {img: "dress1.png", style: "dress", color: "grey", weather: ["summer", "spring", "fall"]};
const dress2 = {img: "dress2.png", style: "dress", color: ["green", "blue"], weather: ["summer", "spring", "fall"]};
const dress3 = {img: "dress3.png", style: "dress", color: "green", weather: ["summer", "spring", "fall"]};
const shoes1 = {img: "shoes1.png", style: "shoes", color: "black", weather: ["summer", "spring", "fall", "winter"]};
const shoes2 = {img: "shoes2.png", style: "shoes", color: "red", weather: ["summer", "spring", "fall", "winter"]};
const shoes3 = {img: "shoes3.png", style: "shoes", color: ["black", "grey"], weather: ["summer", "spring", "fall", "winter"]};
const shorts1 = {img: "shorts1.png", style: "shorts", color: "blue", weather: ["summer", "spring", "fall"]};
const shorts2 = {img: "shorts2.png", style: "shorts", color: "blue", weather: ["summer", "spring", "fall"]};
const shorts3 = {img: "shorts3.png", style: "shorts", color: "blue", weather: ["summer", "spring", "fall"]};
const shorts4 = {img: "shorts4.png", style: "shorts", color: "blue", weather: ["summer", "spring", "fall"]};
const pants1 = {img: "pants1.png", style: "pants", color: "blue", weather: ["summer", "spring", "fall", "winter"]};
const pants2 = {img: "pants2.png", style: "pants", color: "blue", weather: ["summer", "spring", "fall", "winter"]};
const pants3 = {img: "pants3.png", style: "pants", color: "black", weather: ["summer", "spring", "fall", "winter"]};

/**Put clothes objects into Clothes array**/
clothes[0] = short_sleeve1;
clothes[1] = short_sleeve2;
clothes[2] = short_sleeve3;
clothes[3] = long_sleeve1;
clothes[4] = long_sleeve2;
clothes[5] = long_sleeve3;
clothes[6] = long_sleeve4;
clothes[7] = long_sleeve5;
clothes[8] = skirt1;
clothes[9] = skirt2;
clothes[10] = skirt3;
clothes[11] = skirt4;
clothes[12] = dress1;
clothes[13] = dress2;
clothes[14] = dress3;
clothes[15] = shoes1;
clothes[16] = shoes2;
clothes[17] = shoes3;
clothes[18] = shorts1;
clothes[19] = shorts2;
clothes[20] = shorts3;
clothes[21] = shorts4;
clothes[22] = pants1;
clothes[23] = pants2;
clothes[24] = pants3;


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
    selectedBottoms = [];
    selectedTops = [];
    selectedDresses = [];
    selectedShoes = []; 

    //Pop off last value
    var val = values.pop();

    //If nothing is selected, the value of pop will be undefined.
    //If nothing is checked, use short-sleeve and shorts as template.
    if(val == undefined) {

        i = 0;

        //Loop through the clothes array.
        for(j = 0; j < clothes.length; j++) { 

            //If object in clothes array is equal to short-sleeve,
            //add object image to selected tops array.
            if(clothes[j].style == "short-sleeve") {
                selectedTops.push(clothes[j].img);
                topExists = true;
                i++;
            }
            //If object in clothes array is equal to shorts,
            //add object image to selected bottoms array.
            if(clothes[j].style == "shorts") {
                selectedBottoms.push(clothes[j].img);
                bottomExists = true;
                i++;
            }
        }
    }
    else {
        //While val is defined, loop through clothes array.
        while(val) {
            i = 0;
            for(j = 0; j < clothes.length; j++) { 

                //If clothes object's style is equal to the popped value,
                if(clothes[j].style === val) {

                    //then compare value to short-sleeve.
                    //If val is equal, push clothes object onto selected tops array.
                    if(val === 'short-sleeve') {
                        selectedTops.push(clothes[j].img);
                        topExists = true;
                        i++;
                    }
                    //then compare value to long-sleeve.
                    //If val is equal, push clothes object onto selected tops array.
                    if(val === 'long-sleeve') {
                        selectedTops.push(clothes[j].img);
                        topExists = true;
                        i++;
                    }
                    //then compare value to shorts.
                    //If val is equal, push clothes object onto selected bottoms array.
                    if(val === 'shorts') {
                        selectedBottoms.push(clothes[j].img);
                        bottomExists = true;
                        i++;
                    }
                    //then compare value to pants.
                    //If val is equal, push clothes object onto selected bottoms array.
                    if(val === 'pants') {
                        selectedBottoms.push(clothes[j].img);
                        bottomExists = true;
                        i++;
                    }
                    //then compare value to skirt.
                    //If val is equal, push clothes object onto selected bottoms array.
                    if(val === 'skirt') {
                        selectedBottoms.push(clothes[j].img);
                        bottomExists = true;
                        i++;
                    }
                    //then compare value to dress.
                    //If val is equal, push clothes object onto selected dresses array.
                    if(val === 'dress') {
                        selectedDresses.push(clothes[j].img);
                        dressExists = true;
                        i++;
                    }
                }
            } 
        //Pop off the next value that is selected.
        val = values.pop();
        }
    }
}



/**Get a random outfit from the selected clothes**/
function getOutfit() {
    
    //If object in clothes array is equal to shoes,
    //add object image to selected shoes array.
    i = 0;
    for(j = 0; j < clothes.length; j++) { 
        if(clothes[j].style == "shoes") {
            selectedShoes.push(clothes[j].img);
            i++;
        }
    }

    //Get random shoes.
    var num0 = Math.floor( Math.random() * selectedShoes.length );
    shoe = selectedShoes[ num0 ];
    
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

    //Display random shoes.
    var imgShoe = "";
    imgShoe = "images/" + shoe;
    document.getElementById("shoes").src = imgShoe;
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
