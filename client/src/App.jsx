import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataFailure,
  fetchDataStart,
  fetchDataSuccess,
} from "./redux/slices/dataSlice";
import "./App.css";
import Header from "./components/Header";
import DataTable from "./components/Table";
import FilterComponent from "./components/Filters";
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import Graphs from "./pages/Graphs";

function App() {
  const { loading, error, data } = useSelector((state) => state.data);
  const [filterdData, setFilteredData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(fetchDataStart());
        const res = await fetch("/api/data");
        const dta = await res.json();
        if (dta.success === false) {
          dispatch(fetchDataFailure(dta.message));
        }
        dispatch(fetchDataSuccess(dta));
      } catch (err) {
        dispatch(fetchDataFailure(err));
      }
    };
    getData();
  }, []);
  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error.message}</div>; 
  }
  return (
    <>
    <BrowserRouter>
      <Header />
      <FilterComponent />
      <Routes>
        <Route path="/" element={<DataTable /> }/>
      <Route path="/graphs" element={<Graphs/>}/>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
