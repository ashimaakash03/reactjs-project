const Conditional = () => {
  const condition = false;

  if (condition) {
    return (
      <div>
        <h3>This statement must be rendered if condition is true</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>This statement must be rendered if the condition is false</h3>
      </div>
    );
  }
};

export default Conditional;
