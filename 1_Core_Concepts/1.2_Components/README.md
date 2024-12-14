# Components:

- Functional Components
- Class Components
- Memoized Components
- Component Lifecycle Methods

## References:

### 1) YouTube Playlist: https://youtube.com/playlist?list=PLKB5Jj_8kkqSX5BwcXwLr7j1EFXATce0U&si=D5Imk-rL-JptZEVX

### 2) Docs: [https://legacy.reactjs.org/docs/introducing-jsx.html]

## Notes:

1. lifecycle methods: pre-defined methods that control the DOM
2. in functional components, lifecycle methods can be achieved using hooks
3. in class components, we have direct lifecycle methods (refer class_components>src>App.jsx and Counter.jsx) (rcc = shortcut for class based components)
4. 3 phases in react: mounting, updating, unmounting
5. first time component is inserted in DOM = mounting, changing/updating = updating, removing a component from DOM = unmounting (note that refreshing a page automatically results in unmounting and remounting of the entire DOM)
6. lifecycle methods in class based components with syntax:

   render(){ return } = returns browser-compatible js that is obtained by transpiling jsx using transpilers like babel

   componentDidMount(){} = it executes only when the component is initially mounted in the DOM

   componentDidUpdate(prevProp, nextProp){} = it executes only when the component is updated in the DOM

   componentWillUnmount(){} = it executes only when the component is unmounted (during hot reloading / removing component from DOM)

7. execution sequence of various methods:

   mounting: constructor -> static getDerivedStateFromProps -> render -> componentDidMount

   updating: static getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate

   unmounting: componentWillUnmount

   error handling: componentDidCatch

8. note that certain lifecycle methods are executed twice due to strictmode in main.jsx during development to highlight sideeffects that occur during mounting phase. There is nothing to be worried about and to disable it simply remove it's wrapper in main.jsx, but its not needed because it works only during development and not for production
