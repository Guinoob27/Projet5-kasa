import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Outlet />
      <p>test</p>
    </div>
  );
}

export default App;