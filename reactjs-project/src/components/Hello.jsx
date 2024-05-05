/* eslint-disable react/prop-types */
function Hello({ name, message, age, role }) {
  // eslint-disable-next-line react/prop-types
  return (
    <h2>
      {message} {name}. Your age is {age}. You play {role}.
    </h2>
  );
}
export default Hello;
