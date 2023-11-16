var cartvalue=document.getElementById("cart-value");
var cartbutton=document.getElementById("cart");
var addbuttons=document.getElementsByClassName("button");
var items=[
    {
        name:"this was our pact",
        quantity: 0,
        dollars:7,
        cents: 49,
    },
    {
        name:"the famous five",
        quantity: 0,
        dollars:4,
        cents: 59,
        
    },
{
    name:"matilda",
    quantity: 0,
    dollars:6,
    cents:80,
},
{
    name:"harry poter",
    quantity: 0,
    dollars:7,
    cents: 29,
},
{
    name:"for young readers",
    quantity: 0,
    dollars:7,
    cents: 29
},
{
    name:"wimpy kid - DIY",
    quantity: 0,
    dollars:4,
    cents: 99,
},
{
    name:"dart- board",
    quantity: 0,
    dollars:17,
    cents: 49,
},
{
    name:"connect-four",
    quantity: 0,
    dollars:19,
    cents: 99,
},
{
    name:"jenga",
    quantity: 0,
    dollars:20,
    cents: 99,
},
{
    name:"monoplay",
    quantity: 0,
    dollars:19,
    cents: 49,
},
{
    name:"bookmarks",
    quantity: 0,
    dollars:12,
    cents: 49,
},
{
    name:"birthday card",
    quantity: 0,
    dollars:12,
    cents: 49,
},
{
    name:"stuffed toys",
    quantity: 0,
    dollars:15,
    cents: 90,
},
{
    name:"dream catcher drawing",
    quantity: 0,
    dollars:18,
    cents: 49,
},
];

function updatecart() {
let cart=0;
for(index=0;index<items.length;index++){
    cart=cart+items[index].quantity;
}
cartvalue.innerHTML=cart;
}
console.log(cartvalue)

for(let i=0; i<addbuttons.length;i++){
    addbuttons[i].onclick=()=>{
        items[i].quantity++;
        updatecart();
    };

}

var finaldollars=0;
var finalcents=0;
function updateprice(){
    let totalpriceincents=0;

    for(index=0; index < items.length; index++ ){
    //  totalpriceincents=
     totalpriceincents++
     items[index].quantity*(items[index].dollars*100+items[index].cents) ;

    }
    finaldollars=math.floor(totalpriceincents/100);
    finalcents=totalpriceincents%100;
}

cartbutton.onclick=()=>{
    updateprice();

    for(let index=0; index < items.length; index++){
        if(items[index].quantity !=0){
            console.log(
                "item name:"+
                items[index].name+
                "-quantity:"+
                items[index].quantity
            );
        }
    }
    console.log(
        "the total amount is" + finaldollars+ "$ and " + finalcents+ "cents"
    );
};