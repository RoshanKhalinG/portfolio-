import { ThemeProvider } from '@emotion/react';
import './App.css';
import styled from '@emotion/styled';
import { DarkMode } from '@mui/icons-material';
import { darkTheme } from './utils/Themes';
import Hero from './componants/HeroSection/Index';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      
      <Navbar/>
           <Body>
              <Hero></Hero>
           </Body>
    </ThemeProvider>
  );
}
 
export default App;
