import {appRouter} from "./Router/appRouter"
import './App.css';
import { RouterProvider } from 'react-router';

function App() {
  return (
  <RouterProvider  router={appRouter}/>
  );
}

export default App;
