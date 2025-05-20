'use client';
import React from 'react';
import { CursorClick } from '@phosphor-icons/react';
import Link from 'next/link'; // Import Link from next/link
import ButtonPrimary from "../custom-button/button-primary";

interface ProductInfoCardProps {
    title: string;
    description: string;
    buttonText: string;
    button_color?: string;
    brightness?: string;
    link?: string;
    button_icon?: React.ReactNode;
}

const ProductInfoCard: React.FC<ProductInfoCardProps> = ({ title, description, buttonText, button_color, button_icon, brightness, link }) => {

    return (
        <div className="flex flex-col items-start rounded-[6px] justify-between border border-gray-200 p-5 md:h-[328px] w-full md:w-[calc(33% - 8px)] hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer">
            <div>
                <h1 className='h3 mb-[10px]'>{title}</h1>
                <p className="break-normal body text-base">
                    {description}
                </p>
            </div>

            {/* Wrap the button with Link component */}
            <Link href={link || "/"} passHref className='w-full'>
                <ButtonPrimary
                    variant="outline"
                    className={"hover:bg-gray-100 rounded-none w-full h-[40px] mt-4 content-end border-none cursor-pointer " + (button_color ? button_color : " bg-base")}
                >
                    {button_icon ? button_icon : <CursorClick size={32} className='animate-diagonal-2' />}
                    <p className='button body'>{buttonText}</p>
                </ButtonPrimary>
            </Link>
        </div>
    );
};

export default ProductInfoCard;
