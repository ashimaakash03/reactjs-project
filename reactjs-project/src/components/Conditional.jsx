import False from "./False";
import True from "./True";

const Conditional = () => {
  const condition = true;

  if (condition) {
    return <True />;
  } else {
    return <False />;
  }
};

export default Conditional;
