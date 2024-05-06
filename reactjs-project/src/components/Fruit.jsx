// eslint-disable-next-line react/prop-types
const Fruit = ({ name, price }) => {
  // eslint-disable-next-line react/prop-types
  return (
    <>
      {/*eslint-disable-next-line react/prop-types*/}
      {/* Name: {name}. Price: ${price} */}

      {price >= 14 ? (
        <li>
          Name: {name}. Price: ${price}{" "}
        </li>
      ) : (
        " "
      )}
    </>
  );
};

export default Fruit;
