import type { FormEvent } from "react";
import "./App.css";

const sendForm = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const { name, password } = event.target as typeof event.target & {
    name: { value: string };
    password: { value: string };
  };
  console.log("name :", name.value, "password :", password.value);
};
//   await fetch("/route", {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify({
//       name: name.value,
//       password: password.value,
//     }),
//   });
// };

function App() {
  return (
    <form
      className="wrap "
      onSubmit={(evt) => {
        sendForm(evt);
      }}
    >
      <fieldset className="field-area">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
      </fieldset>
      <fieldset className="field-area">
        <label htmlFor="password">Pass:</label>
        <input type="password" id="password" />
      </fieldset>
      <button type="submit">login</button>
    </form>
  );
}

export default App;
