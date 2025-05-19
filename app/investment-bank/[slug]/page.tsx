import InvestmentBankClient from '@/components/posts/investment-bank-client';
import { API_URL } from '@/lib/config';
import { Apiget } from '@/lib/api/get';

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ slug: any }[]> {
  const allPosts: any[] = await Apiget(`${API_URL}/api/posts`, {
    sort: 'createdAt',
    limit: 1000,
    locale: 'en',
  });

  return allPosts.map((post) => ({ slug: post.slug }));
}

export default function Page({ params }: { params: any }) {
  return <InvestmentBankClient slug={params.slug} />;
}
