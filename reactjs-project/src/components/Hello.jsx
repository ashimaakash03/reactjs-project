/* eslint-disable react/prop-types */
function Hello(props) {
  // eslint-disable-next-line react/prop-types
  return (
    <h2>
      {props.message} {props.name}. Your age is {props.age}. You play {props.role}.
    </h2>
  );
}
export default Hello;
