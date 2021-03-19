import "./App.css";
import Routes from "./Routes/Routes";
import Layout from "./Components/Layout.js";

function App() {
   return (
      <div className="App">
         <Layout>
            <Routes />
         </Layout>
      </div>
   );
}

export default App;
