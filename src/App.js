import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const themeMode = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={themeMode}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode}/>
          <Feed />
          <Rightbar />
          <Add />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
