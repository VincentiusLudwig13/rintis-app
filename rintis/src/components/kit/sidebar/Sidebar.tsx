import React from 'react';
import SidebarSection from './SidebarSection';
import Typography from '@/components/Typography';
import { navigationData } from '@/core/constants/navigationData';

interface SidebarProps {
  activeId?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeId }) => {
  return (
    <aside
      style={{
        width: '280px',
        height: '100vh',
        position: 'sticky',
        top: 0,
        overflowY: 'auto',
        padding: '24px 16px',
        borderRight: '1px solid #e5e5e5',
        backgroundColor: '#fff',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <Typography variant="h5" weight="bold" style={{ marginBottom: '4px' }}>
          Design System
        </Typography>
        <Typography variant="bodySmall" color="#666">
          Component Documentation
        </Typography>
      </div>

      {/* Navigation Sections */}
      <nav>
        {navigationData.map((section) => (
          <SidebarSection
            key={section.title}
            section={section}
            activeId={activeId}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
