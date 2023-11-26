import React, { useState, useEffect } from 'react';
import GithubProfile from './GithubProfile';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="text-center  mx-auto w-screen">
      {loading ? (
        <div className="w-[100vw] h-screen flex items-center justify-center bg-black ">
          <ClimbingBoxLoader color={'#ffff'} loading={loading} size={20} aria-label="Loading Spinner" data-testid="loader" />
        </div>
      ) : (
        <GithubProfile />
      )}
    </div>
  );
}

export default App;
