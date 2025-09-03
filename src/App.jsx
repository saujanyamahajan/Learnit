import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
      setCount(count + 1);
    }
    return <button onClick={handleClick}> click {count}</button>;
  }
  function MyButtons({ count, onClick }) {
    return <button onClick={onClick}>click {count} times</button>;
  }
  const products = [
    { title: "Cabbage", id: 1, isFruit: false },
    { title: "Garlic", id: 2, isFruit: false },
    { title: "Apple", id: 3, isFruit: true },
  ];

  function handleClick() {
    setCount(count + 1);
  }

  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? "magenta" : "green" }}
    >
      {product.title}
    </li>
  ));

  const user = {
    name: "xxx",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };
  return (
    <>
      <div>
        <h1>Counters update seperately</h1>
        <MyButton />
        <MyButton />
      </div>
      <div>
        <h1> Counters update together</h1>
        <MyButtons count={count} onClick={handleClick} />
        <MyButtons count={count} onClick={handleClick} />
      </div>
      <h1>{user.name}</h1>
      <img className="avatar" src={user.imageUrl} />
      <ul>{listItems}</ul>

      <button onClick={handleClick}>click {count} times</button>
    </>
  );
}

export default App;
