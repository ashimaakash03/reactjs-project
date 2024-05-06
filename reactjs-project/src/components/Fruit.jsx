// eslint-disable-next-line react/prop-types
const Fruit = ({ name, price }) => {
  // eslint-disable-next-line react/prop-types
  return (
<<<<<<< HEAD
    <>
=======
    <div>
>>>>>>> f41be58c51e533645c911779369b1e5b43fe2825
      {/*eslint-disable-next-line react/prop-types*/}
      {/* Name: {name}. Price: ${price} */}

      {price >= 14 ? (
        <li>
          Name: {name}. Price: ${price}{" "}
        </li>
      ) : (
        " "
      )}
<<<<<<< HEAD
    </>
=======
    </div>
>>>>>>> f41be58c51e533645c911779369b1e5b43fe2825
  );
};

export default Fruit;
