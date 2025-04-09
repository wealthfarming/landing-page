'use client';
import React from 'react';
import { Button } from '@/components/ui/button'; // Adjust the import path as necessary
import { CursorClick } from '@phosphor-icons/react';

interface ProductInfoCardProps {
    title: string;
    description: string;
    buttonText: string;
    button_color?: string;
    button_icon?: React.ReactNode;
}

const ProductInfoCard: React.FC<ProductInfoCardProps> = ({ title, description, buttonText , button_color , button_icon}) => {
    return (
        <div className="flex flex-col items-start justify-between border border-gray-200 p-5 h-[400px] w-full md:w-[calc(33% - 8px)] hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer">
            <div>
                <h1 className='text-3xl mb-[10px]'>{title}</h1>
                <p className="break-normal text-base">
                    {description}
                </p>
            </div>
            <Button
                variant="outline"
                className={" hover:bg-gray-100 rounded-none w-full h-[40px] mt-4 content-end border-none " + (button_color ? button_color : " bg-base")}
            >
                {button_icon ? button_icon : <CursorClick size={32} />}
                <p>{buttonText}</p>
            </Button>
        </div>
    );
};

export default ProductInfoCard;