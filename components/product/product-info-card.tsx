'use client';
import React from 'react';
import { Button } from '@/components/ui/button'; // Adjust the import path as necessary
import { CursorClick } from '@phosphor-icons/react';

interface ProductInfoCardProps {
    title: string;
    description: string;
    buttonText: string;
}

const ProductInfoCard: React.FC<ProductInfoCardProps> = ({ title, description, buttonText }) => {
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
                className="bg-background hover:bg-gray-100 rounded-none w-full h-[40px] mt-4 content-end"
            >
                <CursorClick size={32} />
                <p>{buttonText}</p>
            </Button>
        </div>
    );
};

export default ProductInfoCard;