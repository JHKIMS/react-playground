import React, { useState } from "react";

export default function Form({value, setValue, handleSubmit}) {
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  return (
    <form style={{ display: "flex" }} onSubmit={handleSubmit}>
      <input
        type="text"
        name="value"
        style={{ flex: "10", padding: "5px" }}
        placeholder="come on dude"
        value={value}
        onChange={handleChange}
      />
      <input type="submit" value="Add" style={{ flex: "1" }} />
    </form>
  );
}
