import Hello from "./components/Hello";

function App() {
  return (
    <>
      <div className="App">Hello World...!!!</div>
      <Hello name="Daniel" message="Hello" age="25" />
      <Hello name="Emma" message="Hola" age="28" />
      <Hello name="Rupert" message="Hi" age="26" />
    </>
  );
}

export default App;
