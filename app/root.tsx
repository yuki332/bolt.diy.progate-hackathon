import type { LinksFunction } from '@remix-run/cloudflare';
import { Links, Meta, Scripts, ScrollRestoration } from '@remix-run/react';
import tailwindReset from '@unocss/reset/tailwind-compat.css?url';
import { createHead } from 'remix-island';

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    href: '/favicon.svg',
    type: 'image/svg+xml',
  },
  { rel: 'stylesheet', href: tailwindReset },
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  },
];

export const Head = createHead(() => (
  <>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <Meta />
    <Links />
  </>
));

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ScrollRestoration />
      <Scripts />
    </>
  );
}

function MaintenancePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#e0e0e0',
        padding: '1rem',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '480px' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔧</div>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem', color: '#ffffff' }}>
          Under Maintenance
        </h1>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#a0aec0', marginBottom: '2rem' }}>
          We are currently performing scheduled maintenance.
          <br />
          Please check back shortly.
        </p>
        <div
          style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            borderRadius: '9999px',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            fontSize: '0.875rem',
            color: '#a0aec0',
          }}
        >
          bolt.diy
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <MaintenancePage />
    </Layout>
  );
}
