import Header from "./components/Header";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  console.log(isLoggedIn);
  return <React.Fragment>
    <header>
      <Header />
    </header>
    <main>
  <Routes>
    { !isLoggedIn ?  (<Route path = "/auth" element={<Auth />} /> ):(
     <>
      <Route path = "/blogs" element={<Blogs />} />
      <Route path = "/blogs/add" element={<AddBlog />} />
      <Route path = "/myblogs" element={<UserBlogs />} />
      <Route path = "/myblogs/:id" element={<BlogDetail />} />
      </>
)}
    </Routes>
    </main>




  </React.Fragment>
}

export default App;
