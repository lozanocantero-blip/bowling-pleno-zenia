import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Excluir archivos estáticos y API routes
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
