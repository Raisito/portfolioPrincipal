// Componentes de iconos para tecnologías específicas
export function JavaScriptIcon({
  className = "w-8 h-8",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M7.5 15.5c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5V9h-1.5v6.5c0 .5-.5 1-1 1s-1-.5-1-1h-1.5z"
        fill="#000"
      />
      <path
        d="M14 15.5c0 1.5 1.5 2.5 3 2.5 1.5 0 2.5-1 2.5-2.5 0-1.5-1-2-2.5-2.5-1-.5-1.5-.5-1.5-1s.5-1 1-1c.5 0 1 .5 1 1h1.5c0-1.5-1-2.5-2.5-2.5s-2.5 1-2.5 2.5c0 1.5 1 2 2.5 2.5 1 .5 1.5.5 1.5 1s-.5 1-1 1-1-.5-1-1H14z"
        fill="#000"
      />
    </svg>
  );
}

export function ReactIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 841.9 595.3"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="none"
    >
      <g fill="none" stroke="#61DAFB" strokeWidth="20">
        <ellipse
          cx="420.9"
          cy="296.5"
          rx="135.5"
          ry="338.5"
          transform="rotate(60 420.9 296.5)"
        />
        <ellipse
          cx="420.9"
          cy="296.5"
          rx="135.5"
          ry="338.5"
          transform="rotate(-60 420.9 296.5)"
        />
        <ellipse cx="420.9" cy="296.5" rx="135.5" ry="338.5" />
      </g>
      <circle cx="420.9" cy="296.5" r="45.7" fill="#61DAFB" />
    </svg>
  );
}

export function HTMLIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M3 2l1.5 17L12 21l7.5-2L21 2H3z" fill="#E34F26" />
      <path d="M12 3v16.5l6-1.5L19.5 3H12z" fill="#FF5722" />
      <path
        d="M6 8h12l-.5 2H8.5l.5 2h8l-.5 6-4 1-4-1-.5-3h2l.25 1.5L12 16.5l1.75-.5L14 14H8l-1-8z"
        fill="#fff"
      />
    </svg>
  );
}

export function CSSIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M3 2l1.5 17L12 21l7.5-2L21 2H3z" fill="#1572B6" />
      <path d="M12 3v16.5l6-1.5L19.5 3H12z" fill="#33A9DC" />
      <path
        d="M6 8h12l-.5 2H8.5l.5 2h8l-.5 6-4 1-4-1-.5-3h2l.25 1.5L12 16.5l1.75-.5L14 14H8l-1-8z"
        fill="#fff"
      />
    </svg>
  );
}

export function NodeIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" fill="#339933" />
      <path d="M12 2v20l10-5V7l-10-5z" fill="#66BB6A" />
      <path d="M8 9v6l4 2 4-2V9l-4-2-4 2z" fill="#fff" />
    </svg>
  );
}

export function NextJSIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#000" />
      <path d="M9 9h6v1.5H9V9zm0 3h6v1.5H9V12zm0 3h4v1.5H9V15z" fill="#fff" />
      <path d="M15 9v7.5l3-1.5V9h-3z" fill="#fff" />
    </svg>
  );
}

export function TailwindIcon({
  className = "w-8 h-8",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.12 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.48 6 12 6z"
        fill="#06B6D4"
      />
      <path
        d="M7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.12 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.48 12 7 12z"
        fill="#06B6D4"
      />
    </svg>
  );
}

export function TypeScriptIcon({
  className = "w-8 h-8",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M9 15.5V9h1.5v6.5c0 .5.5 1 1 1s1-.5 1-1V9H14v6.5c0 1.5-1 2.5-2.5 2.5S9 17 9 15.5z"
        fill="#fff"
      />
      <path d="M15.5 9H19v1.5h-1.25V18H16.25V10.5H15.5V9z" fill="#fff" />
    </svg>
  );
}

export function MySQLIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C8 2 5 5.5 5 10c0 3.5 2 6.5 5 8v2c0 1 1 2 2 2s2-1 2-2v-2c3-1.5 5-4.5 5-8 0-4.5-3-8-7-8z"
        fill="#47A248"
      />
      <path
        d="M12 2v18c1 0 2-1 2-2v-2c3-1.5 5-4.5 5-8 0-4.5-3-8-7-8z"
        fill="#4DB33D"
      />
      <ellipse cx="12" cy="10" rx="3" ry="4" fill="#fff" />
    </svg>
  );
}

export function PostgreSQLIcon({
  className = "w-8 h-8",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C8 2 5 4.5 5 8v8c0 2 1.5 4 4 4h6c2.5 0 4-2 4-4V8c0-3.5-3-6-7-6z"
        fill="#336791"
      />
      <ellipse cx="12" cy="8" rx="4" ry="3" fill="#fff" />
      <path d="M8 12h8v4c0 1-1 2-2 2h-4c-1 0-2-1-2-2v-4z" fill="#fff" />
    </svg>
  );
}

export function GitIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M21.5 11.5L12.5 2.5c-.5-.5-1.5-.5-2 0L2.5 11.5c-.5.5-.5 1.5 0 2l8 8c.5.5 1.5.5 2 0l9-9c.5-.5.5-1.5 0-2z"
        fill="#F05032"
      />
      <path d="M12 6l-3 3 3 3 3-3-3-3z" fill="#fff" />
    </svg>
  );
}

export function DockerIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="10" width="3" height="3" fill="#2496ED" />
      <rect x="6" y="10" width="3" height="3" fill="#2496ED" />
      <rect x="10" y="10" width="3" height="3" fill="#2496ED" />
      <rect x="14" y="10" width="3" height="3" fill="#2496ED" />
      <rect x="6" y="7" width="3" height="3" fill="#2496ED" />
      <rect x="10" y="7" width="3" height="3" fill="#2496ED" />
      <rect x="10" y="4" width="3" height="3" fill="#2496ED" />
      <path
        d="M18 10c0-1 1-2 2-2s2 1 2 2v3c0 2-2 4-4 4H4c-1 0-2-1-2-2v-5h16z"
        fill="#2496ED"
      />
    </svg>
  );
}

export function AWSIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M6 14c0 1 .5 2 1.5 2.5L12 18l4.5-1.5c1-.5 1.5-1.5 1.5-2.5V8c0-1-.5-2-1.5-2.5L12 4 7.5 5.5C6.5 6 6 7 6 8v6z"
        fill="#FF9900"
      />
      <path
        d="M12 4v14l4.5-1.5c1-.5 1.5-1.5 1.5-2.5V8c0-1-.5-2-1.5-2.5L12 4z"
        fill="#FF6600"
      />
      <path d="M9 10h6v2H9v-2zm0-2h6v1H9V8z" fill="#fff" />
    </svg>
  );
}

export function FigmaIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M8 2h4v4H8c-1 0-2-1-2-2s1-2 2-2z" fill="#F24E1E" />
      <path d="M12 2h4c1 0 2 1 2 2s-1 2-2 2h-4V2z" fill="#FF7262" />
      <path d="M8 6h4v4H8c-1 0-2-1-2-2s1-2 2-2z" fill="#A259FF" />
      <path d="M12 6h4c1 0 2 1 2 2s-1 2-2 2h-4V6z" fill="#1ABCFE" />
      <path d="M8 10h4v4c0 1-1 2-2 2s-2-1-2-2v-4z" fill="#0ACF83" />
      <circle cx="16" cy="12" r="2" fill="#1ABCFE" />
    </svg>
  );
}

export function MaterialUIIcon({
  className = "w-8 h-8",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <g>
        <polygon points="2,6 16,14.5 16,28 2,19.5" fill="#0081CB" />
        <polygon points="16,14.5 30,6 30,19.5 16,28" fill="#0081CB" />
        <polygon points="16,3 28.5,10.5 16,18 3.5,10.5" fill="#0081CB" />
        <polygon points="16,18 16,28 30,19.5 30,9.5" fill="#00B0FF" />
        <polygon points="16,18 16,28 2,19.5 2,9.5" fill="#00B0FF" />
      </g>
    </svg>
  );
}

export function PHPIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="10" ry="7" fill="#8993be" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
        fontSize="8"
        fill="#232531"
      >
        PHP
      </text>
    </svg>
  );
}

export function LaravelIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <g>
        <polygon points="2,22 10,26 16,22 8,18" fill="#F55247" />
        <polygon points="16,22 22,26 30,22 24,18" fill="#F55247" />
        <polygon points="8,18 16,14 24,18 16,22" fill="#F55247" />
        <polygon
          points="16,2 2,10 8,18 16,14 24,18 30,10 16,2"
          fill="#fff"
          stroke="#F55247"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

export function SymfonyIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" fill="#000" />
      <path
        d="M22.5 21.5c-1.5 2-4.5 2.5-7 1.5-2.5-1-3.5-3.5-2.5-5.5 1-2 3.5-2.5 5.5-1.5 1.5.5 2.5 2 2 3.5-.5 1.5-2.5 2-3.5 1.5"
        stroke="#fff"
        strokeWidth="1.5"
        fill="none"
      />
      <text
        x="16"
        y="19"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="bold"
        fontSize="8"
        fill="#fff"
      >
        S
      </text>
    </svg>
  );
}

export function VSCodeIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M3 6l4.5-3L21 6v12l-13.5 3L3 18V6z" fill="#007ACC" />
      <path d="M7 8l5 4-5 4V8z" fill="#fff" />
    </svg>
  );
}

export function WordpressIcon({
  className = "w-8 h-8",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#21759B" />
      <path
        d="M12 4C8.1 4 5 7.1 5 11c0 2.2 1 4.2 2.5 5.5L12 8l4.5 8.5C18 15.2 19 13.2 19 11c0-3.9-3.1-7-7-7z"
        fill="#fff"
      />
      <path d="M12 8l-2 4 2 4 2-4-2-4z" fill="#21759B" />
    </svg>
  );
}

export function PostmanIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#FF6C37" />
      <path
        d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 1.5c2.5 0 4.5 2 4.5 4.5S14.5 16.5 12 16.5 7.5 14.5 7.5 12 9.5 7.5 12 7.5z"
        fill="#fff"
      />
    </svg>
  );
}

export function BootstrapIcon({
  className = "w-8 h-8",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#7952B3" />
      <path
        d="M9 6h4.5c1.5 0 3 1 3 2.5s-1.5 2.5-3 2.5H9V6zm0 5h4c1.5 0 3 1 3 2.5s-1.5 2.5-3 2.5H9v-5z"
        fill="#fff"
      />
      <path
        d="M10.5 8.5h2c.5 0 1-.5 1-1s-.5-1-1-1h-2v2zm0 5h2c.5 0 1-.5 1-1s-.5-1-1-1h-2v2z"
        fill="#7952B3"
      />
    </svg>
  );
}

export function ShadcnIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#000" />
      <path
        d="M7 12c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z"
        fill="#fff"
      />
      <path
        d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
        fill="#000"
      />
    </svg>
  );
}

export function SupabaseIcon({
  className = "w-8 h-8",
}: {
  className?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" fill="#3ECF8E" />
      <path d="M12 2v20l9-5V7l-9-5z" fill="#2A9D8F" />
      <path d="M9 10h6v4H9v-4z" fill="#fff" />
    </svg>
  );
}
