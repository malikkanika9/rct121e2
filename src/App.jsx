import {Routes,Route} from "react-router-dom"
import { Dashboard } from './Pages/Dashboard'
import { PageOne } from './Pages/RegisterPageOne'
import { PageTwo } from './Pages/RegisterPageTwo'
import { PrivateRoute } from './Pages/PrivateRoute'
function App() {
  return (
    <div className="App">
      <Routes>
       
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        <Route path="/register/one" element={<PageOne/>}/>
        <Route path="/register/two" element={<PrivateRoute><PageTwo/></PrivateRoute>}/>
      </Routes>
    </div>
  )
}

export default App