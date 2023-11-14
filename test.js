/*Schreibe eine Funktion, welche US-Postleitzahlen überprüft. Als Eingabe werden Strings akzeptiert und es wird ein Boolean zurück gegeben. Jede Postleitzahl besteht aus fünf Ziffern und einem optionalen Separator (Leerzeichen, Bindestrich, Unterstrich) als drittes Zeichen. Die Funktion soll die eingegebenen Postleitzahlen überprüfen und entsprechend true/false zurück geben.

Beispiele für gültige Postleitzahlen:

* 00000
* 12345
* 67-890
* 00 111
* 66_666

Folgende Postleitzahlen sind ungültig:

* a1-234
* 12.345
* 7890
* 111-11*/


/*function prufen( message )
 {
    test =false;

        let strich1=" ";
        let strich2="-";
        let strich3="_";
let summe=0;
    if (message.length===6)
        {

       for (let i = 0; i < 6; i++) {
    
        
    if(summe<2) 
         {
            if(message[i]===strich1 || message[i]===strich2 || message[i]===strich3)
            {
                test=true;
                summe++;

            }
         }
         else{
            return test;
         }
         

        }
}
return test;
    }

    let a =prufen('501586');

    console.log(a);
    
/*
    function prufen( message )
    {       
        if(message.length ===6)
        {
            for(let i=0;i<6;i++)
            {
               if(message[i]===[^0-9]) 
            }

        }


    }
    */
const validator = code => !! +(code[4] && '1.' + code.slice(0, 2) + code.slice(-3)) && ['', ...' -_'].includes(code.slice(2, - 3));



let a =validator('5015ab');
let b =validator('501511');
console.log(b);


