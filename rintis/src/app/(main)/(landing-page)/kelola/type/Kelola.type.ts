export interface KelolaStepType {
  id: number;
  title: string;
  description?: string;
  type?: 'input' | 'none';
  field?: 'cash' | 'omzet';
  placeholder?: string;
}

export interface IKelolaForm {
  cash: string;
  omzet: string;
}
