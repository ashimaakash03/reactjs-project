import Fruit from "./Fruit";

const Fruits = () => {
  //const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  const fruits = [
    { id: 1, name: "Apple", price: 10 },
    { id: 2, name: "Mango", price: 12 },
    { id: 3, name: "Banana", price: 14 },
    { id: 4, name: "Orange", price: 16 },
    { id: 5, name: "Pineapple", price: 18 },
    { id: 6, name: "Watermelon", price: 20 },
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
