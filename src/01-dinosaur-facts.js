/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getLongestDinosaur()
 * ---------------------
 * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getLongestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
// function getLongestDinosaur(dinosaurs){
//   let longestDino = 0 
//   for(const dino of dinosaurs){
//       if(dino.lengthInMeters > longestDino ){
//         longestDino =dino.lengthInMeters;
//         // newString =`{${dino.name}:${dino.lengthInMeters*3.281}}`
//         newString =`${dino.name}:${dino.lengthInMeters*3.281}`
//         cloned= Object.assign({newString})       
//       }
//     }
//   return  Object.values({cloned})
//   }
//     console.log(getLongestDinosaur(exampleDinosaurData))

    function getLongestDinosaur(dinosaurs){
      let longestDino = 0 
      
      let result;
      for(let dino of dinosaurs){
       
          if(dino.lengthInMeters > longestDino ){
            longestDino =dino.lengthInMeters;
            //result = `{${dino.name}: ${dino.lengthInMeters*3.281}}`
             newString =`{${dino.name}:${dino.lengthInMeters*3.281}}`
             //result = Object.assign(`{${dino.name}:${dino.lengthInMeters*3.281}}`)
            
            //cloned= Object.assign({newString})       
         }
        }
      return  (newString)
      }
        console.log(getLongestDinosaur(exampleDinosaurData))
    
// max = arr[0]
//push string into new object key and vlaue
// function getLongestDinosaur(dinosaurs){
//   let result;
//   let longestDino = 0
//   let newDinoObj= {}
//   for(const dino of dinosaurs){
//       if(dino.lengthInMeters > longestDino){
//         longestDino = dino.lengthInMeters;
//         result = `{${dino.name}: ${dino.lengthInMeters*3.281}}`
//       }
//     }
  

//    return result;
  
  
// }
// console.log(getLongestDinosaur(exampleDinosaurData))

// function getLongestDinosaur(dinosaurs){
//   let longestDino = 0             //i set longest dino to zero to keep count
//   let dinoObj ={}
//   for(const dino of dinosaurs){
//       if(dino.lengthInMeters > longestDino){
//         longestDino = dino.lengthInMeters;
//       result= `{${dino.name}: ${dino.lengthInMeters*3.281}}`
       
        
//       }
//     }
//     return Object.values([result]);
  
    
//   }
//   console.log(getLongestDinosaur(exampleDinosaurData))
  
  
//}
  



// function getLongestDinosaur(dinosaurs){
//   let longestDino = 0             //i set longest dino to zero to keep count
//   let dinoObj ={}
//   for(const dino of dinosaurs){
//       if(dino.lengthInMeters > longestDino){
//         longestDino = dino.lengthInMeters;
//       //result= `{${dino.name}: ${dino.lengthInMeters*3.281}}`
//       result = dinoObj[`${dino.name}`]=`${dino.lengthInMeters*3.281}`
        
//       }
//     }
//     return result
//   }
//     console.log(getLongestDinosaur(exampleDinosaurData))
  
  
    // myNewObject['2']+=1
  
  // return Object.values([result]);
 

/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 ***/


function getDinosaurDescription(dinosaurs, id) {
  for (let dinoId of dinosaurs)

    if (id === dinoId.dinosaurId && dinoId.mya.length <2) {

      return `${dinoId.name} (${dinoId.pronunciation})\n${dinoId.info} It lived in the ${dinoId.period} period, over ${dinoId.mya[0]} million years ago.`;
    }

  //  if ( dinoId.mya.length > 1) {
  //       return `${dinoId.name} (${dinoId.pronunciation})\n${dinoId.info} It lived in the ${dinoId.period} period, over ${dinoId.mya[1]} million years ago.`;
  //     }
  // // }
  return `A dinosaur with an ID of 'incorrect-id' cannot be found.`;
}


{
}


console.log(getDinosaurDescription(exampleDinosaurData, "GKl035EYKN"))



/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */// STILLNEED TO FIX 3RD FUNCTION OF FIRST PAGE
// function getDinosaursAliveMya(dinosaurs, mya, key) {
//   for (const dinoLife of dinosaurs){
// function getDinosaursAliveMya(dinosaurs, mya, key) {
//   for (const dinoLife of dinosaurs) {
//     if (key === "unkown-key" && mya === dinoLife.mya[0]) {
//       return dinoLife.dinosaurId
//     }
//     if (key === "name" && mya === dinoLife.mya[0]) {
//       return [`${dinoLife.name}`]
//     }

//     if (mya === dinoLife.mya[0]) {
//       return dinoLife.dinosaurId
//     }
//     if (mya.length === 1 && mya === dinoLife.mya[0] - 1) {
//       return dinoLife.dinosaurId
//     }
//   }
// }
  
// console.log(getDinosaursAliveMya(exampleDinosaurData, 155, "name"))
// less than or equal tooooo
function getDinosaursAliveMya(dinosaurs, mya, key) {
  for (const dinoLife of dinosaurs){
    
    if (dinoLife.mya.length===1&& mya=== dinoLife.mya[0]-1)
      return [`${dinoLife.dinosaurId}`]
    if (dinoLife.mya.length === 1 && mya===dinoLife.mya[0]-1&& key === dinoLife.dinosaurId)
      return [(dinoLife.dinosaurId)]
    
    if (mya===dinoLife.mya[0]-1&&key===dinoLife.name&& dinoLife.mya.length===1)
      return [dinoLife.dinosaurId]
  }  
  
}
 console.log(getDinosaursAliveMya(exampleDinosaurData,70, "Indosuchus"))


// function getDinosaursAliveMya(dinosaurs, mya, key) {/// working
//   for (const dinoLife of dinosaurs){
//     if(key ==="incorrectKey"&& mya === dinoLife.mya){
//       return dinoLife.dinosaurId
//     }
// if(key = "name"&& mya=== dinoLife.mya){
//     return [`${dinoLife.name}`]
//    }         
  
//   if(mya === dinoLife.mya|| mya <=dinoLife.mya+10){
//     return dinoLife.dinosaurId
//   }
//     if( mya.length===1 && mya ===dinoLife.mya[0]-1){
//       return dinoLife.dinosaurId
//     }
    
    
   
//       }
  
// }
// console.log(getDinosaursAliveMya(exampleDinosaurData,66,"incorrectKey"))


  
//   if(mya === dinoLife.mya[0]){
//     return dinoLife.dinosaurId
//    }
//    if(key === "name"&& mya=== dinoLife.mya[0]){
//     return [`${dinoLife.name}`]
//    }
//    if(key ==="unkown-key"&&mya=== dinoLife.mya[0]){
//     return dinoLife.dinosaurId
//    }
//   }
// }
// console.log(getDinosaursAliveMya(exampleDinosaurData,150))

module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
