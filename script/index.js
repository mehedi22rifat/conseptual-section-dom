
const button = document.getElementsByClassName('add-btn');
 for(const btn of button){
   btn.addEventListener('click',function(event){
      
    const playersName= event.target.parentNode.childNodes[1].innerText;

    const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;

    const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;
   //  console.log(playersName,price,category)
  
   // counst condition
    const firstCount = getConvertedValue('card');
    const secondCount =getConvertedValue('left');
     if(firstCount+1 > 6 || secondCount-1 < 0){
      alert('sorry ar hove na');
      return;
     }
     event.target.setAttribute("disabled",false);
     event.target.parentNode.style.backgroundColor ='gray';
   

    const SetNamePriceCetagor = document.getElementById('set-name-price-cetagory');

    const div = document.createElement('div');
    div.classList.add('flex');
    div.classList.add('justify-around');
    div.classList.add('text-slate-700');
    

    const p1 = document.createElement('p');
    p1.innerText= playersName;
    const p2 = document.createElement('p');
    p2.innerText = price;
    const p3 = document.createElement('p');
    p3.innerText = category;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    SetNamePriceCetagor.appendChild(div);

   //  budget update
   const budget = getConvertedValue('budget');
   const updateBudget = budget-parseInt(price);
   document.getElementById('budget').innerHTML =updateBudget;

   // card count update
   const cardCount =getConvertedValue('card') ;
   document.getElementById('card').innerText= cardCount+1;

   // left update
   const leftUpdate =getConvertedValue('left') ;
   document.getElementById('left').innerText= leftUpdate-1;

// total cost 

   undateTotalCost(price);
   undateGrandTotalCost();
  




   })
 }


//  discount
  function updateGrandTotal(status){
   const totalCost = getConvertedValue('total-cost');

    if(status === undefined){
        document.getElementById('grand-total').innerText = totalCost;
    }
    else{
      const inputValue = document.getElementById('input-value').value;
      if(inputValue === "love420"){
         const discounted = totalCost*20/100;
         const discoundtdPrice = totalCost-discounted;
         document.getElementById('grand-total').innerText =discoundtdPrice;
         document.getElementById('input-value').value ='';
      }else{
         alert('Please Enter a valed coupon code');
         document.getElementById('input-value').value ='';
      }
    }

  }


 //  grand total
  function undateGrandTotalCost(){
    const totalCost = getConvertedValue('total-cost');
    document.getElementById('grand-total').innerText =totalCost;
  }


//  total cost
 function undateTotalCost(value){
   const totalCost = getConvertedValue('total-cost');
   const sum = totalCost+parseInt(value);
   document.getElementById('total-cost').innerText = sum;

 }



 function getConvertedValue(id){
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
   return convertedPrice;
 }

 
