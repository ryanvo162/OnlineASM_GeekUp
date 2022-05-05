import React, { useEffect, useState } from "react";

export default function Question4() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [countUser10, setCountUser10] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          //set count + 1 if result is completed
          setCount(result.filter((item) => item.completed).length);
          //set countUser10 + 1 if result is uncompleted and userId is 10
          setCountUser10(
            result.filter(
              (item) => item.completed === false && item.userId === 10
            ).length
          );
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        Section 3: Implement chức năng đếm số lượng công việc đã hoàn thành, dựa trên data
        từ API https://jsonplaceholder.typicode.com/todos.
        <br />
        Gọi API để biết được số lượng công việc chưa hoàn thành của user có id
        10.
        <br />
        <br />
        <ul>
          <li>Số task đã hoàn thành trong list: {count}</li>
          <li>Số task user có id 10 chưa hoàn thành: {countUser10}</li>
        </ul>
      </div>
    );
  }
}
