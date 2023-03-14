import {
  Route,
  BrowserRouter as Router,
  Routes as _Routes,
} from 'react-router-dom';

import { BuildScreen } from '@screens/Build/BuildScreen';
import { CodeScreen } from '@screens/Code/CodeScreen';
import { PlanScreen } from '@screens/Plan/PlanScreen';

export const Routes = () => {
  return (
    <Router>
      <_Routes>
        {['/', '/plan'].map((path) => (
          <Route path={path} key={path} element={<PlanScreen />} />
        ))}
        <Route path="/code" element={<CodeScreen />} />
        <Route path="/build" element={<BuildScreen />} />
      </_Routes>
    </Router>
  );
};
