


 let number1 = 0;
  let number2 = 0;
  let result=0;

  function getNumbersFromTextbox() {
   number1=parseInt(document.getElementById('firstnumber').value);
   number2=parseInt(document.getElementById('secondnumber').value);
  }

  function emptyBox() {
    document.getElementById('firstnumber').value='';
    document.getElementById('secondnumber').value='';
  }
  
  function add(){
   getNumbersFromTextbox();
   result=number1+number2
   document.getElementById('result').innerHTML=result;
   emptyBox();
  }

 function minus(){
  getNumbersFromTextbox();
  result=number1-number2
  document.getElementById('result').innerHTML=result;
  emptyBox();
 }
 
 function multiple(){
  getNumbersFromTextbox();
  result=number1*number2
  document.getElementById('result').innerHTML=result;
  emptyBox();
 }
 
 function divide(){
  getNumbersFromTextbox();
  result=number1/number2
  document.getElementById('result').innerHTML=result; 
  emptyBox();
 }

 function showValue(e) {
    console.log(e)
 }
