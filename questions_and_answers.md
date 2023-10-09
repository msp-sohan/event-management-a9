<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>javascript is case sensetive. therefore we decleard a variable greeting but dont set a value, then declear "greetign" with the value of empty  object, but dont in a variable. so  this will initially set on global object. so it dont give error and result is {}</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>sum function is called with two parameter. and function return sum of two parameter. but when is function called two paramete of One is number and other one is string so it can be sum, it will concatinating show the result will be string value.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>There declear a array name food with 4 element. bellow the array also declaring a object name info where favorite food propery get the 0 index element of food array. in this below favorite food property set a new value. but it will not changed the original food array. it will only update the info object favorite food property. so currect answer id A. </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Here is sayHi is callback function and it will receive a parametter. and then return with "Hi there". but whhen call the function not provide a paramiter. so that the function dont get parameter and return the value undefine.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>when used forEach method on nums array it give the all signgle element on num variable. then check if (num) num is true sum 1 with the intial value of count variable. by the way first element of the array is 0. which is falsy value. so count variable only get other three number. Each forEach it's incremented by 1, so that the last value is 3. 3 sum with 0 which is count initial value. so the result is 3.</i>

</p>
</details>
