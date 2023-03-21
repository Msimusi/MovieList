import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  const [showing, setShowing] = useState(false);
  function Hello() {
    useEffect(function () {
      console.log("hi :)");
      return function () {
        console.log("bye :(");
      };
    }, []);
  }
  const onShowing = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onShowing}>{showing ? "Hide" : "Show"}</button>
      <input
        value={keyword}
        type="text"
        placeholder="Search Here..."
        onChange={onChange}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
