'use client';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import FooterFull from '@/components/footer/footer-full';
import HeaderDesktopFull from '@/components/header/header-desktop';
import LessThanBase from '../../public/images/investment-bank/less.svg';
import Quest from '../../public/images/investment-bank/quest.png';
import Background_Slug from '../../public/images/investment-bank/background_slug.png';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { getCustomRichTextConverters } from '@/components/rich-text/custom-rich-text-converters';
import ButtonPrimary from '../custom-button/button-primary';
import { useRouter } from 'next/navigation';
import { ArrowsClockwise } from '@phosphor-icons/react';
import VideoBox from '../footer/video_box';
import { API_URL } from '@/lib/config';
import { useEffect, useState } from 'react';

interface Props {
  slug: string;
  post: any;
  locale: string;
}

export default function InvestmentBankClient({ slug, post, locale }: Props) {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [modalActive, setModalActive] = useState(false);

  const translate = (key: 'back' | 'loading') => {
    if (key === 'back') {
      if (locale === 'vi') return 'Quay lại';
      if (locale === 'fr') return 'Retour';
      return 'Back'; 
    }
    if (key === 'loading') {
      if (locale === 'vi') return 'Đang tải';
      if (locale === 'fr') return 'Chargement';
      return 'Loading'; 
    }
    return '';
  };

  // Điều hướng khi ngôn ngữ thay đổi
  useEffect(() => {
    if (i18n.language !== locale) {
      router.push(`/investment-bank/${i18n.language}/${slug}`);
    }
  }, [i18n.language, locale, slug, router]);

  return (
    <div className="pb-[100px]">
      <HeaderDesktopFull changeAt={190} />
      <VideoBox modalActive={modalActive} setModalActive={setModalActive} />
      <div className="w-full h-[260px] relative z-[1]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={post?.image ? `${API_URL}${post.image.url}` : Quest}
          alt={post?.image?.alt || 'Default alt'}
          width={735}
          height={260}
          className="w-full h-[260px] object-cover"
        />
      </div>
      {!post ? (
        <div className="flex flex-col items-center justify-center h-[600px] relative z-[30] bg-[var(--canvas-bg)] mb-[505px] md:mb-[505px] max-md:mb-0">
          <LoadingComponent className="h-[200px] mt-10" loadingText={translate('loading')}/>
        </div>
      ) : (
        <div>
          <div className="p-[20px] md:p-[40px] relative z-[30] flex justify-center bg-[var(--canvas-bg)]">
            <div className="max-w-[1200px] w-full">
              {post?.title && (
                <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                  {post.title}
                </h1>
              )}
            </div>
          </div>
          <div className="relative z-[30] flex justify-center bg-[var(--base-bg)] py-[20px] px-[20px] md:py-[40px] md:px-[40px] lg:py-[80px] lg:px-[40px] mb-[505px] md:mb-[505px] max-md:mb-0">
            <div className="absolute inset-0">
              <Image
                src={Background_Slug}
                alt="Background Slug"
                width={1200}
                height={673}
                className="w-full h-full z-10 object-center object-cover opacity-5"
              />
            </div>
            {post?.description && (
              <div className="max-w-[1200px] w-full flex flex-col md:flex-row gap-[40px] md:gap-[80px] justify-center z-20">
                <div className="flex flex-col items-center gap-[10px]">
                  <ButtonPrimary
                    variant="outline"
                    className="!bg-background hover:brightness-[0.95] w-full button border-none rounded-none h-[40px] transition-transform duration-300 ease-in-out"
                    onClick={() => router.push('/investment-bank')}
                  >
                    <Image
                      src={LessThanBase}
                      width={20}
                      height={20}
                      alt="LessThanBase"
                      className="min-w-[20px] min-h-[20px]"
                    />
                    <p>{translate('back')}</p>
                  </ButtonPrimary>
                </div>
                <div className="border-b border-[var(--other-border)] mt-[-40px] lg:min-w-[900px]">
                  <RichText
                    data={post.description}
                    converters={({ defaultConverters }) =>
                      getCustomRichTextConverters(defaultConverters)
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <FooterFull setModalActive={setModalActive} modalActive={modalActive} />
    </div>
  );
}

interface LoadingComponentProps {
  className?: string;
  loadingText: string;
}
const LoadingComponent: React.FC<LoadingComponentProps> = ({ className, loadingText }) => {
  return (
    <div className={'flex flex-col justify-center items-center w-full ' + className}>
      <ArrowsClockwise size={32} className="animate-spin text-[var(--primary)] mb-4" />
      <p className="text-[var(--primary)] text-lg">{loadingText}</p>
    </div>
  );
};