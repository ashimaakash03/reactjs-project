import False from "./False";
import True from "./True";

const Conditional = () => {
  const condition = true;

  return condition ? <True /> : <False />;
};

export default Conditional;
