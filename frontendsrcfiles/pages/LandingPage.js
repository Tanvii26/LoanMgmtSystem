import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Welcome</h1>
      <div>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/signin">
          <button>Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
