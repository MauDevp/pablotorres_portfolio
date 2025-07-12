export function ResourceHints() {
  return (
    <>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="https://prod-files-secure.s3.us-west-2.amazonaws.com" />
      <link rel="dns-prefetch" href="https://s3.us-west-2.amazonaws.com" />
      
      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="/fonts/space-grotesk-v15-latin-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/manrope-v14-latin-400.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* Preload critical CSS */}
      <link
        rel="preload"
        href="/_next/static/css/app.css"
        as="style"
      />
      
      {/* Prefetch important routes */}
      <link rel="prefetch" href="/api/case-studies" />
      
      {/* Resource hints for images */}
      <link rel="preload" href="/profile/Pablo_perfil_3.png" as="image" />
      
      {/* Modern image format support detection */}
      <meta name="color-scheme" content="light dark" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000" />
    </>
  );
}
