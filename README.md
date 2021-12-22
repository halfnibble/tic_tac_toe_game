## Running React on Repl.it

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started

- Hit run
- Edit [App.jsx](#src/App.jsx) and watch it live update!

### Note

CSS modules are not configured in this project. If you want to add styles, import the CSS file and reference the className directly by string name.
E.g. `<div className="myClass">...</div>`

## The Problem

You are given a base React.js project `App.jsx` that needs to include a Tic Tac Toe board game component. Another developer is working on logic to validate whether a board has a winner or cat's game, etc. Your component is located in `components/Board.jsx`. You can create new components under the components folder if you want to (or place everything inside `Board.jsx`—it's up to you).

All you need to work on is drawing the Tic Tac Toe board and updating the application state when a cell on the board is clicked. Assume that the current starting player is "X" and after every valid click, it alternates (so X, then O, then X again, then O again, etc.).

Styling is secondary to logic. The order of tasks is:

1. Draw a 9 cell Tic Tac Toe board.
2. Update the `board` state array when a cell is clicked.
3. Alternate the active player between "X" and "O".
4. Finally, if time permits, make it look like a Tic Tac Toe board.