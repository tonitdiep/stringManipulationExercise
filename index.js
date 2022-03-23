var commonChars = function(words) {

   let finalArray = [];
    let filterWordArray =  [...words[0].split('')]
    console.log(filterWordArray)
    filterWordArray.forEach(charString => {
        if(words.every(item => item.includes(charString))){
            finalArray.push(charString)
    
            words = words.map(x => x.replace(charString, ""))
                    // console.log("line11", words, finalArray, charString)
        }
    })
    return finalArray
    

}

// console.log(commonChars(words = ["bella","label","roller"]))
/*
Leetcode: find common characters

Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
*/

/**
my thoughts:
words split them 
find duplicate
join 
return the array of only all characters that shows up in all strings within words (inlucding duplicates)
**/