// app/investment-bank/[slug]/page.tsx
import InvestmentBankClient from '@/components/posts/investment-bank-client'
import { API_URL } from '@/lib/config';
import { Apiget }  from '@/lib/api/get';

export const dynamicParams = false;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const locales = ['en', 'vi', 'fr'];

  const results = await Promise.all(
    locales.map(locale =>
      Apiget(`${API_URL}/api/posts`, {
        sort: 'createdAt',
        limit: 1000,
        locale
      }).then(posts =>
        posts.map((post: any) => ({
          slug: post?.slug
        }))
      )
    )
  );

  const allSlugs = results.flat().filter(post => post.slug);

  return allSlugs;
}

// no type annotation here—Next will supply { params, searchParams }
export default function Page({ params }: any) {
  return <InvestmentBankClient slug={params.slug} />;
}