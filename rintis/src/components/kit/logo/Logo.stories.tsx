import type { Meta, StoryObj } from '@storybook/react';
import LogoDisplay from './LogoDisplay';
import Logo from '@/components/Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'grayscale'],
    },
    size: {
      control: 'select',
      options: ['big', '48', '64', '96', '128'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

// 🎯 Playground
export const Playground: Story = {
  args: {
    variant: 'default',
    size: 'big',
  },
};

// 🎨 Semua varian
export const Variants: Story = {
  render: () => (
    <div className="space-y-10">
      <div>
        <h3 className="font-semibold mb-2">Default</h3>
        <Logo variant="default" size="96" />
      </div>

      <div>
        <h3 className="font-semibold mb-2">Grayscale</h3>
        <Logo variant="grayscale" size="96" />
      </div>
    </div>
  ),
};

// 📐 Semua ukuran
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      {['big', '48', '64', '96', '128'].map((s) => (
        <div key={s} className="flex flex-col items-center gap-2">
          <Logo size={s as any} variant="default" />
          <p className="text-sm">{s}</p>
        </div>
      ))}
    </div>
  ),
};

// 🧩 Showcase lengkap
export const Showcase: Story = {
  render: () => <LogoDisplay />,
};
