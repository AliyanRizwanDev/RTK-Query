import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetTodosQuery } from "./rtkQuery/todoApi";

function App() {
  const { data, error, isLoading } = useGetTodosQuery();
  return (
    <>
      {isLoading ? (
        <h6>Loading...</h6>
      ) : error ? (
        <h6>Error: {error}</h6>
      ) : (
        data.map((item) => <h6 key={item.id}>{JSON.stringify(item)}</h6>)
      )}
    </>
  );
}

export default App;
