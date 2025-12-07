'use client';

import React, { ReactNode } from 'react';
import Sidebar from '@/components/kit/sidebar/Sidebar';
import Typography from '@/components/Typography';

interface DocsLayoutProps {
  children: ReactNode;
  activeId?: string;
  title?: string;
  description?: string;
}

const DocsLayout: React.FC<DocsLayoutProps> = ({
  children,
  activeId,
  title,
  description,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#fafafa',
      }}
    >
      <Sidebar activeId={activeId} />

      <main
        style={{
          flex: 1,
          padding: '40px 48px',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {(title || description) && (
          <header style={{ marginBottom: '40px' }}>
            {title && (
              <Typography
                variant="h2"
                weight="bold"
                style={{ marginBottom: '12px' }}
              >
                {title}
              </Typography>
            )}
            {description && (
              <Typography variant="bodyLarge" color="#666">
                {description}
              </Typography>
            )}
          </header>
        )}

        <div>{children}</div>
      </main>
    </div>
  );
};

export default DocsLayout;
