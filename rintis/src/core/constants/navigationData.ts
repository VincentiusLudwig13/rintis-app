import { NavSection } from '@/common/types/navigation';

export const navigationData: NavSection[] = [
  {
    title: 'Foundation',
    items: [
      {
        id: 'kit',
        label: 'Rintis Kit',
        path: '/kit',
        icon: '🎨',
      },
      {
        id: 'useTheme',
        label: 'useTheme',
        path: '/kit/use-theme',
        icon: '🖌️',
      },
      {
        id: 'typography',
        label: 'Typography',
        path: '/kit/typography',
        icon: '📝',
      },
      { id: 'colors', label: 'Colors', path: '/kit/colors', icon: '🎨' },
      { id: 'spacing', label: 'Spacing', path: '/kit/spacing', icon: '📏' },
      { id: 'icons', label: 'Icons', path: '/kit/icons', icon: '⭐' },
    ],
  },
  {
    title: 'Components',
    items: [
      { id: 'button', label: 'Button', path: '/kit/button', icon: '🔘' },
      { id: 'input', label: 'Input', path: '/kit/input', icon: '✏️' },
      { id: 'card', label: 'Card', path: '/kit/card', icon: '🃏' },
      { id: 'modal', label: 'Modal', path: '/kit/modal', icon: '🪟' },
      { id: 'dropdown', label: 'Dropdown', path: '/kit/dropdown', icon: '📋' },
      { id: 'tabs', label: 'Tabs', path: '/kit/tabs', icon: '📑' },
      { id: 'table', label: 'Table', path: '/kit/table', icon: '📊' },
      { id: 'logo', label: 'Logo', path: '/kit/logo', icon: '🌿' },
    ],
  },
  {
    title: 'Common',
    items: [
      {
        id: 'styledFlexDiv',
        label: 'StyledFlexDiv',
        path: '/kit/common/styled-flex-div',
        icon: '📏',
      },
    ],
  },
  {
    title: 'Patterns',
    items: [
      { id: 'forms', label: 'Forms', path: '/kit/forms', icon: '📄' },
      {
        id: 'navigation',
        label: 'Navigation',
        path: '/kit/navigation',
        icon: '🧭',
      },
      { id: 'feedback', label: 'Feedback', path: '/kit/feedback', icon: '💬' },
    ],
  },
];
