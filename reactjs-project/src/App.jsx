import Hello from "./components/Hello";

function App() {
  return (
    <>
      <div className="App">Hello World...!!!</div>
      <Hello
        name="Daniel Radcliffe"
        message="Hello"
        age="25"
        role="Harry Potter"
      />
      <Hello
        name="Emma Watson"
        message="Hola"
        age="28"
        role="Hermione Granger"
      />
      <Hello name="Rupert Grint" message="Hi" age="26" role="Ron Weasley" />
    </>
  );
}

export default App;
