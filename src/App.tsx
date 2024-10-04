import { createGlobalStyle } from 'styled-components';
import DataTable from './components/DataTable';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100%;
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <DataTable/>
    </>
  );
}

export default App;
