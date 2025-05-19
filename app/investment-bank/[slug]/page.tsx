import InvestmentBankClient from '@/components/posts/investment-bank-client';
import { API_URL } from '@/lib/config';
import { Apiget } from '@/lib/api/get';

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ slug: string; locale: string }[]> {
  const locales = ['en', 'vi', 'fr'];

  const results = await Promise.all(
    locales.map(locale =>
      Apiget(`${API_URL}/api/posts`, {
        sort: 'createdAt',
        limit: 1000,
        locale
      }).then(posts =>
        posts.map((post: any) => ({
          slug: post.route,  // use route or slug, whichever is correct
          locale: locale
        }))
      )
    )
  );

  return results.flat().filter(post => post.slug);
}

export default function Page({ params }: { params: { slug: string; locale: string } }) {
  return <InvestmentBankClient slug={params.slug} />;
}
