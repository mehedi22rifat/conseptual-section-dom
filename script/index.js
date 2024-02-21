
const cards= document.getElementsByClassName('card-select')
 for(const card of cards){
    card.addEventListener('click',function(){
      const kire =convertedValue('priceis');
      console.log(typeof kire)
    })
 }

 function convertedValue(id){
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
    return convertedPrice;
 }
