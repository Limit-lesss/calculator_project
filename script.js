let prints = document.getElementById('inner');
let onClicks = document.getElementsByTagName('td');
let plusMinus = true;
let count = 0;
let value1 = '';
let value2 = '';
let operation = '';
onClicks[0].addEventListener('click',function(){
    prints.innerText = '';
    value1 = '';
    value2 = '';
    operation = '';
}); 
onClicks[1].addEventListener('click',function(){             //  " +/- " operation add + or - at starting
    if(plusMinus){
        if(count == 0){
            if(prints.innerText.search('-') >= 0){
                prints.innerText = prints.innerText.replace('-' , '+');
            }else{
                prints.innerText = '+' + prints.innerText;
                count++;
            }
        }else{
            prints.innerText = prints.innerText.replace('-' , '+');
        }
        plusMinus = false;
    }
    else{
        prints.innerText = prints.innerText.replace('+' , '-');
        count = 0;
        plusMinus = true;
    }
});
onClicks[4].addEventListener('click',function(){     
    prints.innerText = prints.innerText + 7 ;
    if(operation == ''){
        value1 =  value1 + '7';
    }else{
        value2 = value2 + '7';
    }
});
onClicks[5].addEventListener('click',function(){
    prints.innerText = prints.innerText + 8  ;
    if(operation == ''){
        value1 = value1 + '8';
    }else{
        value2 = value2 + '8';
    }
});
onClicks[6].addEventListener('click',function(){
    prints.innerText = prints.innerText + 9 ;
    if(operation == ''){
        value1 =  value1 + '9';
    }else{
        value2 =  value2 + '9';
    }
});
onClicks[8].addEventListener('click',function(){
    prints.innerText = prints.innerText + 4 ;
    if(operation == ''){
        value1 =  value1 + '4';
    }else{
        value2 = value2 + '4';
    }
});
onClicks[9].addEventListener('click',function(){
    prints.innerText = prints.innerText + 5 ;
    if(operation == ''){
        value1 =  value1 + '5';
    }else{
        value2 = value2 + '5';
    }
});
onClicks[10].addEventListener('click',function(){
    prints.innerText = prints.innerText + 6 ;
    if(operation == ''){
        value1 = value1 + '6';
    }else{
        value2 = value2 + '6';
    }
});
onClicks[12].addEventListener('click',function(){
    prints.innerText = prints.innerText + 1 ;
    if(operation == ''){
        value1 =  value1 + '1';
    }else{
        value2 =  value2 + '1';
    }
});
onClicks[13].addEventListener('click',function(){
    prints.innerText = prints.innerText + 2 ;
    if(operation == ''){
        value1 = value1 + '2';
    }else{
        value2 = value2 + '2';
    }
});
onClicks[14].addEventListener('click',function(){
    prints.innerText = prints.innerText + 3 ;
    if(operation == ''){
        value1 = value1 + '3';
    }else{
        value2 = value2 + '3';
    }
});
onClicks[16].addEventListener('click',function(){
    prints.innerText = prints.innerText + 0 ;
    if(operation == ''){
        value1 = value1 + '0';
    }else{
        value2 = value2 + '0';
    }
});
onClicks[17].addEventListener('click',function(){
    prints.innerText = prints.innerText + '.' ;
    if(operation == ''){
        value1 = value1 + '.';
    }else{
        value2 = value2 + '.';
    }
});

onClicks[18].addEventListener('click',function(){                //  " = " operation
    if(operation == '/'){
        value2 = prints.innerText;
        let divide = Number(value1) / Number(value2);
        prints.innerText = divide.toFixed(2);
        value2 = '';
    }else{
        value2 = prints.innerText;
        prints.innerText = eval(value1 + operation + value2);   // imp 'eval()'
        value2 = '';
    }
});

onClicks[11].addEventListener('click',function(){               // " - " minus operation
    value1 = Number(prints.innerText);
    prints.innerText = '';
    operation = '-';
});
onClicks[15].addEventListener('click',function(){               // " + " plus operation
    value1 = Number(prints.innerText);
    prints.innerText = '';
    operation = '+';
});
onClicks[2].addEventListener('click',function(){               // " % " modulo operation
    value1 = Number(prints.innerText);
    prints.innerText = value1 / 100;
    operation = '%';
});
onClicks[3].addEventListener('click',function(){               // " / " division operation
    value1 = Number(prints.innerText);
    prints.innerText = '';
    operation = '/';
});
onClicks[7].addEventListener('click',function(){               // " * " multiply operation
    value1 = Number(prints.innerText);
    prints.innerText = '';
    operation = '*';
});