const cspDirectives = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self'",
  "connect-src 'self'",
  "object-src 'none'"
].join("; ");

const permissionsPolicy = [
  "accelerometer=()",
  "camera=()",
  "geolocation=()",
  "gyroscope=()",
  "microphone=()",
  "payment=()",
  "usb=()"
].join(", ");

const coop = "same-origin";
const coep = "require-corp";
const corp = "same-origin";

export default function Head() {
  return (
    <>
      <meta httpEquiv="Content-Security-Policy" content={cspDirectives} />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="Permissions-Policy" content={permissionsPolicy} />
      <meta httpEquiv="Cross-Origin-Opener-Policy" content={coop} />
      <meta httpEquiv="Cross-Origin-Embedder-Policy" content={coep} />
      <meta httpEquiv="Cross-Origin-Resource-Policy" content={corp} />
    </>
  );
}

