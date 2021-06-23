# Documentation

### Project built exclusively using the code and the documentation from [React Hooks Tutorial: build a to-do list with React Hooks](https://www.educative.io/blog/react-hooks-tutorial-todo-list)

## Facts about React Hooks

Hooks are available after the release of React 16.8 in 2019.
Using hooks you can make functional components stateful, instead of using a class component to hold stateful logic.

Actually, hooks are functions that allow you to hook into React state and lifecycle features from function components.

There are several predefined React hooks like:

- `useState` - returns a stateful value
- `useEffect` - perform side effects from function components
- `useContext` - accepts a context object and returns current context value
- `useCallback` - pass an inline callback and an array of dependencies

#### Benefits:

- isolating stateful logic, making it easier to test
- sharing stateful logic without render properties or higher-order components
- separating you app's concerns based on logic

## ToDo List App

In this app it was used only a React hook - the `useState` one.
This hook replaces the need for a state object in a class component structure.

In the project's implementation, instead of having a class with a `state` in which are stored some todo tasks to be rendered using something like `this.state.toDoList.map(toDo => {...}`, it is simply declared `const [ toDoList, setToDoList ] = useState(data)`. By this hook declaration it is wired up some local state in `App.js`. The `data` are some objects from the `data.json` file.

Another place where the `useState` hook is used is inside the `ToDoForm.js` file to handle the user's text input for adding a new todo task - `const [ userInput, setUserInput ] = useState('')`.