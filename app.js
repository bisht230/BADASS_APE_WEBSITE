//array of an objects
// id is the primary key
const typesOfApes=[   
  {  
      id:0,
      name:"Badass Ape #3129",
      link:"https://www.binance.com/en/nft/goods/detail?productId=31532591&isProduct=1",
      img:"image/img-1.jpg",
      price:"0.069 ETH ≈ $ 193.99"
  },
  {
    id:1,
    name:"Badass Ape #2948",
    link:"https://www.binance.com/en/nft/goods/detail?productId=31498407&isProduct=1",
    img:"image/img-4.jpg",
    price:"475 BUSD ≈ $ 474.81"
  },
  {
    id:2,
    name:"Badass Ape #38",
    link:"https://www.binance.com/en/nft/goods/detail?productId=31524375&isProduct=1",
    img:"image/img-3.jpg",
    price:"2.66 BNB ≈ $ 1,017.72"
  },
  {
    id:3,
    name:"Badass Ape #1302",
    link:"https://www.binance.com/en/nft/goods/detail?productId=31477662&isProduct=1",
    img:"image/img-2.jpg",
    price:"199 BNB ≈ $ 76,157.30"
  },
  {
    id:4,
    name:"Badass Ape #3294",
    link:"https://www.binance.com/en/nft/goods/detail?productId=31808824&isProduct=1",
    img:"image/img-5.jpg",
    price:"2 ETH ≈ $ 5,603.32"
  },
  {
    id:5,
    name:"Badass Ape #3239",
    link:"https://www.binance.com/en/nft/goods/detail?productId=31672888&isProduct=1",
    img:"image/img-6.jpg",
    price:"250 ETH ≈ $ 727,525.00"
  },
  {
    id:6,
    name:"Badass Ape #2018",
    link:"https://www.binance.com/en/nft/goods/detail?productId=31636801&isProduct=1",
    img:"image/img-7.jpg",
    price:"0.3 ETH ≈ $ 873.26"
  },
  {
    id:7,
    name:"Badass Ape #3182",
    link:"https://www.binance.com/en/nft/goods/detail?productId=31427797&isProduct=1",
    img:"image/img-8.jpg",
    price:"1.5 ETH ≈ $ 4,361.43"
  }
];
let currVal=0;
const cost=document.getElementById('cost');
const img=document.querySelector('.card-img-top');
const link=document.querySelector('.card-link');
const name=document.querySelector('.card-title');
const nextBtn=document.querySelector(".next-btn");
const prevBtn=document.querySelector(".prev-btn");
window.addEventListener('DOMContentLoaded',function(){
 showFunction(currVal);
});
function showFunction(ape){
const item=typesOfApes[ape];
name.textContent=item.name;
link.href=item.link;
img.src=item.img;
cost.textContent=item.price;
};
nextBtn.addEventListener('click',function(){
currVal+=1;
if(currVal>typesOfApes.length-1){
  currVal=0;
  showFunction(currVal);
}
else{
  showFunction(currVal);
}
});

prevBtn.addEventListener('click',function(){
  currVal-=1;
if(currVal<=0){
  currVal=0;
  showFunction(currVal);
}
else{
  showFunction(currVal);
}
});