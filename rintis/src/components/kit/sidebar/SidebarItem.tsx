import React from 'react';
import { NavItem } from '@/common/types/navigation';
import Typography from '@/components/Typography';

interface SidebarItemProps {
  item: NavItem;
  isActive?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  isActive = false,
}) => {
  return (
    <a
      href={item.path}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '10px 12px',
        borderRadius: '6px',
        textDecoration: 'none',
        backgroundColor: isActive ? '#f0f0f0' : 'transparent',
        transition: 'background-color 0.2s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = '#f8f8f8';
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      {item.icon && (
        <span style={{ fontSize: '18px', lineHeight: 1 }}>{item.icon}</span>
      )}
      <Typography
        variant="bodySmall"
        weight={isActive ? 'bold' : 'regular'}
        color={isActive ? '#262626' : '#666'}
        component="span"
      >
        {item.label}
      </Typography>
    </a>
  );
};

export default SidebarItem;
