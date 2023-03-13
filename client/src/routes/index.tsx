import {
  Route,
  BrowserRouter as Router,
  Routes as _Routes,
} from 'react-router-dom';

import { HomeScreen } from '@screens/Home/HomeScreen';

export const Routes = () => {
  return (
    <Router>
      <_Routes>
        {['/', '/home'].map((path) => (
          <Route path={path} key={path} element={<HomeScreen />} />
        ))}
      </_Routes>
    </Router>
  );
};
