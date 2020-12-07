import React from "react";

function InputFields() {
  const [field, setFeild] = useState();
  return (
    <div>
      <input
        type="text"
        value={field}
        onChange={(e) => setFeild(e.target.value)}
        style={{ padding: "20px" }}
      />
    </div>
  );
}

export default InputFields;
