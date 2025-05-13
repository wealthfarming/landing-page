// app/investment-bank/[slug]/page.tsx
import InvestmentBankClient from './investment-bank-client';  // <-- exactly match your file name
import { API_URL } from '@/lib/config';
import { Apiget } from '@/lib/api/get';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const allPosts: any[] = await Apiget(
    `${API_URL}/api/posts`,
    { sort: 'createdAt', limit: 1000, locale: 'en' }
  );

  return allPosts.map(post => ({
    slug: post.route as string,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <InvestmentBankClient slug={params.slug} />;
}
