import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./components/layout/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { blue } from "@mui/material/colors";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";

function App() {
  const theme = createTheme({
    palette: { primary: blue },
  });

  // テーマ(https://mui.com/material-ui/customization/theming/)
  return (
    <ThemeProvider theme={theme}>
      {/* デフォルトのCSSをリセット */}
      <CssBaseline>
        <BrowserRouter>
          <Routes>
            {/* AuthLayoutはLoginとRegisterに共通するコンポーネント */}
            <Route path="/" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="memo" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
