'use client';
import { t } from "i18next";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { useInterface } from '@/components/context/interface-context';
import { Cursor } from 'phosphor-react';


export default function HomeSection7() {

    return (
        <div className="w-full h-[336px] relative">
            <img
                src="/images/home-section-7/section-7.png"
                alt=""
                className="w-full h-[336px] object-cover"
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] px-[40px] flex flex-col justify-center items-center gap-[10px]">
                <p className="h1 !text-[var(--other-border)] flex text-center">
                    {t('Đừng chờ đợi! Tương lai tài chính đang nằm trong tay bạn')}
                </p>
                <div className="flex bg-[var(--primary-gradient)] w-max items-center justify-center">
                    <Cursor />
                    <p>{t('ĐẦU TƯ NGAY HÔM NAY')}</p>
                </div>
            </div>
        </div>



    );
}