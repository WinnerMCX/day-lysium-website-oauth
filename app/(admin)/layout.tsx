import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Admin</h1>
      {children}
    </div>
  );
};

export default layout;
