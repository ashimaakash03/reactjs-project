/* eslint-disable react/prop-types */
function Hello({person}) {
  // eslint-disable-next-line react/prop-types
  return (
    <h2>
      {person.message} {person.name}. You play {person.role}.
      Numbers: {person.numbers}
    </h2>
  );
}
export default Hello;
