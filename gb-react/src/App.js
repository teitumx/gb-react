import "./App.css";
import Message from "./components/message";

function App() {
  const msg = [
    { id: 1, author: "Канье Уэст", message: "Hello world!" },
    { id: 2, author: "Ким Кардашьян", message: "Goodbye world!" },
  ];

  return (
    <div className="App">
      <Message message={msg} />
    </div>
  );
}
export default App;
