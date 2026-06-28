import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserDetail from './pages/UserDetail';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--color-bg-primary)] font-sans">

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#111827',
              color: '#f8fafc',
              border: '1px solid #374151',
            },
          }}
        />

        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/user/:id"
            element={<UserDetail />}
          />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;