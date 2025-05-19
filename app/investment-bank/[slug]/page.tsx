// app/investment-bank/[slug]/page.tsx
import InvestmentBankClient from '@/components/posts/investment-bank-client'
import { API_URL } from '@/lib/config';
import { Apiget }  from '@/lib/api/get';

// export async function generateStaticParams(): Promise<{ slug: string }[]> {
//   const allPosts: any[] = await Apiget(
//     `${API_URL}/api/posts`,
//     { sort: 'createdAt', limit: 1000, locale: 'en' }
//   );
//   return allPosts.map(post => ({ slug: post.route as string }));
// }

// no type annotation here—Next will supply { params, searchParams }
export default function Page({ params }: any) {
  return <InvestmentBankClient slug={params.slug} />;
}