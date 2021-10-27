// eslint-disable-next-line no-use-before-define
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Routes from "./container/routes/Routes";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <BrowserRouter>
    <ToastContainer />
    <QueryClientProvider client={queryClient}>
      <Routes />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
