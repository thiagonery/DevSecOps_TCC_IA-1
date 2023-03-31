import {
  Route,
  BrowserRouter as Router,
  Routes as _Routes,
} from 'react-router-dom';

import { BuildScreen } from '@screens/Build/BuildScreen';
import { CodeScreen } from '@screens/Code/CodeScreen';
import { DeployScreen } from '@screens/Deploy/DeployScreen';
import { OperateScreen } from '@screens/Operate/OperateScreen';
import { PlanScreen } from '@screens/Plan/PlanScreen';
import { ReleaseScreen } from '@screens/Release/ReleaseScreen';
import { TestScreen } from '@screens/Test/TestScreen';

export const Routes = () => {
  return (
    <Router>
      <_Routes>
        {['/', '/plan'].map((path) => (
          <Route path={path} key={path} element={<PlanScreen />} />
        ))}
        <Route path="/code" element={<CodeScreen />} />
        <Route path="/build" element={<BuildScreen />} />
        <Route path="/test" element={<TestScreen />} />
        <Route path="/deploy" element={<DeployScreen />} />
        <Route path="/release" element={<ReleaseScreen />} />
        <Route path="/operate" element={<OperateScreen />} />
      </_Routes>
    </Router>
  );
};
