/* eslint-disable react/prop-types */
function Hello(props) {
  // eslint-disable-next-line react/prop-types
  return (
    <h2>
      {props.person.message} {props.person.name}. You play {props.person.role}.
      Numbers: {props.person.numbers}
    </h2>
  );
}
export default Hello;
