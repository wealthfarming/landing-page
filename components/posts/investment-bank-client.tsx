'use client';

import { useEffect, useState } from 'react';
import { useInterface } from '@/components/context/interface-context';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
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

interface Props {
  slug: string;
}

export default function InvestmentBankClient({ slug }: Props) {
  const { isDesktop, isMobile, isTablet } = useInterface();
  const { t, i18n } = useTranslation();
  const [post, setPost] = useState<any>(null);
  const [isClient, setIsClient] = useState(false);

  // mark as client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // fetch post data when client and slug or language changes
  useEffect(() => {
    if (!isClient) return;

    async function getPosts() {
      // fetch ID by route
      const get_data_id = await Apiget(
        API_URL + '/api/posts',
        {
          [`where[slug][${i18n.language}][equals]`]: slug,
          sort: 'createdAt',
          limit: 1,
          locale: i18n.language,
        }
      );
      const data_id = get_data_id[0]?.id;
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
  }, [isClient, slug, i18n.language]);

  if (!isClient) return null;

  return (
    <div className="pb-[100px]">
      <HeaderDesktopFull changeAt={190} />
      <div className="w-full h-[260px] relative z-[30]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={post?.image ? `${API_URL}${post.image.url}` : Quest}
          alt={post?.image?.alt || 'Default image'}
          width={735}
          height={260}
          className="w-full h-[260px] object-cover"
        />
      </div>

      <div className={`${!isMobile ? 'p-[40px]' : 'p-[20px]'} relative z-[30] flex justify-center bg-[var(--canvas-bg)]`}>
        <div className="max-w-[1200px] w-full">
          {post?.title && <p className="title-invest">{post.title}</p>}
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
        <div className={`max-w-[1200px] w-full flex
            ${!isDesktop ? 'flex-col gap-[40px]' : 'gap-[80px]'}  justify-center z-20`}
        >
          <a href="/investment-bank">
            <Button
              variant="outline"
              className="!bg-background hover:brightness-[0.95] button border-none rounded-none h-[40px] transition-transform duration-300 ease-in-out"
            >
              <Image
                src={LessThanBase}
                width={20}
                height={20}
                alt="LessThanBase"
                className="min-w-[20px] min-h-[20px]"
              />
              <p>{t('back')}</p>
            </Button>
          </a>

          {post?.description && (
            <div className={`${isDesktop ? 'min-w-[900px]' : ''} border-b border-[var(--other-border)]`}>
              <RichText
                data={post.description}
                converters={({ defaultConverters }) =>
                  getCustomRichTextConverters(defaultConverters)
                }
              />
            </div>
          )}
        </div>
      </div>
      <FooterFull />
    </div>
  );
}
