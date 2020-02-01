var equ='';


$(document).ready(function(){
   $('.screen').html('0');
  $('.1').click(function(){
  
    if(equ.length>10)
      equ+='';
    else  
      equ+='1';
    
    $('.screen').html(equ);
  });
 
  $('.btn0').click(function(){
   
    if(equ.length>10)
      equ+='';
    else  
      equ+='0';
    $('.screen').html(equ);
  });
  $('.2').click(function(){
   
    if(equ.length>10)
      equ+='';
    else  
      equ+='2';
    $('.screen').html(equ);
  });
  
  $('.3').click(function(){
   
    if(equ.length>10)
      equ+='';
    else  
      equ+='3';
    $('.screen').html(equ);
  });
  
  $('.4').click(function(){
   
    if(equ.length>10)
      equ+='';
    else  
      equ+='4';
    $('.screen').html(equ);
  });
  
  $('.5').click(function(){
   
    if(equ.length>10)
      equ+='';
    else  
      equ+='5';
    $('.screen').html(equ);
  });
  
  $('.6').click(function(){
  
    if(equ.length>10)
      equ+='';
    else  
      equ+='6';
    $('.screen').html(equ);
  });
  
  $('.7').click(function(){
  
    if(equ.length>10)
      equ+='';
    else  
      equ+='7';
    $('.screen').html(equ);
  });
  
  $('.8').click(function(){
  
    if(equ.length>10)
      equ+='';
    else  
      equ+='8';
    $('.screen').html(equ);
  });
  
  $('.9').click(function(){
   
    if(equ.length>10)
      equ+='';
    else  
      equ+='9';
    $('.screen').html(equ);
  });
  
  $('.mult').click(function(){
  
    if(equ.length>9||equ[equ.length-1]==='*')
      equ+='';
    else  
      
      equ+='*';
    $('.screen').html(equ);
  });
  
  $('.divi').click(function(){
  
    if(equ.length>9||equ[equ.length-1]==='/')
      equ+='';
    else  
      equ+='/';
    $('.screen').html(equ);
  });
  
  $('.min').click(function(){
   
    if(equ.length>9||equ[equ.length-1]==='-')
      equ+='';
    else  
      equ+='-';
    $('.screen').html(equ);
  });
  
  $('.plus').click(function(){
  
    if(equ.length>9||equ[equ.length-1]==='+')
      equ+='';
    else  
      equ+='+';
    $('.screen').html(equ);
  });
  
  $('.point').click(function(){
  
    if(equ.length>10||equ[equ.length-1]==='.')
      equ+='';
    else  
      equ+='.';
    $('.screen').html(equ);
  });
  
  $('.CE').click(function(){
    
    equ=equ.slice(0,-1);
    if(equ.length>0)
     $('.screen').html(equ);
    else
      $('.screen').html('0');
  });
  
  $('.equal').click(function(){
    equ=eval(equ);
   $('.screen').html(equ);
  });
  $('.AC').click(function(){
    equ='';
   $('.screen').html('0');
  });
  
    $('.OFF').click(function(){
    equ='';
   $('.screen').html(equ);
      
  });
  
});