// eslint-disable-next-line react/prop-types
const Fruit = ({ name, price, available }) => {
  // eslint-disable-next-line react/prop-types
  return (
    <>
      {/*eslint-disable-next-line react/prop-types*/}
      <li>
        {name}. ${price}. {available ? "Available" : ""}
      </li>
    </>
  );
};

export default Fruit;
