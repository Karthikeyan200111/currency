let from=document.querySelector("#Fromcountry");

let to =document.querySelector("#Tocountry");

let btn=document.querySelector(".click");
let typedValue=document.querySelector(".typed");


fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displayDropDown(res));

  
function displayDropDown(res){

    let currencies=Object.entries(res);

    for(let i=0;i<=currencies.length-1;i++){


        let options=`<option value="${currencies[i][0]}">${currencies[i][0]}</option>`
        from.innerHTML+=options;
        to.innerHTML+=options;
    }

}



btn.addEventListener("click",()=>{
let input1=from.value;
let input2=to.value;
let newInput=typedValue.value;


if(input1===input2){

    alert("choose different countries");


}else{


    showoutput(input1,input2,newInput);
}


});


function showoutput(input1,input2,newInput){

let res=document.querySelector(".result");
const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${newInput}&from=${input1}&to=${input2}`)
  .then(resp => resp.json())
  .then((data) => {
        
    
    res.value=Object.values(data.rates)[0];


  });
}
