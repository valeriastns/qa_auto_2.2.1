 ## Assignment operators 
    In JavaScript are operators that allow you to assign values to variables,
    as well as perform various operations on those variables in a single expression.
 
 ### Core Assignment Operators:

    = — Simple assignment (the main operator)
    += — Addition assignment
    -= — Subtraction assignment
    *= — Multiplication assignment
    /= — Division assignment
    %= — Remainder (modulo) assignment

#### Example using only the core assignment operators:

```let a = 10;
    a += 5;  // a is now 15
    a -= 2;  // a is now 13
    a *= 2;  // a is now 26
    a /= 4;  // a is now 6.5
    a %= 3;  // a is now 0.5
```



#### JavaScript: Increment and decrement operators.

  *In JavaScript, increment and decrement are unary operators used to increase or decrease a variable's value by 1.*

**Increment (++):**

The increment operator adds 1 to the value of a variable.
Post-increment (x++): The value is used first, then incremented.
Pre-increment (++x): The value is incremented first, then used.

*Examples:*

1. Post-increment:
```javascript
let x = 5;
console.log(x++);  // Output: 5 (value is used first, then incremented)
console.log(x);    // Output: 6 (value after increment)
```

2. Pre-increment:
```javascript
let y = 5;
console.log(++y);  // Output: 6 (value is incremented first, then used)
console.log(y);    // Output: 6 (value after increment)
```

**Decrement (--):**
The decrement operator subtracts 1 from the value of a variable.
Post-decrement (x--): The value is used first, then decremented.
Pre-decrement (--x): The value is decremented first, then used.

