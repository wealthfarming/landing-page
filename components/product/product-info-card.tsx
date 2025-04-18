'use client';
import React from 'react';
import { Button } from '@/components/ui/button'; // Adjust the import path as necessary
import { CursorClick } from '@phosphor-icons/react';

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
        <div className="flex flex-col items-start justify-between border border-gray-200 p-5 h-[328px] w-full md:w-[calc(33% - 8px)] hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer">
            <div>
                <h1 className='h3 mb-[10px]'>{title}</h1>
                <p className="break-normal body text-base">
                    {description}
                </p>
            </div>
            <a className='w-full' href={link || undefined}>
                <Button
                    variant="outline"
                    style={{ "boxShadow": "rgba(0, 0, 0, 0.24) 0px 1px 2px 0px" }}
                    className={"rounded-none w-full h-[48px] content-end border-none " + (button_color ? `!${button_color}` : "!bg-[var(--base-bg)]") + (brightness ? ` hover:brightness-[${brightness}]` : "")}
                >
                    {button_icon ? button_icon : <CursorClick size={32} />}
                    <p className='button body'>{buttonText}</p>
                </Button>
            </a>
        </div>
    );
};

export default ProductInfoCard;