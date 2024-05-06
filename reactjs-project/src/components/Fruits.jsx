const Fruits = () => {
  //const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  const fruits = [
    { name: "Apple", price: 10 },
    { name: "Mango", price: 12 },
    { name: "Banana", price: 14 },
    { name: "Orange", price: 16 },
    { name: "Pineapple", price: 18 },
  ];
  return (
    <div>
      {/* <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Fruits;
