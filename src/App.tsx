import React, { useState } from "react";
import { Header } from "./components/header/Header.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Content } from "./components/content/Content.tsx";

const queryClient = new QueryClient();

const getInitialSearch = () => {
  return { query: "", page: 1 };
};

function App() {
  const [search, setSearch] = useState(getInitialSearch());

  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Header setSearch={setSearch} />
        <Content search={search} setSearch={setSearch} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
