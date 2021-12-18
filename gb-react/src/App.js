import React from "react";
import { AppRoutes } from "./components/Routes";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
import { Header } from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Header />
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
}
export default App;
