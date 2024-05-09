## Functions
Function larni 3 xil usulda hosil qilish mumkin

- Function Declaration
- Function Expression
- Arrow Function Expression

**Function Declaration**

```javascript
function showMessage() {
    console.log("This is a function")
}

showMessage()
```

**Function Expression**

```javascript
let sayHi = function() {
    console.log("Hello!")
}

sayHi()
```

**Arrow Function Expression**

```javascript
let showMessage = () => { console.log("message") }

showMessage()
```


### Local and outer variable (o'zgaruvchilar)

**Local variable**
Function ichida e'lon qilingan o'zgaruvchilar faqat function ichida ishlata olamiz

```javascript
function Func() {
    let message = "This is a simple message"
    console.log(message)
}

Func()
```

**Outer variable**
Function tashqarisida e'lon qilingan o'zgaruvchilarni function ichida ishlatishimiz mumkin

```javascript
let message = "a simple message"
function Func() {
    console.log(message)
}

Func()
```