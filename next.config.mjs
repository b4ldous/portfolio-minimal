/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Habilita la exportación estática
  basePath: '/portfolio-minimal', // Cambia por el nombre exacto de tu repositorio
  assetPrefix: '/portfolio-minimal', // Nombre exacto del repositorio
  images: {
    unoptimized: true, // GitHub Pages no soporta imágenes optimizadas por Next.js
  },
};

export default nextConfig;
