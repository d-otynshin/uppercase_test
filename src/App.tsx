import React, { useState } from "react";
import { Header } from "./components/header/Header.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Content } from "./components/content/Content.tsx";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Header setQuery={setQuery} />
        <Content query={query} page={currentPage} setPage={setCurrentPage} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
