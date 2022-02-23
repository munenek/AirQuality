import { Route, Routes } from 'react-router-dom';
import App from './App';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/en-us" exact element={<App lang={'en-us'} />} />
      <Route path="/hi-in" exact element={<App lang={'hi-in'} />} />
    </Routes>
  );
}

export default MainRoutes;
