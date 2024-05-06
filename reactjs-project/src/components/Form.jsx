import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </form>
    </div>
  );
};

export default Form;
