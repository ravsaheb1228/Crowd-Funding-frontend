import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile, LandingPage } from './pages';

// Protected Route wrapper component
// const ProtectedRoute = ({ children }) => {
//   // Replace this with your actual auth check
//   const isAuthenticated = false; // This should come from your auth state management

//   if (!isAuthenticated) {
//     return <Navigate to="/landing" replace />;
//   }

//   return children;
// };

// Dashboard Layout component
const DashboardLayout = ({ children }) => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/landing" element={<LandingPage />} />
      
      {/* Protected routes */}
      <Route path="/home" element={
        // <ProtectedRoute>
          <DashboardLayout>
            <Home />
          </DashboardLayout>
        // </ProtectedRoute>
      } />
      
      <Route path="/profile" element={
        // <ProtectedRoute>
          <DashboardLayout>
            <Profile />
          </DashboardLayout>
        // </ProtectedRoute>
      } />
      
      <Route path="/create-campaign" element={
        // <ProtectedRoute>
          <DashboardLayout>
            <CreateCampaign />
          </DashboardLayout>
        // </ProtectedRoute>
      } />
      
      <Route path="/campaign-details/:id" element={
        // <ProtectedRoute>
          <DashboardLayout>
            <CampaignDetails />
          </DashboardLayout>
        // </ProtectedRoute>
      } />

      {/* Redirect unknown routes to landing */}
      <Route path="*" element={<Navigate to="/landing" replace />} />
    </Routes>
  );
};

export default App;