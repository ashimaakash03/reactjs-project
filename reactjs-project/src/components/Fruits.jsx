import Fruit from "./Fruit";

const Fruits = () => {
  //const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  const fruits = [
    { id: 1, name: "Apple", price: 10, available: true },
    { id: 2, name: "Mango", price: 12, available: true },
    { id: 3, name: "Banana", price: 14, available: false },
    { id: 4, name: "Orange", price: 16, available: true },
    { id: 5, name: "Pineapple", price: 18, available: false },
    { id: 6, name: "Watermelon", price: 20, available: false },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
