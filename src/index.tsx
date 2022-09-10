import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalThemeProvider from "Shared/globalStyle";
const boot = async () => {
  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

  const queryClient = new QueryClient();
  // await queryClient.fetchQuery(["USER_TOKEN"], () => {
  //   const userData = JSON.parse(localStorage.getItem("memory-user") || "{}");
  //   return userData;
  // });
  // await queryClient.fetchQuery(["USER_DATA"], getUser);
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <GlobalThemeProvider>
          <App />
        </GlobalThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  );
};
boot();
