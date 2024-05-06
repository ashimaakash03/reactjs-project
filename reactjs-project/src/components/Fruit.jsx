// eslint-disable-next-line react/prop-types
const Fruit = (props) => {
  // eslint-disable-next-line react/prop-types
  return (
    <li>
      {/*eslint-disable-next-line react/prop-types*/}
      {props.name} ${props.price}
    </li>
  );
};

export default Fruit;
