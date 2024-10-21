import { Link } from '@/containers/link/link';
import { Container, CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <CssBaseline />
      <main>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Link />} />
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;
