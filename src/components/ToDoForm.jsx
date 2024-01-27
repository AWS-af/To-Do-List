import React, { useEffect, useRef, useState } from "react";

function ToDoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  }
  return (
    <div className="form_container" onSubmit={handleSubmit}>
      <form>
        {props.edit ? (
          <>
            <input
              type="text"
              name="text"
              value={input}
              className="fomr_input"
              placeholder="Edit Text"
              onChange={handleChange}
              ref={inputRef}
            />
            <input type="submit" value="update to do" className="form_button" />
          </>
        ) : (
          <>
            <input
              type="text"
              name="text"
              value={input}
              className="fomr_input"
              placeholder="Enter text"
              onChange={handleChange}
              ref={inputRef}
            />
            <input type="submit" value="Add to do" className="form_button" />
          </>
        )}
      </form>
    </div>
  );
}

export default ToDoForm;
