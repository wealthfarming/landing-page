'use client';

import { useEffect, useRef, useState } from 'react';
import { useInterface } from '@/components/context/interface-context';
import { useTranslation } from 'react-i18next';
import { Apiget } from '@/lib/api/get';
import { API_URL } from '@/lib/config';
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
import { ArrowsClockwise, X } from '@phosphor-icons/react';
import VideoBox from '../footer/video_box';

interface Props {
  slug: string;
}

export default function InvestmentBankClient({ slug }: Props) {
  const { isDesktop, isMobile, isTablet } = useInterface();
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [loadingPage, setLoadingPage] = useState(false);
  const [loadingContent, setLoadingContent] = useState(false);

  const router = useRouter()
  // mark as client
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    if (post?.description) {
      const timer = setTimeout(() => {
        setLoadingContent(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [post?.description]);
  // fetch post data when client and slug or language changes
  useEffect(() => {
    if (!isClient) return;
    async function getPosts() {
      setLoadingPage(true);
      // fetch ID by route
      const locales = ['en', 'fr', 'vi'];

      const allResponses = await Promise.all(
        locales.map((locale) =>
          Apiget(API_URL + '/api/posts', {
            sort: 'createdAt',
            limit: 0,
            locale,
          })
        )
      );

      const allPosts = allResponses.flat();
      const find_data_id = allPosts.find((p: any) => p.slug === slug);
      const data_id = find_data_id?.id ?? null;

      if (!data_id) return;

      // fetch localized content by ID
      const data = await Apiget(
        `${API_URL}/api/posts`,
        {
          'where[id][equals]': data_id,
          sort: 'createdAt',
          limit: 1,
          locale: i18n.language,
        }
      );

      if (data && data.length > 0) {
        setPost({
          id: data[0].id,
          title: data[0].title,
          description: data[0].description,
          image: data[0].image,
        });
      }
    }

    getPosts();
    setLoadingPage(true);
  }, [isClient, slug, i18n.language]);

  if (!isClient) return null;

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
      {
        !post ? (
          <div className={`flex flex-col items-center justify-center h-[600px] relative z-[30]  bg-[var(--canvas-bg)] ${isDesktop || isTablet ? ' mb-[505px] ' : ''} `}>
            <LoadingComponent className="h-[200px] mt-10" />
          </div>
        ) : (
          <div >
            <div className={`${!isMobile ? 'p-[40px]' : 'p-[20px]'} relative z-[30] flex justify-center bg-[var(--canvas-bg)]`}>
              <div className="max-w-[1200px] w-full">
                {post?.title && (
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                    {post.title}
                  </h1>
                )}
              </div>
            </div>

            <div className={`${!isDesktop
              ? isMobile
                ? 'p-[20px]'
                : 'py-[40px] px-[40px]'
              : 'py-[80px] px-[40px]'}
        z-[30] flex justify-center bg-[var(--base-bg)] relative
        ${isDesktop || isTablet ? 'mb-[505px]' : ''}`}>
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
                <div
                  className={`max-w-[1200px] w-full flex
            ${!isDesktop ? 'flex-col gap-[40px]' : 'gap-[80px]'} justify-center z-20`}
                >
                  <div className={(!isDesktop ? 'w-full' : '') + ` flex flex-col items-center gap-[10px] `}>
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
                      <p>{t('back')}</p>
                    </ButtonPrimary>
                    <ButtonPrimary
                      variant="outline"
                      className="!bg-background hover:brightness-[0.95] w-full button border-none rounded-none h-[40px] transition-transform duration-300 ease-in-out"
                    >
                      <ArrowsClockwise size={20} />
                      <p onClick={() => window.location.reload()}>{t('RELOAD')}</p>
                    </ButtonPrimary>
                  </div>
                  <div
                    className={`${isDesktop ? 'min-w-[900px]' : ''} border-b border-[var(--other-border)] mt-[-40px]`}
                  >
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
        )
      }



      <FooterFull setModalActive={setModalActive} modalActive={modalActive} />
    </div>
  );
}

interface LoadingComponentProps {
  className?: string;
}
const LoadingComponent: React.FC<LoadingComponentProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={"flex flex-col justify-center items-center w-full " + className} >
      <ArrowsClockwise size={32} className="animate-spin text-[var(--primary)] mb-4" />
      <p className="text-[var(--primary)] text-lg">{t('Loading')}</p>
    </div>
  )
}
