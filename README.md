# Hello and welcome to your Coolors dupe

the app will be very similar to [Coolors](https://coolors.co/1b2f33-28502e-47682c-8c7051-ef3054) and should let the user generate beautiful color palettes. see more detailed features [below](#features)

this is a next.js app that uses typeScript and has been prepared to use tailwind, feel free to change the means of styling to your preference though

feel free to handle the color data as you please but here is a suggestion of a [color api](https://www.thecolorapi.com/)

all tests can be found in the `@/tests` directory

types for the component props can be found in the `@/types.ts` file

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

- a header with the page name and a randomizer button
- display 5 random colors on page load
  - you can never display more than 10 colors
  - you can never display less than two colors
- see the name of the color
- see the hex value of a color as a button
  - clicking the hex value should "turn" the button into an input field
    - the input field should be focused and the current hex color selected on render
  - entering a new hex value should change the color, name and hex value of that color
- each color should have an add button
  - clicking the button should add a new color to the list where the button is loacated (see Coolors for clarification)
  - the new color should have a random, initial color
- each color should have a remove button
  - clicking the button should remove that color
- clicking the button in the header should randomize a new color for all the existing shown color

### Components

- Header
- ColorList
- ColorItem
- AddColor
- RemoveColor
- ChangeColor

# Feedback

- Great tests and instructions overall. The structure with Types, Utils, Readme, and tests was clear and helpful.
- The test in `ColorItem` regarding 'the hex code is always displayed with seven characters' could be reformulated. None of the developers understood its purpose before it was explained. Possibly rephrase it as: 'The user can input two or three characters in the input; it should then auto-fill to ensure the hex code always displays seven characters.'

### Thanks Ella for a fun project!
