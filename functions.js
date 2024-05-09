/**
 * Function larni 3 xil usulda hosil qilish mumkin
 * - Function Declaration
 * - Function Expression
 * - Arrow Function Expression (ECMASCRIPT 6)
 */


// Function Declaration
function showMessage() {
    console.log("This is a function")
}

showMessage()


// Function Expression
let sayHi = function() {
    console.log("Hello!")
}

sayHi()

// Arrow Function Expression
let func = () => { return "This is arrow function expression" }


/**
 * Function ichida e'lon qilingan o'zgaruvchini faqat function ichida ishlata olamiz.
 */

function Func1() {
    let message = "This is a simple message"

    console.log(message)
}

/**
 * Function tashqarisidagi e'lon qilingan o'zgaruvchilarni function ichida ishlatishimiz mumkin
 */

let username = "myusername"

function showUsername() {
    console.log(username)
}