import { useEffect, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    {
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    }
  ]);

  useEffect(() => {
    fetchTodosFromServer();
  }, []);

  const onTodoDataFetch = async () => {
    fetchTodosFromServer();
  };

  async function fetchTodosFromServer() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await res.json();
    setTodos(json);
  }

  return (
    <>
      <p>데이터 fetching과 useEffect 훅</p>
      <hr/>
      <button onClick={onTodoDataFetch}>서버에서 데이터 가져오기</button>
      <p>할일 목록</p>
      <ul>
        {
          todos.map(todo => <li>{todo.title} - {todo.completed ? '완료' : '진행중'}</li>)
        }
      </ul>
    </>
  );
}