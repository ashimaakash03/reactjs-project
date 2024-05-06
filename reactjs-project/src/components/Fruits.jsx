const Fruits = () => {
  //const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  const fruits = [
    { id: 1, name: "Apple", price: 10 },
    { id: 2, name: "Mango", price: 12 },
    { id: 3, name: "Banana", price: 14 },
    { id: 4, name: "Orange", price: 16 },
    { id: 5, name: "Pineapple", price: 18 },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            Name: {fruit.name} Price: {fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
