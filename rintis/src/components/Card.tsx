'use client';

interface CardProps {
  type?: 'outlined' | 'fill';
  color?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({
  type = 'outlined',
  color,
  children,
  className = '',
  onClick,
}: Readonly<CardProps>) {
  const base = 'p-5 rounded-[20px]';

  return (
    <div
      className={`${base} ${className} ${type === 'outlined' ? 'border border-gray-300 bg-white' : ''}`}
      style={type === 'fill' ? { backgroundColor: color } : {}}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
