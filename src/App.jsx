import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { axiosInstance } from "./axios";
import Navbar from "./components/Navbar/Navbar";
import Books from "./components/Books/Books";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import "./App.css";

export const SearchQueryContext = React.createContext();
export const LoaderContext = React.createContext();

function App() {
  const [booksData, setBooksData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (searchQuery === "") {
      setLoader(true);
      axiosInstance.get("/books").then((res) => {
        setBooksData(res.data);
        setLoader(false);
        
      });
    } else {
      setLoader(true);
      axiosInstance.post("/search", { query: searchQuery }).then((res) => {
        setBooksData(res.data);
        setLoader(false);
      });
    }
  }, [searchQuery]);

  return (
    <>
      <SearchQueryContext.Provider value={{ searchQuery, setSearchQuery }}>
        <LoaderContext.Provider value={{ loader, setLoader }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Books data={booksData} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </LoaderContext.Provider>
      </SearchQueryContext.Provider>
    </>
  );
}

export default App;
