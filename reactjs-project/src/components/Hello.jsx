function Hello() {
  const name = "Ashim Aakash";
  const age = 26;

  return (
    <>
      <div className="message">Greet Message: {greetMessage()}</div>
      <h2>
        Hi, my name is {name} and I am {age} years old...
      </h2>
    </>
  );
}

function greetMessage() {
  return "Greetings!!! Now learning ReactJS";
}

export default Hello;
