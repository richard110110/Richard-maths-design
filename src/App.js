//import router
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import components
import Home from "./Components/Home";
//import styleenginerprovider
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
