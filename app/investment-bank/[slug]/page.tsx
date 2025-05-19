import InvestmentBankClient from '@/components/posts/investment-bank-client'

export default function Page({ params }: any) {
  return <InvestmentBankClient slug={params.slug} />;
}