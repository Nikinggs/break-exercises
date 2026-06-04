CLASS 01 - The 2026 Web Ecosystem

THEORY

QUESTION 01

![diagram](picture.jpg)

As a WEB DEVELOPER, understanding how a browser takes HTML and turn it to what we see on screen from DOM to paint helps developer build faster websites, helps identify performance problem, know how rendering works help optimize user experience when a user opens a website, the broowser does not immediately display the page it first read the html document and then convert it into DOM Tree which represent all the element on the page. the browser then combine the DOM and CSS to create a render Tree containing only visible elements. then layout follows where size and position of eaxh element is calculated. finally the paint stage is where draws text, images, colors, and other visible element pn screen. so in conclusion understanding all of this is a very important aspect in being a great! WEB DEVELOPER.

QUESTION 02

The QUIC solves the TCP packet loss handling such that instaead of making everything wait for one missing piece QUIC allows different streams of data to continue independently so as a result of this websites can load faster and user experiences fewer interuptions. Also it has a native encryption built in for both speed and security improvement for better secured connection.

QUESTION 03

Based on my experience using the JAMB Portal, i noticed it doesnt use proper HTML properly. the clues i observed is that navigation feels confusing especially when trying to locate specific information quickly thereby making accessibility difficult this suggest that semantic element such as header, nav and main are not effectively been in use and it will leads to difficulties for user who rely on assistive technologies to be able to access the page.

PRODUCT THINKING

QUESTION 01

Basically Semantic HTML helps search engines understand content structure and it ranks them in the order
<main> this tells the search engine this is the primary content of the page. so the main blog goes here.
<article> this tells the search engine this is a piece of content. so individual self-contained content goes here.
<header> this tells the search engine this section provide important titles and introduction. so title, introduction, author information etc.. all goes here.
<aside> this tells the search engine this contained related information supporting the main article. all supporting content goes here.


QUESTION 02

since Edge Computing moves processing closeer to user. the computing benefit that would matter most includes 
-lower latency ;- reduced delay in server response
-faster real time update ;- keeps everyone synchrnised.
-enhanced privacy ;- data can be processed locally without leaving the user's region.

ENGINEERING BEST PRACTICE

QUESTION 01

I will have to disagree because using <div> everywhere is not considered a good practice, considering accessibility, seo, maintainability and collaboration. now lets take it one by one, accessibility: screen reader understand the <nav> immediatly and understand thats a navigation bar then anoounce content properly. seo: search engines understand the function of <header> <main> <article> <footer> and each of their respective usefulness than just using <div> all through. maintainabilty: when other develper opens the code, it will be very difficult to maintain working on the code because its not self explanatory, hence why the use of semantic is important which immediately tells what each section does and code beco,es easier to mantain and debug. collaboration: this involve team works, and team work can only be faster when the code is easy to understand


CLASS 02 - Typography & Information Hierarchy

THEORY

QUESTION 01

The difference
<em>emphasis: the text in it emphasised
<i>italic: it just a text in an alternate style
when would each be used.??
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

we use ARIA labels when an element already has the correct semantic html but lacks accessible text, maybe an svg was used in the text context.
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

If im designing an API documentation page and i want my user to scan quickly, here is how i will structure my information hierarchy lets say im building a weather API documentation

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

Firstly a 5MB image is too large for a hero image, so what i will do is i will convert the image to modern format like .avif and .webp who has smaller fle size and excellent image quality using tools like SQUOOSH website or SHARP installed on vscode because both tools are easy to use. And then resize the image to different display size for mobile, tablet and desktop using the same tools. 

QUESTION 02

SRCSET is an html attribute that allows the browser to choose the most appropriate image size based on screen size, device resolution, and available bandwith by providing multiple version of the image. I will use it whwn i have same image of different size for mobile, tablet and desktop.

CASE SCENARIO
After converting and resizeing the 5 mb png image to .avif and having different version for mobile, tablet and desktop. here is how it will be handled
<img src="hero-1280.jpg"
     srcset="hero-640.jpg 640w,
             hero-1280.jpg 1280w,
             hero-1920.jpg 1920w"
            sizes="100vw"
            alt="Hero image">


QUESTION 03





