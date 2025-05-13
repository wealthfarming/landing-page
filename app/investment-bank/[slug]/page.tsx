// app/investment-bank/[slug]/page.tsx
import InvestmentBankClient from './investment-bank-client';
import { API_URL }           from '@/lib/config';
import { Apiget }            from '@/lib/api/get';

export async function generateStaticParams() {
  // 1. fetch all posts (or however many slugs you have)
  const allPosts: any[] = await Apiget(
    API_URL + '/api/posts',
    { sort: 'createdAt', limit: 1000, locale: 'en' }
  );

  // 2. return an array of { slug } objects
  return allPosts.map(post => ({
    slug: post.route   // whatever field holds your slug
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  // just forward the slug into your client component
  return <InvestmentBankClient slug={params.slug} />;
}
