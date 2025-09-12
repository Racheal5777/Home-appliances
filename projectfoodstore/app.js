let container = document.querySelector(".cardWrapper")
let imgOne = "./images/potatoes.png"
let imgTwo = ""
let imgThree = ""
let imgFour = ""
let imgFive = ""
let imgSix = ""
let imgSeven = ""
let imgEight = ""
let imgNine = ""
let imgTen = ""

let foods =[
    {
        id:1,
        name: "yellow potatoes",
        old_price: 300.0,
        new_price: 254.0,
        discount: "-15%",
        img: imgOne

    },

    {
        id:2,
        name: "yellow cherry tomatoes",
        old_price: 20.0,
        new_price: 15.0,
        discount: "-25%",
        img: imgTwo
    },    
    {
        id:3,
        name: "Violet cauliflower",
        old_price: 100.0,
        new_price: 79.0,
        discount: "new",
        img: imgThree
    },   
    {
        id:4,
        name: "sorbet mango ice cream",
        old_price: 100.0,
        new_price: 79.0,
        discount: "-10%",
        img: imgFour
    },   
    {
        id:5,
        name: "Shiso leaves green",
        old_price: 20.0,
        new_price: 15.0,
        discount: "-15%",
        img: imgFive


    },    
    {
        id:6,
        name: "seedless white grape",
        old_price: 20.0,
        new_price: 15.0,
        discount: "-25%",
        img: imgSix
    },   
    {
        id:7,
        name: "Round Black Eggplants",
        old_price: "",
        new_price: 15.0,
        discount: "-25%",
        img: imgSeven
    },   
    {
        id:8,
        name: "Red Pithaya",
        old_price: 19.00,
        new_price: 20.00,
        discount: "new",
        img: imgEight
    } ,   
    {
        id:9,
        name: "Red Organic Onion",
        old_price: "",
        new_price: 50.00,
        discount: "new",
        img: imgNine
    },   
    {
        id:10,
        name: "Red cabbage",
        old_price: 50.00,
        new_price: 40.00,
        discount: "-25%",
        img: imgTen
    }    

];
// Sent from my iPhone
// steps to create any element from Javascript and send it to html

// step 1: create the element/tag

// let el = document.createElement ("h1")

// // setp 2: give the new element created a class name (Optional)

// el. classList.add (*newEl")

// // step 3: create the content to give the new element

// elContent = "this tag and content is created with JavaScript"

// // step 4: add the content to the new element created

// /1 el.innerHTML = elContent

// /I // steps 5: add the new element created to the html

// container.appendChild(el)


function createCard(food ){
    let card = document.createElement("div");

    card.classList.add("foodCard")
    cardContent =`
     <div class="imgCont">
               <div class="dis"> 
               <div> <span>${food.discount}</span></div>
               <div> <span>❤️</span></div>
               </div>
                <img src="${food.img}" alt="potatoes"/>
            </div>

            <h4>${food.name}</h4>
            <div class="tag">
                <span>$${food.new_price}00</span>
                <span>$${food.old_price}</span>
            </div>



    `;
    card.innerHTML = cardContent
    container.appendChild(card)
    

}

foods.map(function(food){
    return createCard(food)
})