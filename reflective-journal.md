CLASS 01 - The 2026 Web Ecosystem

THEORY

QUESTION 01

![diagram](images/class%2001%20dom.jpeg)

-As a WEB DEVELOPER, understanding how a browser takes HTML and turn it to what we see on screen from DOM to paint helps developer build faster websites, helps identify performance problem, know how rendering works help optimize user experience when a user opens a website, the broowser does not immediately display the page it first read the html document and then convert it into DOM Tree which represent all the element on the page. the browser then combine the DOM and CSS to create a render Tree containing only visible elements. then layout follows where size and position of eaxh element is calculated. finally the paint stage is where draws text, images, colors, and other visible element pn screen. so in conclusion understanding all of this is a very important aspect in being a great! WEB DEVELOPER.

QUESTION 02

-The QUIC solves the TCP packet loss handling such that instaead of making everything wait for one missing piece QUIC allows different streams of data to continue independently so as a result of this websites can load faster and user experiences fewer interuptions. Also it has a native encryption built in for both speed and security improvement for better secured connection.

QUESTION 03

-Based on my experience using the JAMB Portal, i noticed it doesnt use proper HTML properly. the clues i observed is that navigation feels confusing especially when trying to locate specific information quickly thereby making accessibility difficult this suggest that semantic element such as header, nav and main are not effectively been in use and it will leads to difficulties for user who rely on assistive technologies to be able to access the page.

PRODUCT THINKING

QUESTION 01

-Basically Semantic HTML helps search engines understand content structure and it ranks them in the order
<main> this tells the search engine this is the primary content of the page. so the main blog goes here.
<article> this tells the search engine this is a piece of content. so individual self-contained content goes here.
<header> this tells the search engine this section provide important titles and introduction. so title, introduction, author information etc.. all goes here.
<aside> this tells the search engine this contained related information supporting the main article. all supporting content goes here.


QUESTION 02

-since Edge Computing moves processing closeer to user. the computing benefit that would matter most includes 
-lower latency ;- reduced delay in server response
-faster real time update ;- keeps everyone synchrnised.
-enhanced privacy ;- data can be processed locally without leaving the user's region.

ENGINEERING BEST PRACTICE

QUESTION 01

-I will have to disagree because using <div> everywhere is not considered a good practice, considering accessibility, seo, maintainability and collaboration. now lets take it one by one, accessibility: screen reader understand the <nav> immediatly and understand thats a navigation bar then anoounce content properly. seo: search engines understand the function of <header> <main> <article> <footer> and each of their respective usefulness than just using <div> all through. maintainabilty: when other develper opens the code, it will be very difficult to maintain working on the code because its not self explanatory, hence why the use of semantic is important which immediately tells what each section does and code beco,es easier to mantain and debug. collaboration: this involve team works, and team work can only be faster when the code is easy to understand


CLASS 02 - Typography & Information Hierarchy

THEORY

QUESTION 01

-The difference
<em>emphasis: the text in it emphasised
<i>italic: it just a text in an alternate style
-when would each be used.??
<em> it is used when we want the screen reader to place an extra focal stress on the text within the <em> element
<i> used when we want to style a text but not stressing its importance.
example
<p>I am from <i>osun state</i> </p>
<p>It was named after <em>water goddess</em> </p>

QUESTION 02

Screen readers treat semantic element specially, 3 example includes <caption> <article> <footer>.
reasons brower handle them that way
-screen reader can easily navigate through them and announce content properly
-search engine understand the content structure better

QUESTION 03

-we use ARIA labels when an element already has the correct semantic html but lacks accessible text, maybe an svg was used in the text context.
we fix html when we are using the wrong html element.
-when to use aria llabel
<nav aria-label="Main navigation">...</nav>
-when to fix html instead
<div aria-label="submit">Submit</div> this is still a wrong element, instead <button>Submit</button>.

ACCESSIBILITY REFLECTION

QUESTION 01

I just access the jamb portal
-i was able to tab through page using the tab key on the homepage and was able to move from the HOME link to the SERVICES menu and then to the search box without using a mouse

-are form label visible: The search form had a visible label making it clear what infomration should be entered into the input field.

-do button have clear focus states: as i tabbed on the Search button, a visible outline appeared around it, making it easyto see which element i was currently selecting. when i pressed the tab key.

PRODUCT THINKING

QUESTION 01

-If im designing an API documentation page and i want my user to scan quickly, here is how i will structure my information hierarchy lets say im building a weather API documentation

<h1> Weather API documentation
<p>This where the version type and 
<h2> introduction
<p>the purpose of the API will be explain.
<h2> Authentication: this section would describe how user authenticate request
<h2>Endpoint: this section would contain all available API endpoints
<h3> get current weather
<h3> get weather forecast
<h2> Error codes: this setion would explain common error such as invalid api keys, rate limits


CLASS 03 - Modern Assets & Linking

THEORY

QUESTION 01

-Firstly a 5MB image is too large for a hero image, so what i will do is i will convert the image to modern format like .avif and .webp who has smaller fle size and excellent image quality using tools like SQUOOSH website or SHARP installed on vscode because both tools are easy to use. And then resize the image to different display size for mobile, tablet and desktop using the same tools. 

QUESTION 02

-SRCSET is an html attribute that allows the browser to choose the most appropriate image size based on screen size, device resolution, and available bandwith by providing multiple version of the image. I will use it whwn i have same image of different size for mobile, tablet and desktop.

CASE SCENARIO
After converting and resizeing the 5 mb png image to .avif and having different version for mobile, tablet and desktop. here is how it will be handled
<img src="hero-1280.jpg"
     srcset="hero-640.jpg 640w,
             hero-1280.jpg 1280w,
             hero-1920.jpg 1920w"
            sizes="100vw"
            alt="Hero image">


QUESTION 03

-rel="noopener" is important when using target="_blank" to prevent new page from interfereing with the original one making browsing more secure. 
-The security vulnerability it prevents includes phishing, when malicious website could potentially redirect the original tab to a fake website and trick user into entering sensitive information.
-The simple explanation of this is giving a visitor access to a room in the house but they dont have acccess to the whole house, so noopener is used to limit the viitor acess, without the noopener the visitor may decide to access all rooms.

ENGINEERING THINKING

QUESTION 01

My optimization strategy includes
-I would use modern image format such as AVIF, Webp because they provide smaller file size with excellent quality
-I would implement Lazy Loading such that only image visible on screen should load immediately, remaining load as user scrolls, without lazy loading the 50 image loads immediately thereby causing slow page loading, increased bandwith usage, low mobile performance and higher data consumpiton
<img src="product.avif"
     loading="lazy"
     alt="Product name">
-I would use Responsive Images srcset, different device should receive different image sizes for faster page loading and less date usage.


CLASS 04 - Modern Forms & User Experience

THEORY

QUESTION 01

-when a user submit invalid email

the user experience flow happens on client-side-only validation 
->user enters invalid email ->user clicks submit ->browser detect error ->form is not submitted ->error message displayed [please enter a valid email address]

the user experience flow happens on server-side-only validation 
->user enters invalid email ->user clicks submit ->data sent to server ->server validate email ->server reject request ->error message displayed [please enter a valid email address]

-Why both is needed is because the client-side-only validation can be bypassed, but the server-side-only validation is more secured and cannot be bypassed but it may create unnecessar delay in validation error. so combination of both provides fast feedback and strong security.

QUESTION 02

-The autocomplete attribute is an attribute that help the browser automatically fill form fields using data the user has previously saved.

list 5 diff values
-autocomplete="name" ->used for a user full name in registration form
-autocomplete="email" ->used for email addresses on loging or sign up forms
-autocomplete="tel" ->is used in phone number fields in contact forms
-autocomplete="street-address" -> used to automatically fill a user address
-autocomplete="country" -> used in country field form

PRODUCT THINKING

QUESTION 01

How i will design the form to handle the issue
-Progress Saving; as user complete each step, i would save their data automatically using possible mesthod such as local storage, session storage, database etc...
-Validation Strategy; i will use both client-side validation to check immediately and improve user experience, and server-side validation to protect data integrity. 
-show helpful error message instantly when internet is lost or when there is an invalid input

QUESTION 02

when i would use Native select by default
-Accessibility: it already support keyboard navigation, screen readers.
-mobile UX: user gets the familiar mobile interface
-Development Time: faster

when i would use custom dropdown: if product requirement goes beyond what <select> can do.
-Accessibility: i have to handle keyboard navigation and screen reader needs aria attribte because without proper implementation, accessibilty suffers.
-mobile UX: i will to handle the custom dropdown to provide significant value
-Development Time: so much work to do

summary: i will use native <select> whenever the list of option is relatively simple and doesn not require advance functionality, but if the design require search, multi-select, icons, dynamic data, rich interactions ill use custom dropdown.

ENGINEERING BEST PRACTICE

QUESTION 01

-The password field should have a visible label, a password input, a show/hide toggle button, a strength meter, and a requirement checklist.

<label for="password">Password</label>
<input id="password"
       type="password"
       arai-decribedby="password-requirements password-strength">


CLASS 05 - Modern Forms & User Experience

THEORY

QUESTION 01     

![diagram](images/class%2005.jpeg)

-if two adjacent divs have those value, the amount of space between them will be the highest value, this occurs because of margin colapsing where adjacent vertical margins merge and the browser uses the larger of the two margins instead of adding them together. 

QUESTION 02 

-The CSS specificity hierarchy is how strong a selector is, and which is applied when multiple selector target the same element. the hierarchy follows inline, then id's, then class/attribute , then element. 

for .header nav ul li a (0-id, 1-class, 4-element)
for nav a.active (0-id, 1-class 2-element, )
for .nav-links a (0-id, 1-class, 1-element)
so since all the 3 has no id, and same number of class, the selector with the highest number of element wins.

QUESTION 03
-The CASCADE in CSS is the process by which the browser determine which css rule will be applied to an element.
-case scenario where cascade will save, if a .card class already defines padding, background color and text color, a .featured-card may only needs to override background color and not necessarily putting the padding and text color.

ENGINEERING THINKING

QUESTION 01
-What happened is by default Css uses box-sizing: content-box;, with content-box total width = width + padding + border. hence the cause of the increase in width
-The fix is that we use box-sizing: border-box; here total width = width, hence our problem is solved.

QUESTION 02 

/* content-box is the default box model, width only applies to the content area, actual width 200px + left padding 30px + right padding 30px + left border 5px + right border 5px. toatal width = 270px */
.box { 
        width: 200px;
        padding 30px;
        border 5px solid red;
        box-sizing: content-box;
}

/* border-box includes padding and border insdie the specified width total width remains 200px, the content area shrinks to make rom for the padding and border*/

.box2 { 
        width: 200px;
        padding 30px;
        border 5px solid red;
        box-sizing: border-box;
}


CLASS 10 - Memory & Variables

THEORY

QUESTION 01

-The difference in terms of: scope, hoisting, and reassignment
-let: block scope, hoisted, can be reassignment.
-const: block scope, hoisted, cannot be reassignment.
-var: function scope, hoisted, can be reassignment.

-const does not prevent mutation of objects/array because it only prevent the variable from being reassigned to a different object or arrays.

QUESTION 02

-Temporal Dead Zone is a period between when a let or const variable is hoisted and whwn its declaration is raeched in the code, during this period, the variable exist but cannot be accessed
-TDZ exist to prevent bug caused by accidentally using variables before they have been initialized, it help developer catch mistakes early
-Example if code tries to log a variable before it is declared, the TDZ will throw an errror immmediately rather than allowng the program to continue running with an undefined value.

QUESTION 03

-stack
name -> 'nikinggs101'
age -> 22
result -> 'hello, undefined'

-heap
score -> [90, 85, 88]
function greet(person)

PRODUCT THINKING

QUESTION 01

-the display value: let displayValue = '0', let will be used because the display changes constantly.
-the operator: let operator = null; let will be used as the operator change whenever user selests new operator
-the previous operand: let will be used as the variable is repeatedly assign.


CLASS 11 - Control Flow & Comparison

THEORY

QUESTION 01

-The difference between === & ==
== (loose equality) compares value after type conversion. eg javascript sees 5 == '5', then converts '5' to 5 and then compares 5 == 5 to be true
=== (strict equality) compare values and types without type conversion. eg 5 === '5', compare value 5 to be number and '5' to be string, then compare 5 === '5' to be false

-from the example given a loose equality can cause a bug.

QUESTION 02

-Optional chaining (?.) allow us to access a nested property safely or call a method without causing an error if something in the chain is null or undefined.
-3 example where it prevent error: user.address?.city access city only if address existed. user.getName.?() callback only f it has been provided
-one ex where it might hide a bug: using user?.email when an email is required may silently rturn undefined and allow application to continue instaead of revealing the important data missing.

summary: optional chan is used when the value is genuinely optional e.g secondary address, profile picture, optional callback. we avoid using when the value is required for the application e.g user id, email required login, critical configuration.

QUESTION 03

-nullish coalescing (??) returns the rigth side only when the left side is null or undefined
-How it is diffeent from ||: the || treat any falsy value as missing, but with ?? its neither null nor undefined
-example: let score = 0;
          let pts = score ?? 10;
          the value 0 will be displayed cause 0 is valid

on the other part
          let score = 0;
          let pts = score || 10;
          the value 10 will be displayed caused || see the value 0 as falsy, hence it will ignore it

ENGINEERING THINKING

QUESTION 01

validate user input for, name(required) age(number 18 - 99) email(valid format) preferences(optional object with nested properties). val logic using typeof, op chaain, nulll coal.
-function validateUser(user) {
  const errors = [];

  // Name validation
  if ( typeof user.name !== "string" || user.name.trim() === "" ) 
    { errors.push("Name is required."); }

  // Age validation
  if ( typeof user.age !== "number" || user.age < 18 || user.age > 99 ) 
  { errors.push("Age must be a number between 18 and 99."); }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if ( typeof user.email !== "string" || !emailPattern.test(user.email) ) 
  { errors.push("Please enter a valid email address."); }

  // Preferences (optional)
  if ( user.preferences !== undefined && typeof user.preferences !== "object" ) 
  { errors.push("Preferences must be an object."); }

  // Optional chaining
  const theme = user.preferences?.theme ?? "light";

  const notifications = user.preferences?.notifications ?? true;

  return {
    valid: errors.length === 0,
    errors,
    preferences: {
      theme,
      notifications
    }
  };
}

example 1: valid user

const user = {
  name: "Sarah",
  age: 22,
  email: "sarah@gmail.com",
  preferences: {
    theme: "dark",
    notifications: false
  }
};

console.log(validateUser(user));

output:
{
  valid: true,
  errors: [],
  preferences: {
    theme: "dark",
    notifications: false
  }
}

example 2: missing preference

const user = {
  name: "Adeniyi",
  age: 28,
  email: "nikinggs101@gmail.com"
};
console.log(validateUser(user));

so because of:
user.preferences?.theme ?? "light"

output becomes:
{
  theme: "light",
  notifications: true
}

example 3: invalid input

const user = {
  name: "",
  age: 120,
  email: "wrong-email"
};
console.log(validateUser(user));

output:
{
  valid: false,
  errors: [
    "Name is required.",
    "Age must be a number between 18 and 99.",
    "Please enter a valid email address."
  ]
}

QUESTION 02

function calculateGrade(scores, weights, passingGrade) {


  // Validation
  if (
    !Array.isArray(scores) ||
    !Array.isArray(weights)
  ) {
    return "Scores and weights must be arrays.";
  }

  if (scores.length === 0) {
    return "At least one score is required.";
  }

  if (scores.length !== weights.length) {
    return "Scores and weights must have the same length.";
  }

  // Check total weight
  const totalWeight = weights.reduce(
    (sum, weight) => sum + weight,
    0
  );

  if (totalWeight !== 100) {
    return "Weights must total 100%.";
  }

  // Calculate weighted average
  let average = 0;

  for (let i = 0; i < scores.length; i++) {

    if (
      typeof scores[i] !== "number" ||
      scores[i] < 0 ||
      scores[i] > 100
    ) {
      return `Invalid score at position ${i + 1}`;
    }

    average += scores[i] * (weights[i] / 100);
  }

  // Pass / Fail using ternary
  const status =
    average >= passingGrade
      ? "Pass"
      : "Fail";

  // Letter Grade using ternary operators
  const letterGrade =
    average >= 90 ? "A" :
    average >= 80 ? "B" :
    average >= 70 ? "C" :
    average >= 60 ? "D" :
    "F";

  // Distinction using logical operator
  const distinction =
    average >= 90 && status === "Pass"
      ? "Yes"
      : "No";

  return {
    average: average.toFixed(2),
    status,
    letterGrade,
    distinction
  };
}
const scores = [90, 80, 100]
const weights = [30, 30, 40]

console.log(
  calculateGrade(
    scores,
    weights,
    60
  )
);
console.log(
  calculateGrade(
    [70, 65, 60], 
    [40, 30, 30], 
    70))

/*
output: {
  average: "91.00",
    status: "pass"
    letterGrade: "A"
    distinction: "Yes"
}
    

output2:
{
    "average": "65.50",
    "status": "Fail",
    "letterGrade": "D",
    "distinction": "No"
}

*/

 Edge Cases Handled
-empty scores, at least one score is required
-weight must total 100%
-different lenght, score and weight must have same length
-invalid score, must be between 0-100

 Required concept
-ternary operator
-logical operator


CLASS 12 - Control Flow & Comparison

THEORY

QUESTION 01

-A function declaration is created using the function keyword followed by a function name

-A functon expression stores a function inside a variable
 difference
-the function itself is declared directly in the declaration while the functin is assigned to a variable in the expression.
 Hoisting
-it is the javascrpt behaviour of processing declaration before executing the code 

QUESTION 02
 A pure function is a function that
-Always returns the same output for the same input.
-Does not modify or depend on anything outside itself (no side effects).

-Example of a Non-Pure Function

let total = 0;

function addToTotal(value) {
  total += value;
  return total;
}

addToTotal(5);

Output: 5

Then: addToTotal(5);

Output: 10

Notice something important: The input is still: 5

but the output changed.

-Why it is not a Pure function is because it depends on an external variable: let total = 0; and modifies it to
total += value;.
This is called a side effect.

The function’s result depends not only on its arguments but also on the current state of total.

QUESTION 03

-callback is a function passed as an argument to another function, so that it can be executed later.
-higher-order function is a function that accepts another function as an argument, or Returns a function.
-they are fundamental to JavaScript because they power event handling, timers, asynchronous operations, and many built-in methods. They allow developers to write more modular, reusable, and dynamic code.

PRODUCT THINKING

QUESTION 01

-Addition Function: the purpose is Adds two numbers together.

Inputs: a, b
Output: a + b

Example

function add(a, b) {
  return a + b;
}
add(5, 3);

Output: 8

-Subtraction Function: the purpose is to Subtracts one number from another.

Inputs: a, b
Output: a - b

Example

function subtract(a, b) {
  return a - b;
}
subtract(10, 4);

Output: 6

-Multiplication Function: the purpose is to Multiplies two numbers.

Inputs: a, b

Output: a * b

Example

function multiply(a, b) {
  return a * b;
}
multiply(6, 7);

Output: 42

-Division Function: the purpose is to Divides one number by another.

Inputs: a, b

Output: a / b

Example

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

divide(20, 5);

Output: 4

-Square Root Function: the purpose is to Calculates the square root of a number.

Inputs: number

Output: √number

Example

function squareRoot(number) {
  if (number < 0) {
    throw new Error(
      "Cannot calculate square root of a negative number"
    );
  }

  return Math.sqrt(number);
}

squareRoot(25);

Output: 5

 Pure functions offer several advantages:

-Predictability: The same input always produces the same output. add(2, 3);

will always return: 5

-Easier Testing: we only need to provide inputs and check outputs. No setup of global variables, DOM elements, or APIs is required.

-Easier Debugging: If a calculation is incorrect, we only need to inspect the function and its arguments.

-Reusability: Pure functions can be used anywhere in the application without worrying about hidden side effects.

-Reliability: A pure function does not change external variables or application state, reducing unexpected bugs.

ENGINEERING THINKING

QUESTION 01

-Function composition means combining multiple functions into one function.

const result = f(g(h(x)));

Instead we create a reusable utility:

const composed = compose(f, g, h);

composed(x);

which produces the same result.

-Loop-Based Implementation

function compose(...functions) {

  return function (value) {

    let result = value;

    for (
      let i = functions.length - 1;
      i >= 0;
      i--
    ) {
      result =
      functions[i](result);
    }

    return result;
  };
}

Example Functions

function add2(x) {
  return x + 2;
}

function multiply3(x) {
  return x * 3;
}

function square(x) {
  return x * x;
}

-Using compose

const calculate =
compose(
  add2,
  multiply3,
  square
);

console.log(
  calculate(2)
);

Execution:

square(2) = 4

multiply3(4) = 12

add2(12) = 14

Output: 14

This follows:

add2(
  multiply3(
    square(2)
  )
)

which is:

f(g(h(x)))

-How the Loop Works

Suppose we have:

compose(
  add2,
  multiply3,
  square
);

Internally:

functions = [
  add2,
  multiply3,
  square
];

The loop starts from the end:

square
↓
multiply3
↓
add2

This ensures:

f(g(h(x)))

rather than:

h(g(f(x)))

-Using reduce Instead of a Loop

JavaScript’s reduce() can perform the same operation more elegantly.

function compose(...functions) {

  return function (value) {

    return functions
      .reverse()
      .reduce(
        (result, fn) =>
          fn(result),
        value
      );

  };
}

-Example

const calculate =
compose(
  add2,
  multiply3,
  square
);

console.log(
  calculate(2)
);

Output: 14


CLASS 13 - Data Structures --Arrays & object

THEORY

QUESTION 01

-we use an array when we have a list of items, The order matters, we need to loop through the items, may add or remove items frequently.
Example:
const scores = [85, 92, 78, 95];

-we use an object when we’re describing a single thing with properties.
Example:
const student = {
  name: "nikinggs",
  age: 27,
  course: "Agricultural and environmental engineering"
};

Here, the data has meaningful labels:
student.name
student.age
student.course

rather than numeric positions.


QUESTION 02
-Destructuring is a JavaScript feature that lets us extract values from objects or arrays and store them in variables.
Example: 
const user = {
  name: "Sarah",
  age: 22
};
const name = user.name;
const age = user.age;

proper destructuring
const { name, age } = user;

-How ill extract deeply nested complex API with 
EXAMPLE:
Let say an API returns:

const response = {
  status: "success",
  data: {
    user: {
      id: 1,
      profle: {
        name: "nikinggs",
        email: "nikinggs101@gmail.com"
      },
      location: {
        city: "Lagos",
        country: "Nigeria"
      }
    }
  }
};

-Without Destructuring

const name =
response.data.user.profle.name;

const email =
response.data.user.profile.email;

const city =
response.data.user.location.city;

const country =
response.data.user.location.country;

This works but becomes repetitive.


-With Nested Destructuring

const {
  data: {
    user: {
      profile: {
        name,
        email
      },
      location: {
        city,
        country
      }
    }
  }
} = response;

Now we can use:

console.log(name);
console.log(email);
console.log(city);
console.log(country);

Output:

nikinggs
nikinggs101@gmail.com
Lagos
Nigeria

ENGINEERING THINKING

QUESTION 01

-To find all other by alice we will make use of the filter(), reduce(), map(), set, and object grouping.

-Find All Orders by Alice

We use filter() because we want all matching orders.

const aliceOrders = orders.filter(
  order => order.customer === "Alice"
);

console.log(aliceOrders);

Output:

[
  {
    id: 1,
    customer: "Alice",
    items: ["Pizza", "Salad"],
    total: 45
  },
  {
    id: 3,
    customer: "Alice",
    items: ["Burger", "Fries"],
    total: 20
  }
]

-Calculate Total Spent by Alice

First we get Alice’s orders, then sum their totals.

const totalSpentByAlice = orders
  .filter(
    order => order.customer === "Alice"
  )
  .reduce(
    (sum, order) => sum + order.total,
    0
  );

console.log(totalSpentByAlice);

Output: 65

Because: 45 + 20 = 65

-Get All Unique Food Items

Notice that items is an array inside each order.

First we extract all items, then flatten them, then remove duplicates.

const uniqueFoodItems = [
  ...new Set(
    orders.flatMap(
      order => order.items
    )
  )
];

console.log(uniqueFoodItems);

Output:
[
  "Pizza",
  "Salad",
  "Burger",
  "Fries"
]

How it works

flatMap() produces:

[
  "Pizza",
  "Salad",
  "Burger",
  "Burger",
  "Fries"
]

Then:

new Set(...)

removes duplicates.

-Group Orders by Status

Use reduce().

const ordersByStatus = orders.reduce(
  (groups, order) => {

    if (!groups[order.status]) {
      groups[order.status] = [];
    }

    groups[order.status].push(order);

    return groups;

  },
  {}
);

console.log(ordersByStatus);

Output:

{
  delivered: [
    { id: 1, ... },
    { id: 3, ... }
  ],

  pending: [
    { id: 2, ... }
  ]
}


QUESTION 02


CLASS 14 - DOM Manipulation & Events

THEORY

QUESTION 01

-Event bubbling occurs when an event starts at the target element and propagates upward through elements before it. Event capturing is the opposite: the event travels from the outermost ancestor down to the target element. Bubbling is the default behavior in JavaScript and is commonly used for event delegation and handling dynamic content. Capturing is useful when a parent element needs to process an event before the target element, such as analytics or monitoring systems. bubbling is preferred because it is simpler and supports event delegation.

QUESTION 02

-Event delegation means attaching a single event listener to a parent element instead of attaching listeners to every child. This works because of event bubbling.

Imagine a list of 100 buttons:

<ul>
  <li><button>Delete</button></li>
  <li><button>Delete</button></li>
  <li><button>Delete</button></li>
</ul>
instead of:
const buttons =
document.querySelectorAll(
  "button"
);

buttons.forEach(button => {
  button.addEventListener(
    "click",
    deleteItem
  );
});

This creates 100 listeners for 100 buttons.

With Event Delegation

Attach one listener to the parent:

const list =
document.querySelector("ul");

list.addEventListener(
  "click",
  event => {

    if (
      event.target.tagName ===
      "BUTTON"
    ) {
      console.log(
        "Delete item"
      );
    }

  }
);

Only one listener is needed.

QUESTION 03

-The main security concern with innerHTML is Cross-Site Scripting (XSS). When user-provided content is inserted using innerHTML, malicious users may inject HTML or JavaScript that executes in the browser. Using createElement() and textContent is safer because the browser treats the content as plain text rather than executable HTML. For example, a comment system that displays user input should use textContent to prevent script injection attacks and improve security.

ENGINEERING THINKING

QUESTION 01

PRODUCT THINKING

QUESTION 01

CLASS 15 - personal Dashboard Project

PERSONAL REFLECTION

QUESTION 01

QUESTION 02

QUESTION 03

QUESTION 04

ENGINEERING BEST PRACTICE

QUESTION 01

CLASS 16 - The Event Loop & Promises

THEORY

QUESTION 01

QUESTION 02

QUESTION 03

ENGINEERING THINKING

QUESTION 01

QUESTION 02

CLASS 17 - Async/Await & Fetch API

THEORY

QUESTION 01

QUESTION 02

PRODUCT THINKING

QUESTION 01

ENGINEERING THINKING

QUESTION 01

QUESTION 02

CLASS 18 - intermediate Project - Movie Finder

PERSONAL REFLECTION

QUESTION 01

QUESTION 02

QUESTION 03

QUESTION 04

PRODUCT THINKING

QUESTION 01

QUESTION 02

ENGINEERING BEST PRACTICE

QUESTION 01

QUESTION 02



📝 Self-Assessment Template


BEFORE THIS BREAK, I KNEW…
(List 3 things)

-Html element and its attribute
-vanilla css and tailwindcss how its used to design and style webpage
-Few thing about javascript which include object, array, loops, function and dom manipulation to some extent.

DURING THIS BREAK, I LEARNED…
(List 3 things)
-i learned more about object, array and loops
-dom manipulation to create, push value and get value from an element
-how to apply logic step by step, even though im yet to get it perfectly especially for complex project.

I'M STILL CONFUSED ABOUT…
(2 things — be honest)
-callbacks, arrow function
-how to combine different javascript syntax to arrive at a final product 

MY GROWTH AREAS…
(3 specific things)
-understood how to use html perfectly
-ive understood some specific part of javascript
-improved on tailwindcss

ONE THING I'LL DO DIFFERENTLY IN THE NEXT PROJECT…
(1 specific thing)
-i will work on how to write down my steps before jumping on the code.








