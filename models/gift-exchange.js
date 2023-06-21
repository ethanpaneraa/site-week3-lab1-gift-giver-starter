const errors = require("../utils/erros"); 

class GiftExchange {
    static pairs(names) {
        let unpairedNames = names;
        let pairedNames = [];

        if ((names.length % 2) === 0) {
            let numPairs = names.length / 2;
            for (let i = 0; i < numPairs; i++) {
                //initialize tuple
                let tuple = [];
                //run for loop for each pair
                for (let j = 0; j < 2; j++) {
                    // pick index to pair
                    let index = Math.floor((Math.random() * names.length));
                    //add name to tuple before removing from unpaired names
                    tuple.push(unpairedNames[index]);
                    unpairedNames.splice(index, 1); //remove it so Math.random does
                }
                pairedNames.push(tuple);
            }
            //return paired list
            return pairedNames

        }  else {
            throw new BadRequestError('Pairings can\'t have a uneven number of users') // Express will catch this on its own.
        }
    }

    static traditional(names) {
        // shuffle the names array
        let currentIdx = names.length - 1
       
        while (currentIdx > 0) {
           // pick an element
           const randomIdx = Math.floor(Math.random() * currentIdx)
           // swap it with current name
           const temp = names[currentIdx]
           names[currentIdx] = names[randomIdx]
           names[randomIdx] = temp
       
           currentIdx -= 1
        }
       
        // create ordered pairings
        const pairings = []
       
        for (let i = 0; i < names.length; i++) {
           const giver = names[i]
           const receiver = i === names.length - 1 ? names[0] : names[i + 1]
           pairings.push(`${giver} is giving a gift to ${receiver}`)
        }
       
        return pairings
       }
}

const names = ["Amy", "Barbara", "Caroline", "Diane", "Elizabeth", "Fatima", "Grace", "Hannah"]
console.log(GiftExchange.pairs(names)); 






module.exports = GiftExchange;