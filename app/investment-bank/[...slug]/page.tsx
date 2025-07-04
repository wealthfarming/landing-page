

import InvestmentBankClient from '@/components/posts/investment-bank-client';
import { API_URL } from '@/lib/config';
import { Apiget } from '@/lib/api/get';
import Head from 'next/head';

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  const allPosts: any[] = await Apiget(`${API_URL}/api/posts`, {
    sort: 'createdAt',
    limit: 1000,
    locale: 'en',
  });
  const locales = ['en', 'vi', 'fr'];
  return allPosts.flatMap((post) =>
    locales.map((locale) => ({
      slug: [locale, post.slug as string], // [locale, slug]
    }))
  );
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const [locale, slug] = params.slug; // get locale, slug from catch-all params

  // Validate locale
  const validLocales = ['en', 'vi', 'fr'];
  if (!validLocales.includes(locale)) {
    return <div>Ngôn ngữ không hợp lệ</div>;
  }

  // Fetch post data for the specific locale
  const allPosts: any[] = await Apiget(`${API_URL}/api/posts`, {
    sort: 'createdAt',
    limit: 0,
    locale: 'en', // Lấy ID từ en
  });

  const findDataId = allPosts.find((p: any) => p.slug === slug);
  const dataId = findDataId?.id ?? null;

  if (!dataId) {
    return <div>Không tìm thấy bài viết</div>;
  }

  const data = await Apiget(`${API_URL}/api/posts`, {
    'where[id][equals]': dataId,
    sort: 'createdAt',
    limit: 1,
    locale,
  });

  const post = data && data.length > 0 ? {
    id: data[0].id,
    title: data[0].title,
    description: data[0].description,
    image: data[0].image,
  } : null;

  return (
    <>
      <Head>
        {validLocales.map((lang) => (
          <link
            key={lang}
            rel="alternate"
            hrefLang={lang}
            href={`/investment-bank/${lang}/${slug}`}
          />
        ))}
      </Head>
      <InvestmentBankClient post={post} slug={slug} locale={locale} />
    </>
  );
}