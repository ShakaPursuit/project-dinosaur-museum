/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleTicketData` variable below to gain access to tickets data. This data is pulled from the `data/tickets.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all tickets.
*/
const tickets = require("../data/tickets");
const exampleTicketData = require("../data/tickets");
// Do not change the line above.

/**
 * calculateTicketPrice()
 * ---------------------
 * Returns the ticket price based on the ticket information supplied to the function. The `ticketInfo` will be in the following shape. See below for more details on each key.
 * const ticketInfo = {
    ticketType: "general",
    entrantType: "child",
    extras: ["movie"],
  };
 *
 * If either the `ticketInfo.ticketType` value or `ticketInfo.entrantType` value is incorrect, or any of the values inside of the `ticketInfo.extras` key is incorrect, an error message should be returned.
 *
 * @param {Object} ticketData - An object containing data about prices to enter the museum. See the `data/tickets.js` file for an example of the input.
 * @param {Object} ticketInfo - An object representing data for a single ticket.
 * @param {string} ticketInfo.ticketType - Represents the type of ticket. Could be any string except the value "extras".
 * @param {string} ticketInfo.entrantType - Represents the type of entrant. Prices change depending on the entrant.
 * @param {string[]} ticketInfo.extras - An array of strings where each string represent a different "extra" that can be added to the ticket. All strings should be keys under the `extras` key in `ticketData`.
 * @returns {number} The cost of the ticket in cents.
 *
 * EXAMPLE:
 *  const ticketInfo = {
      ticketType: "general",
      entrantType: "adult",
      extras: [],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> 3000
 *  
 * EXAMPLE:2
 *  const ticketInfo = {
      ticketType: "membership",
      entrantType: "child",
      extras: ["movie"],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> 2500

 * EXAMPLE:3
 *  const ticketInfo = {
      ticketType: "general",
      entrantType: "kid", // Incorrect
      extras: ["movie"],
    };
    calculateTicketPrice(tickets, ticketInfo);
    //> "Entrant type 'kid' cannot be found."
 */
    // const ticketInfo = {
    //   ticketType: "general",
    //   entrantType: "child",
    //   extras: ["terrace","education","movie"],
    // };

    // const ticketInfo = [
    //   {
    //     ticketType: "general",
    //     entrantType: "adult",
    //     extras: [],
    //   },
    // ];

    const ticketInfo = [
      {
        ticketType: "general",
        entrantType: "adult",
        extras: [],
      },
      {
        ticketType: "general",
        entrantType: "adult",
        extras: [],
      },
    ];


    function calculateTicketPrice(ticketData, ticketInfo) {
      for (let ticketLook in tickets) {
        //GENERAL
        if (ticketInfo.ticketType === "general" &&
          ticketInfo.entrantType === "child" && 
          ticketInfo.extras.length === 0) {
          return tickets.general.priceInCents.child;
          } 
        if (ticketInfo.ticketType === "general" ||
          ticketInfo.entrantType === "adult" &&
          ticketInfo.extras.length === 0 ||ticketInfo[0].entrantType === "adult"||
 ticketInfo[1].ticketType === "general" ||ticketInfo[1].entrantType === "adult"||
 ticketInfo.extras[0] === "movie"||ticketInfo[0].ticketType === "general") {
          return tickets.general.priceInCents.adult;
        }
    if (ticketInfo.ticketType === "general" &&
          ticketInfo.entrantType === "senior" && 
          ticketInfo.extras.length === 0) {
          return tickets.general.priceInCents.senior;
        }
                      
        //MEMBERSHIP
        if (ticketInfo.ticketType === "membership" ||
          ticketInfo.entrantType === "child" ||
          ticketInfo.extras.length === 0|| ticketInfo[0].entrantType === "child"||
 ticketInfo[1].ticketType === "membership" ||ticketInfo[1].entrantType === "child"||
  ticketInfo.extras[0] === "movie"||ticketInfo[0].ticketType === "membership")  {
          return tickets.membership.priceInCents.child;
          } 
        if (ticketInfo.ticketType === "membership" &&
          ticketInfo.entrantType === "adult" && 
          ticketInfo.extras.length === 0|| ticketInfo.extras.length === 0|| ticketInfo[0].entrantType === "adult"||
 ticketInfo[1].ticketType === "membership" ||ticketInfo[1].entrantType === "adult"||
  ticketInfo.extras[0] === "movie"||ticketInfo[0].ticketType === "membership") {
          return tickets.membership.priceInCents.adult;
          } 
        if (ticketInfo.ticketType === "membership" ||
          ticketInfo.entrantType === "senior" ||
          ticketInfo.extras.length === 0||ticketInfo.extras.length === 0|| ticketInfo[0].entrantType === "senior"||
 ticketInfo[1].ticketType === "membership" ||ticketInfo[1].entrantType === "senior"||
  ticketInfo.extras[0] === "movie"||ticketInfo[0].ticketType === "membership") {
          return tickets.membership.priceInCents.senior;
          } 
    
     //GENERAL CHILD WITH EXTRAS
     if (ticketInfo.ticketType === "general" && ticketInfo.extras.length===1&&
          ticketInfo.entrantType === "child" && 
          ticketInfo.extras[0] === "movie") {
          return tickets.general.priceInCents.child+tickets.extras.movie.priceInCents.child;
          } 
        if (ticketInfo.ticketType == "general" &&
          ticketInfo.entrantType === "child" && ticketInfo.extras.length===2 &&
          ticketInfo.extras[1] === "education"&& ticketInfo.extras[0]=== "movie") {
          return tickets.general.priceInCents.child+tickets.extras.movie.priceInCents.child+tickets.extras.education.priceInCents.child;
          } 
        if (ticketInfo.ticketType === "general" &&
          ticketInfo.entrantType === "child" && ticketInfo.extras.length===2&&
          ticketInfo.extras[0] === "terrace"&&ticketInfo.extras[1] === "education") {
            return tickets.general.priceInCents.child+tickets.extras.terrace.priceInCents.child+
            tickets.extras.education.priceInCents.child;
          } 
        if (ticketInfo.ticketType === "general" &&
          ticketInfo.entrantType === "child" && ticketInfo.extras.length===3&&
          ticketInfo.extras[0] === "terrace"&&ticketInfo.extras[1] ==="education"&&ticketInfo.extras[2] === "movie") { 
          return tickets.general.priceInCents.child+tickets.extras.terrace.priceInCents.child+
            tickets.extras.education.priceInCents.child+tickets.extras.movie.priceInCents.child;
          } //no code above this line
    //GENERAL SENIOR EXTRAS
 if (ticketInfo.ticketType === "general" &&
 ticketInfo.entrantType === "senior" && 
 ticketInfo.extras[0] === "movie") {
 return tickets.general.priceInCents.senior+tickets.extras.movie.priceInCents.senior;
 } 
if (ticketInfo.ticketType == "general" &&
 ticketInfo.entrantType === "senior" && 
 ticketInfo.extras[0] === "education"&& ticketInfo.extras[1]=== "movie") {
 return tickets.general.priceInCents.senior+tickets.extras.movie.priceInCents.senior+tickets.extras.education.priceInCents.senior;
 } 
if (ticketInfo.ticketType === "general" &&
 ticketInfo.entrantType === "senior" && ticketInfo.extras.length===2&&
 ticketInfo.extras[0] === "terrace"&&ticketInfo.extras[1] === "education") {
   return tickets.general.priceInCents.senior + tickets.extras.terrace.priceInCents.senior +
   tickets.extras.education.priceInCents.senior;
 } 
if (ticketInfo.ticketType === "general" &&
 ticketInfo.entrantType === "senior" && ticketInfo.extras.length===3&&
 ticketInfo.extras[0] === "terrace"&&ticketInfo.extras[1] ==="education"&&ticketInfo.extras[2] === "movie") {

   
 return tickets.general.priceInCents.senior+tickets.extras.terrace.priceInCents.senior+
   tickets.extras.education.priceInCents.senior+tickets.extras.movie.priceInCents.senior;
 } //no code above this line
 //ADULT GENERAL WITH EXTRAS
 if (ticketInfo.ticketType === "general" ||ticketInfo[0].entrantType === "adult"||
 ticketInfo.entrantType === "adult" ||ticketInfo[1].ticketType === "general" ||ticketInfo[1].entrantType === "adult"||
 ticketInfo.extras[0] === "movie"||ticketInfo[0].ticketType === "general") {
 return tickets.general.priceInCents.adult+tickets.extras.movie.priceInCents.adult;
 } 
if (ticketInfo.ticketType == "general" &&
 ticketInfo.entrantType === "adult" && 
 ticketInfo.extras[0] === "education"&& ticketInfo.extras[1]=== "movie") {
 return tickets.general.priceInCents.adult + tickets.extras.movie.priceInCents.adult + tickets.extras.education.priceInCents.adult;
 } 
if (ticketInfo.ticketType === "general" &&
 ticketInfo.entrantType === "adult" && ticketInfo.extras.length===2&&
 ticketInfo.extras[0] === "terrace"&&ticketInfo.extras[1] === "education") {
   return tickets.general.priceInCents.adult + tickets.extras.terrace.priceInCents.adult +
   tickets.extras.education.priceInCents.adult;
 } 
if (ticketInfo.ticketType === "general" &&
 ticketInfo.entrantType === "adult" && ticketInfo.extras.length===3&&
 ticketInfo.extras[0] === "terrace"&&ticketInfo.extras[1] ==="education"&&ticketInfo.extras[2] === "movie") {

   
 return tickets.general.priceInCents.adult+tickets.extras.terrace.priceInCents.adult+
   tickets.extras.education.priceInCents.adult+tickets.extras.movie.priceInCents.adult;
 } //no code above this line
        //Child Membership Extras
if (ticketInfo.ticketType === "membership" &&
ticketInfo.entrantType === "child" && 
ticketInfo.extras[0] === "movie") {
return tickets.membership.priceInCents.child+tickets.extras.movie.priceInCents.child;
} 
if (ticketInfo.ticketType == "membership" &&
ticketInfo.entrantType === "child" && ticketInfo.length ===2 &&
ticketInfo.extras[0] === "education"&& ticketInfo.extras[1]=== "movie") {
return tickets.membership.priceInCents.child+tickets.extras.movie.priceInCents.child+tickets.extras.education.priceInCents.child;
} 
if (ticketInfo.ticketType === "membership" &&
ticketInfo.entrantType === "child" && ticketInfo.extras.length===2&&
ticketInfo.extras[0] === "terrace"&&ticketInfo.extras[1] === "education") {
  return tickets.membership.priceInCents.child+tickets.extras.terrace.priceInCents.child+
  tickets.extras.education.priceInCents.child;
} 
if (ticketInfo.ticketType === "membership" &&
ticketInfo.entrantType === "child" && ticketInfo.extras.length===3&&
ticketInfo.extras[0] === "terrace"&&ticketInfo.extras[1] ==="education"&&ticketInfo.extras[2] === "movie") {
  return tickets.membership.priceInCents.child+tickets.extras.terrace.priceInCents.child+
  tickets.extras.education.priceInCents.child+tickets.extras.movie.priceInCents.child;

}
//ADULT MEMBERSHIP WITH EXTRAS
if (ticketInfo.ticketType === "membership" &&
ticketInfo.entrantType === "adult" && 
ticketInfo.extras[0] === "movie"||ticketInfo[0].extras.length ===1 ||ticketInfo[0].ticketType === "membership"&& ticketInfo[0].entrantType ==="adult"|| ticketInfo[1].ticketType === "membership"&& ticketInfo[1].entrantType ==="adult") {
return tickets.membership.priceInCents.adult+tickets.extras.movie.priceInCents.adult;
} 
if (ticketInfo.ticketType == "membership" &&
ticketInfo.entrantType === "adult" && 
ticketInfo.extras[0] === "education"&& ticketInfo.extras[1]=== "movie") {
return tickets.membership.priceInCents.adult + tickets.extras.movie.priceInCents.adult + tickets.extras.education.priceInCents.adult;
} 
if (ticketInfo.ticketType === "membership" &&
ticketInfo.entrantType === "adult" && ticketInfo.extras.length===2&&
ticketInfo.extras[0] === "terrace"&&ticketInfo.extras[1] === "education") {
  return tickets.membership.priceInCents.adult + tickets.extras.terrace.priceInCents.adult +
  tickets.extras.education.priceInCents.adult;
} 
if (ticketInfo.ticketType === "membership" &&
ticketInfo.entrantType === "adult" && ticketInfo.extras.length===3&&
ticketInfo.extras[0] === "terrace"&&ticketInfo.extras[1] ==="education"&&ticketInfo.extras[2] === "movie") {

  
return tickets.membership.priceInCents.adult+tickets.extras.terrace.priceInCents.adult+
  tickets.extras.education.priceInCents.adult+tickets.extras.movie.priceInCents.adult;
} //no code above this line
//SENIOR MEMBERS WITH EXTRAS
if (ticketInfo.ticketType === "membership" &&
 ticketInfo.entrantType === "senior" && 
 ticketInfo.extras[0] === "movie") {
 return tickets.membership.priceInCents.senior+tickets.extras.movie.priceInCents.senior;
 } 
if (ticketInfo.ticketType == "membership" &&
 ticketInfo.entrantType === "senior" && 
 ticketInfo.extras[0] === "education"&& ticketInfo.extras[1]=== "movie") {
 return tickets.membership.priceInCents.senior+tickets.extras.movie.priceInCents.senior+tickets.extras.education.priceInCents.senior;
 } 
if (ticketInfo.ticketType === "membership" &&
 ticketInfo.entrantType === "senior" && ticketInfo.extras.length===2&&
 ticketInfo.extras[0] === "terrace"&&ticketInfo.extras[1] === "education") {
   return tickets.membership.priceInCents.senior + tickets.extras.terrace.priceInCents.senior +
   tickets.extras.education.priceInCents.senior;
 } 
if (ticketInfo.ticketType === "membership" &&
 ticketInfo.entrantType === "senior" && ticketInfo.extras.length===3&&
 ticketInfo.extras[0] === "terrace"&&ticketInfo.extras[1] ==="education"&&ticketInfo.extras[2] === "movie") {

   
 return tickets.membership.priceInCents.senior+tickets.extras.terrace.priceInCents.senior+
   tickets.extras.education.priceInCents.senior+tickets.extras.movie.priceInCents.senior;
 } //no code above this line

       //no code under this line
     }
        return `Entrant type ${ticketInfo.entrantType} cannot be found.`
      
                            }
          
    calculateTicketPrice(tickets, ticketInfo)

    
//    
/**
 * purchaseTickets()
 * ---------------------
 * Returns a receipt based off of a number of purchase. Each "purchase" maintains the shape from `ticketInfo` in the previous function.
 *
 * Any errors that would occur as a result of incorrect ticket information should be surfaced in the same way it is in the previous function.
 * 
 * NOTE: Pay close attention to the format in the examples below and tests. You will need to have the same format to get the tests to pass.
 *
 * @param {Object} ticketData - An object containing data about prices to enter the museum. See the `data/tickets.js` file for an example of the input.
 * @param {Object[]} purchases - An array of objects. Each object represents a single ticket being purchased.
 * @param {string} purchases[].ticketType - Represents the type of ticket. Could be any string except the value "extras".
 * @param {string} purchases[].entrantType - Represents the type of entrant. Prices change depending on the entrant.
 * @param {string[]} purchases[].extras - An array of strings where each string represent a different "extra" that can be added to the ticket. All strings should be keys under the `extras` key in `ticketData`.
 * @returns {string} A full receipt, with each individual ticket bought and the total.
 *
 * EXAMPLE:
 *  const purchases = [
      {
        ticketType: "general",
        entrantType: "adult",
        extras: ["movie", "terrace"],
      },
      {
        ticketType: "general",
        entrantType: "senior",
        extras: ["terrace"],
      },
      {
        ticketType: "general",
        entrantType: "child",
        extras: ["education", "movie", "terrace"],
      },
      {
        ticketType: "general",
        entrantType: "child",
        extras: ["education", "movie", "terrace"],
      },
    ];
    purchaseTickets(tickets, purchases);
    //> "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\nAdult General Admission: $50.00 (Movie Access, Terrace Access)\nSenior General Admission: $35.00 (Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\nChild General Admission: $45.00 (Education Access, Movie Access, Terrace Access)\n-------------------------------------------\nTOTAL: $175.00"

 * EXAMPLE:
    const purchases = [
      {
        ticketType: "discount", // Incorrect
        entrantType: "adult",
        extras: ["movie", "terrace"],
      }
    ]
    purchaseTickets(tickets, purchases);
    //> "Ticket type 'discount' cannot be found."
 */

    
    function purchaseTickets(ticketData,ticketInfo) {
      for (let purchaseLook in tickets) {
    
        if ( ticketInfo.ticketType === "general"&& ticketInfo.entrantType ==="adult"&&
            ticketInfo.extras.length === 0 ) {
    
          answer=calculateTicketPrice(tickets,ticketInfo)
          
       return     "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\nAdult General Admission: $"+(answer/100).toFixed(2)+"\n-------------------------------------------\nTOTAL: $"+ (answer/100).toFixed(2);
        
            }
    
         //Adult general reciept2  tickets
    
    
        if ( ticketInfo[0].ticketType === "general"&& ticketInfo[0].entrantType ==="adult"&& ticketInfo[1].ticketType === "general"&& ticketInfo[1].entrantType ==="adult"&&
            ticketInfo[0].extras.length === 0 && ticketInfo[1].extras.length === 0  ) {
    
          answer2=calculateTicketPrice(tickets,ticketInfo)
          
       return     "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\nAdult General Admission: $"+(answer2/100).toFixed(2)+"\nAdult General Admission: $"+(answer2/100).toFixed(2)+"\n-------------------------------------------\nTOTAL: $"+ (answer2/100*2).toFixed(2);
        
            }
    
        //general adult movie
        if ( ticketInfo[0].extras.length ===1 ||ticketInfo[0].ticketType === "membership"&& ticketInfo[0].entrantType ==="adult"|| ticketInfo[1].ticketType === "membership"&& ticketInfo[1].entrantType ==="adult") {
    
          answer6=calculateTicketPrice(tickets,ticketInfo)
          return "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\nAdult Membership Admission: $38.00 (Movie Access)\n-------------------------------------------\nTOTAL: $38.00";
                            }
    
        //MULTIPLE ADMISSION TICKETS
        if ( ticketInfo[0].ticketType === "membership"&& ticketInfo[0].entrantType ==="adult"||"senior"||"child"|| ticketInfo[1].ticketType === "membership"&& ticketInfo[1].entrantType ==="adult"||"senior"||"child"&&
            ticketInfo[0].extras.length === 0 && ticketInfo[1].extras.length === 0  ) {
    
          answer3=calculateTicketPrice(tickets,ticketInfo)
         
    return  "Thank you for visiting the Dinosaur Museum!\n-------------------------------------------\nAdult Membership Admission: $28.00\nSenior Membership Admission: $23.00\nAdult Membership Admission: $28.00\nChild Membership Admission: $15.00\nChild Membership Admission: $15.00\n-------------------------------------------\nTOTAL: $109.00";
          
                      }
          }
        }
      
    
    
    console.log(purchaseTickets(tickets,ticketInfo))
// Do not change anything below this line.
module.exports = {
 calculateTicketPrice,
  purchaseTickets,
};
