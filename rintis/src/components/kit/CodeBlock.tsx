import React from 'react';

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  style?: React.CSSProperties;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, language, style }) => {
  return (
    <div
      style={{
        padding: '16px',
        backgroundColor: '#1e1e1e',
        borderRadius: '8px',
        fontFamily: 'monospace',
        fontSize: '14px',
        color: '#d4d4d4',
        overflowX: 'auto',
        lineHeight: '1.5',
        marginTop: '8px',
        ...style,
      }}
    >
      {language && (
        <div style={{ marginBottom: '8px', color: '#888', fontSize: '12px' }}>
          {language}
        </div>
      )}
      <pre style={{ margin: 0 }}>
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
