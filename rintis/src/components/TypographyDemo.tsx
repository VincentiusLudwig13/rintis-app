// Demo Component
import Typography from '@/components/Typography';

const TypographyDemo = () => {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '32px', fontFamily: "'Poppins', sans-serif" }}>
        Typography System
      </h1>

      {/* Headings */}
      <section style={{ marginBottom: '48px' }}>
        <h2
          style={{
            marginBottom: '24px',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '24px',
          }}
        >
          Headings
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Typography variant="h1">
            H1 - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="h2">
            H2 - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="h3">
            H3 - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="h4">
            H4 - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="h5">
            H5 - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="h6">
            H6 - The quick brown fox jumps over the lazy dog
          </Typography>
        </div>
      </section>

      {/* Body Large */}
      <section style={{ marginBottom: '48px' }}>
        <h2
          style={{
            marginBottom: '24px',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '24px',
          }}
        >
          Body Large
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="bodyLarge" weight="bold">
            Bold - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="bodyLarge" italic>
            Italic - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="bodyLarge">
            Regular - The quick brown fox jumps over the lazy dog
          </Typography>
        </div>
      </section>

      {/* Body Medium */}
      <section style={{ marginBottom: '48px' }}>
        <h2
          style={{
            marginBottom: '24px',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '24px',
          }}
        >
          Body Medium
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="bodyMedium" weight="bold">
            Bold - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="bodyMedium" italic>
            Italic - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="bodyMedium">
            Regular - The quick brown fox jumps over the lazy dog
          </Typography>
        </div>
      </section>

      {/* Body Small */}
      <section style={{ marginBottom: '48px' }}>
        <h2
          style={{
            marginBottom: '24px',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '24px',
          }}
        >
          Body Small
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="bodySmall" weight="bold">
            Bold - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="bodySmall" italic>
            Italic - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="bodySmall">
            Regular - The quick brown fox jumps over the lazy dog
          </Typography>
        </div>
      </section>

      {/* Caption */}
      <section style={{ marginBottom: '48px' }}>
        <h2
          style={{
            marginBottom: '24px',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '24px',
          }}
        >
          Caption
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="caption" weight="bold">
            Bold - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="caption" italic>
            Italic - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="caption">
            Regular - The quick brown fox jumps over the lazy dog
          </Typography>
        </div>
      </section>

      {/* Pixie */}
      <section style={{ marginBottom: '48px' }}>
        <h2
          style={{
            marginBottom: '24px',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '24px',
          }}
        >
          Pixie
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="pixie" weight="bold">
            Bold - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="pixie" italic>
            Italic - The quick brown fox jumps over the lazy dog
          </Typography>
          <Typography variant="pixie">
            Regular - The quick brown fox jumps over the lazy dog
          </Typography>
        </div>
      </section>

      {/* Usage Example */}
      <section
        style={{
          marginTop: '64px',
          padding: '24px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
        }}
      >
        <Typography variant="h4" style={{ marginBottom: '16px' }}>
          Usage Example
        </Typography>
        <pre
          style={{
            backgroundColor: '#fff',
            padding: '16px',
            borderRadius: '4px',
            overflow: 'auto',
            fontSize: '12px',
          }}
        >
          {`<Typography variant="h1">
  Heading Text
</Typography>

<Typography variant="bodyMedium" weight="bold">
  Bold body text
</Typography>

<Typography variant="bodyMedium" italic>
  Italic body text
</Typography>

<Typography variant="caption" color="#666">
  Caption with custom color
</Typography>`}
        </pre>
      </section>
    </div>
  );
};

export default TypographyDemo;
