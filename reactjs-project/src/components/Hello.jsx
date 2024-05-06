/* eslint-disable react/prop-types */
function Hello({ name, message, role, numbers }) {
  // eslint-disable-next-line react/prop-types
  return (
    <h2>
      {message} {name}. You play {role}. Numbers: {numbers}
    </h2>
  );
}
export default Hello;
