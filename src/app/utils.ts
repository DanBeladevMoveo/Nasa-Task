// export const isValidID = (id: string) => {
//     if(id && id.trim() !== '' && id.length === 9){
//     let sumID = 0;
//     for (let i = 0; i < 9; i++) {
//         let digit = parseInt(id[i])
//         if (i % 2 === 1) {
//             digit *= 2;
//             if (digit > 9) {
//                 digit = parseInt((digit / 10).toFixed()) + digit % 10
//             }
//         }
//         sumID += digit;
//     }
//     return sumID % 10 !== 0;
// }

// else{
//     return false;
// }
// }


export const isValidID = (id: string) => {
let idi = id.trim();
if (idi.length > 9 || idi.length < 5 || isNaN(Number.parseInt(idi))) return false;

// Pad string with zeros up to 9 digits
  idi = idi.length < 9 ? ("00000000" + idi).slice(-9) : idi;

  return Array
        .from(idi, Number)
          .reduce((counter, digit, i) => {
            const step = digit * ((i % 2) + 1);
            return counter + (step > 9 ? step - 9 : step);
        }) % 10 === 0;
    }

    export const print = (arr: string[]) =>{
arr.map(function(e) {
    console.log(e + " is " + (isValidID(e) ? "a valid" : "an invalid") + " Israeli ID");
});    
}

    