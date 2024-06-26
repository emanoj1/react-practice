import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
},
{
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan, Andrew',
  num_comments: 2,
  points: 5,
  objectID:1,
},
];

const App = () => (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List />
    </div>
  );

const Search = () => {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  }
  return (
    <div>
      <label htmlFor = "search">Search: </label>
      <input id = "search" type="text" onChange={handleChange}/>
    </div>
  );
}

const List = () => (
    <ul>
      {list.map((item) => (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
      ))}
    </ul>
);


// // const welcome = {
// //   greeting: 'Hey',
// //   title: 'Manoj!'
// // }

// function getTitle(title){
//   return title;
// }

// function App(){
//   return (
//     <div>
//       {/* <h1>{welcome.greeting} {welcome.title}</h1> */}
//       <h1>Hello, {getTitle('Manoj!')}</h1>

//       <label htmlFor='search'>Search: </label>
//       <input id="search" type="text"/>

//     </div>
//   );
// }

export default App;
