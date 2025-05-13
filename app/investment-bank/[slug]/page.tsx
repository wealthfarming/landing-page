// app/investment-bank/[slug]/page.tsx
import InvestmentBankClient from './investment-bank-client';
import { API_URL } from '@/lib/config';
import { Apiget } from '@/lib/api/get';

// Tell Next.js at build time which slugs to render
export async function generateStaticParams(): Promise<{ slug: any }[]> {
  const allPosts: any[] = await Apiget(
    `${API_URL}/api/posts`,
    { sort: 'createdAt', limit: 1000, locale: 'en' }
  );
  return allPosts.map(post => ({ slug: post.route as any }));
}

// Render the page, passing the slug prop into the client component
export default function Page({ params }: { params: { slug: any } }) {
  return <InvestmentBankClient slug={params.slug} />;
}