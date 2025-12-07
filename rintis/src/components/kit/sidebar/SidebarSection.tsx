import React from 'react';
import { NavSection } from '@/common/types/navigation';
import Typography from '@/components/Typography';
import SidebarItem from '@/components/kit/sidebar/SidebarItem';

interface SidebarSectionProps {
  section: NavSection;
  activeId?: string;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  section,
  activeId,
}) => {
  return (
    <div className="sidebar-section" style={{ marginBottom: '24px' }}>
      <Typography
        variant="caption"
        weight="bold"
        color="#666"
        style={{
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          marginBottom: '8px',
          display: 'block',
        }}
      >
        {section.title}
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {section.items.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            isActive={activeId === item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarSection;
