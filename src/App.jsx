import { useFetch } from "./hooks";
import { Home } from "./pages";
import { Loading } from "./components";
import "./App.css";

export const App = () => {
  const { data, isLoading, error } = useFetch("epg");
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error !== null ? (
        alert(error)
      ) : (
        <Home data={data} isLoading={isLoading} />
      )}
    </>
  );
};
