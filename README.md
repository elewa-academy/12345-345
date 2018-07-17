## 12345 -> 345

In this example I'm trying to do something that looks like simple subtraction. But it isn't since I've constrained myself to using only primitives, native methods and type conversion.

Since subtraction is off limits, I had to think of another way to go from 12345 to 345.  If I think of 12345 as a string, then it's no longer subtraction.  It's just removing the first two letters. 

So I take the strategy of mapping: 
1. Convert the argument to a more appropriate format (string)
2. Carry out the transformation 
3. Map the result back into the correct format (number)


### Index
* [Learning Objective](#learning-objective)
* [Study Snippet](#study-snippet)
* [Helpful Links](#helpful-links)
* [More Practice](https://elewa-academy.github.io/block-scope-let-vs-var)

___

## Learning Objective

Language Features:
* Number();
* String();
* "".replace(x, y);

[TOP](#index)

___
 
## Study Snippet

```js
// {number, 12345} -> {number, 345}
Number(String(12345).replace("12", ""));
  //  {number, 12345}
  String(12345);
  //  {string, "12345"}
  "12345".replace("12", "");
  //  {string, "345"}
  Number("345");
  //  {number, 345}
```

[TOP](#index)

___

## Helpful Links

* Number(x): [w3schools](https://www.w3schools.com/jsref/jsref_number.asp), [pitfalls](https://coderwall.com/p/5tlhmw/converting-strings-to-number-in-javascript-pitfalls)
* String(x): [w3schools](https://www.w3schools.com/jsref/jsref_string.asp)
* "".replace(x, y):  [alligator.io](https://alligator.io/js/string-replace/), [w3schools](https://www.w3schools.com/jsref/jsref_replace.asp)

Alternative methods: 
* [parseInt & parseFloat](https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/)
* [#.toString()](https://www.hostingadvice.com/how-to/javascript-int-string/)



[TOP](#index)



___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>
