import Hello from "./components/Hello";

function App() {

  const numbers= [1,4, 9, 16, 25];
  return (
    <>
      <div className="App">Hello World...!!!</div>
      <Hello
        name="Daniel Radcliffe"
        message="Hello"
        role="Harry Potter"
        numbers= {numbers}
      />
    </>
  );
}

export default App;
