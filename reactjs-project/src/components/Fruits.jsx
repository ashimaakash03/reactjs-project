const Fruits = () => {
  const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  return (
    <div>
      {fruits.map((fruit) => (
        <h2 key={fruit}>{fruit}</h2>
      ))}
    </div>
  );
};

export default Fruits;
