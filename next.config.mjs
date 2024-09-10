/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Configuración para exportar el proyecto estáticamente
  basePath: '/portfolio-minimal', // Reemplaza con el nombre de tu repositorio
  assetPrefix: '/portfolio-minimal', // Reemplaza con el nombre de tu repositorio
  images: {
    unoptimized: true, // GitHub Pages no soporta imágenes optimizadas por Next.js
  },
};

export default nextConfig;
