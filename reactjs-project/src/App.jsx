import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
function App() {


  const person= {
    name: "Daniel Radcliffe",
    message: "Hello...",
    role: "Harry Potter",
    numbers: [1, 4, 9, 16, 25]
  }
  return (
    <>
      <div className="App">Hello World...!!!</div>
      <Hello
        person= {person}
      />
      <Fruits />
    </>
  );
}

export default App;
