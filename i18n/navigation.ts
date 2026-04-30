import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Exporta useRouter, usePathname, Link y redirect 
// con awareness de locales — úsalos en vez de next/navigation
export const { useRouter, usePathname, Link, redirect } = createNavigation(routing);
