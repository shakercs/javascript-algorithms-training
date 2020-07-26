// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
    // Only change code below this line
    for (var i = 0; i < contacts.length; i++) {

        // console.log(contacts[i].firstName, name)
        if (contacts[i].firstName === name) {
            // if (contacts[i][prop]) {
            //     return contacts[i][prop];
            // } else {
            //     return "no such properaty"
            // }
            return contacts[i][prop] || "no such properaty";
        }

    }
    return "No such contact";
    // Only change code above this line
}

console.log(lookUpProfile("Bob", "number"));
