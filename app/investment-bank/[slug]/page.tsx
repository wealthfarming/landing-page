'use client';
import FooterFull from "@/components/footer/footer-full";
import HeaderDesktopFull from "@/components/header/header-desktop";
import Image from "next/image";
import { useInterface } from '@/components/context/interface-context';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/animation/introduction/Animations";
import { Apiget } from "@/lib/api/get"
import { API_URL } from "@/lib/config";
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { title } from "process";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import LessThanBase from "../../../public/images/investment-bank/less.svg"
import { RichText } from '@payloadcms/richtext-lexical/react';

export default function InvestmentBank() {
  const params = useParams();
  const { isDesktop, isMobile, isTablet } = useInterface();
  const { t, i18n } = useTranslation();
  const slug = params.slug as string;
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const getPosts = async () => {
      const data = await Apiget(
        API_URL + '/api/posts',
        {
          'where[title][like]': slug,
          sort: 'createdAt',
          limit: 1,
          locale: i18n.language,
        }
      );

      if (data && data.length > 0 && data[0]) {
        const post = {
          id: data[0].id,
          title: data[0].title,
          description: data[0].description,
          image: data[0].image?.url,
        };
        console.log(post);
        setPost(post);
      }
    };
    getPosts();
  }, [i18n.language]);




  return (
    <div>
      <HeaderDesktopFull changeAt={190} />

      <div className="w-full h-[260px] relative">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {post?.image && (
          <Image
            src={`${API_URL}${post.image}`}
            alt=""
            width={735}
            height={260}
            className="w-full h-[260px] object-cover"
          />
        )}
      </div>

      <div className={`${!isMobile ? 'p-[40px]' : 'p-[20px]'} flex justify-center bg-[var(--canvas-bg)]`}>
        <div className="max-w-[1200px] w-full">
          {post?.title && <p className="title-invest">{post.title}</p>}
        </div>
      </div>

      <div className={`${!isDesktop ? isMobile ? 'p-[20px]' : 'py-[40px] px-[40px]' : 'py-[80px] px-[40px]'}  flex justify-center bg-[var(--base-bg)]`}>
        <div className={`max-w-[1200px] w-full flex ${!isDesktop ? 'flex-col gap-[40px]' : 'gap-[80px]'}  justify-center`}>
          <a href="/investment-bank">
            <Button variant="outline" className="!bg-background hover:brightness-[0.95] button border-none rounded-none h-[40px] transition-transform duration-300 ease-in-out ">
              <Image src={LessThanBase} width={20} height={20} alt="'LessThanBase" className="min-w-[20px] min-h-[20px]" />
              <p>{t('back')}</p>
            </Button>
          </a>

          {post?.description &&
            <RichText
              data={post.description}
              converters={({ defaultConverters }) => ({
                ...defaultConverters,
                heading: ({ node, nodesToJSX, converters, parent, childIndex }) => {
                  const children = nodesToJSX({ nodes: node.children, parent, converters });

                  if (node.tag === 'h2') {
                    return <h2 className="h2-rich">{children}</h2>;
                  }

                  return typeof defaultConverters.heading === 'function'
                    ? defaultConverters.heading({ node, nodesToJSX, converters, parent, childIndex })
                    : null;
                },
                paragraph: ({ node, nodesToJSX, converters, parent, childIndex }) => {
                  const children = nodesToJSX({ nodes: node.children, parent, converters });
                  console.log('Paragraph node:', { node, children });
                  return <p className="mt-2 p-rich">{children}</p>;
                },
                text: ({ node }) => {
                  const FORMAT_CODE = 1 << 4;

                  if ((node.format & FORMAT_CODE) !== 0) {
                    return <code className="code-rich">{node.text}</code>;
                  }

                  return node.text;
                },
              })}
            />
          }

        </div>
      </div>

      <FooterFull />
    </div >
  );
}
