const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const logos = {
  'vietcombank.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="vcbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00b14f" />
      <stop offset="100%" stop-color="#73c000" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="20" fill="url(#vcbGrad)"/>
  <path d="M30 35 L50 65 L70 35 L60 35 L50 50 L40 35 Z" fill="#ffffff"/>
  <path d="M50 50 L62 35 C68 45, 62 55, 50 50 Z" fill="#ffffff" opacity="0.8"/>
  <text x="50" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">VCB</text>
</svg>
  `,
  'prudential.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="pruGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ed1c24" />
      <stop offset="100%" stop-color="#a51419" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="20" fill="url(#pruGrad)"/>
  <circle cx="50" cy="45" r="22" fill="none" stroke="#ffffff" stroke-width="4"/>
  <path d="M35 65 C35 52, 65 52, 65 65" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none"/>
  <text x="50" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">PRUDENTIAL</text>
</svg>
  `,
  'coteccons.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="cotecGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f4c81" />
      <stop offset="100%" stop-color="#1f75fe" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="20" fill="url(#cotecGrad)"/>
  <path d="M30 30 H70 V40 H30 Z" fill="#ffffff"/>
  <path d="M40 45 H70 V55 H40 Z" fill="#f59e0b"/>
  <path d="M30 60 H60 V70 H30 Z" fill="#ffffff"/>
  <text x="50" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">COTECCONS</text>
</svg>
  `,
  'vinfast.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <rect width="100" height="100" rx="20" fill="#111111"/>
  <path d="M25 30 L45 70 H55 L75 30 L65 30 L50 60 L35 30 Z" fill="#ffffff"/>
  <path d="M25 30 C35 35, 65 35, 75 30" stroke="#ff0000" stroke-width="2" fill="none"/>
  <text x="50" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">VINFAST</text>
</svg>
  `,
  'goldengate.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="ggGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f26522" />
      <stop offset="100%" stop-color="#ed1c24" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="20" fill="url(#ggGrad)"/>
  <path d="M35 30 H65 V40 H35 Z" fill="#ffffff"/>
  <path d="M40 40 V65 H45 V40 Z" fill="#ffffff"/>
  <path d="M55 40 V65 H60 V40 Z" fill="#ffffff"/>
  <circle cx="50" cy="52" r="5" fill="#f59e0b"/>
  <text x="50" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">GOLDEN GATE</text>
</svg>
  `,
  'vinpearl.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="pearlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d4af37" />
      <stop offset="100%" stop-color="#aa7c11" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="20" fill="url(#pearlGrad)"/>
  <path d="M30 60 C35 55, 45 55, 50 60 C55 55, 65 55, 70 60 L65 40 L50 50 L35 40 Z" fill="#ffffff"/>
  <circle cx="50" cy="35" r="6" fill="#ffffff"/>
  <text x="50" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">VINPEARL</text>
</svg>
  `,
  'vinmec.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <rect width="100" height="100" rx="20" fill="#ffffff" stroke="#e9ecef" stroke-width="2"/>
  <path d="M40 30 H60 V70 H40 Z" fill="#ed1c24"/>
  <path d="M30 40 H70 V60 H30 Z" fill="#ed1c24"/>
  <path d="M45 45 H55 V55 H45 Z" fill="#ffffff"/>
  <text x="50" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="bold" fill="#0f4c81" text-anchor="middle">VINMEC</text>
</svg>
  `,
  'vinhomes.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="vhGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1f3a60" />
      <stop offset="100%" stop-color="#0f1e36" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="20" fill="url(#vhGrad)"/>
  <path d="M35 65 V35 L50 25 L65 35 V65 H55 V48 H45 V65 Z" fill="#d4af37"/>
  <text x="50" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">VINHOMES</text>
</svg>
  `,
  'fptedu.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="fptEduGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f37021" />
      <stop offset="100%" stop-color="#005ea6" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="20" fill="url(#fptEduGrad)"/>
  <path d="M50 25 L25 40 L50 55 L75 40 Z" fill="#ffffff"/>
  <path d="M30 46 V58 C30 65, 50 72, 50 72 C50 72, 70 65, 70 58 V46" fill="none" stroke="#ffffff" stroke-width="4"/>
  <text x="50" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">FPT EDU</text>
</svg>
  `
};

Object.entries(logos).forEach(([filename, content]) => {
  const filePath = path.join(assetsDir, filename);
  fs.writeFileSync(filePath, content.trim());
  console.log('Generated:', filename);
});
