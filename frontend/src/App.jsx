import { Routes, Route } from "react-router-dom";

import { Home, CreateBooks, EditBooks, DeleteBooks, ShowBook } from "./pages";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/books/create" element={<CreateBooks />}></Route>
      <Route path="/books/edit/:id" element={<EditBooks />}></Route>
      <Route path="/books/delete/:id" element={<DeleteBooks />}></Route>
      <Route path="/books/details/:id" element={<ShowBook />}></Route>
    </Routes>
  );
};

export default App;
