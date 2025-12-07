export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}
