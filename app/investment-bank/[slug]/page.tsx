import InvestmentBankClient from '@/components/posts/investment-bank-client';
import { API_URL } from '@/lib/config';
import { Apiget } from '@/lib/api/get';

export const dynamicParams = false;

interface Post {
  slug: string;
  id: string;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const allPosts: Post[] = await Apiget(`${API_URL}/api/posts`, {
    sort: 'createdAt',
    limit: 1000,
    locale: 'en',
  });

  return allPosts.map((post) => ({ slug: post.slug }));
}

type PageProps = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: PageProps) {
  return <InvestmentBankClient slug={params.slug} />;
}
