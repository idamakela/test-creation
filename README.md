# Hello and welcome to your Coolors dupe
the app will be very similar to [Coolors](https://coolors.co/1b2f33-28502e-47682c-8c7051-ef3054) and should let the user generate beautiful color palettes. see more detailed features [below](#features)

this is a next.js app that uses typeScript and has been prepared to use tailwind, feel free to change the styling to your preference though

feel free to handle the color data as you please but here is a suggestion of a [color api](https://www.thecolorapi.com/)

all tests can be found in the `@/tests` directory

## Getting Started

run the development server:

```bash
npm run dev
```

run the tests once:

```bash
npm run test
```

run the tests continuously:

```bash
npm run test:watch
```

## Features
- a header with the page name
- display 5 random colors on page load
- see the name of the color
- change a color by entering a new hex code in an input
- click a button to randomise a new color for any of the existing colors
- click a button to add a new color to the list
  - the new color should have a random, initial color
  - you can never display more than 10 colors
- click a button to remove a color
  - you can never display less than two colors

### Components
- Header
- ColorList
- ColorItem
- AddColor
- RemoveColor
- ChangeColor