# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://interactiveratingcomponent-khayt.netlify.app/](https://interactiveratingcomponent-khayt.netlify.app/)

## My process

### Built with

I built this project with...

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Javascript
- [Google fonts](https://fonts.googleapis.com/) - For the font

### What I learned

I learnt to take note of the fact that 'querySelectorAll' returns a nodelist and to be able to differentiate nodelists from other iterables and the fact that you cannot add an event listener on a nodelist but on the elements in the nodelist. This was from this code 👇🏼

```js
btnRate.forEach(function (el) {
  el.addEventListener("click", function () {
    el.classList.toggle("btn--special");

    scoreBoard.textContent = `You selected ${el.innerHTML} out of 5`;
  });
});
```

I also learnt how to reload the document programmatically after pressing a key. This was from this code 👇🏼

```js
document.location.reload();
```

### Useful resources

- [MDN Web docs](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) - This is an amazing article which helped me finally the concept of nodelist. I'd recommend it to anyone still learning this concept.
- [Stack overflow](https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click) - This helped me on how to reload a document (please note that for a page, you use 'window.' and for the entire document, you use 'document.')

## Author

- Frontend Mentor - [@KhayT](https://www.frontendmentor.io/profile/KhayT)
- Twitter - [@Abdulazeez_KT](https://twitter.com/Abdulazeez_KT)

## Acknowledgments

I'm giving credit to Google. It should be your best friend as a developer🌚.
