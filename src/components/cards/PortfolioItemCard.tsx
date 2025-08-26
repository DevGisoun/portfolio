import type { PortfolioItem } from '@/types';
import { useState } from 'react';
import { Card, CardContent } from '../ui/card';

interface PortfolioItemCardProps {
    item: PortfolioItem;
}

export function PortfolioItemCard({ item }: PortfolioItemCardProps) {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <Card className="overflow-hidden border border-gray-200">
            <div className="h-48 bg-gray-50 border-b border-gray-200 flex items-center justify-center">
                {!imageError ? (
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                    />
                ) : (
                    <div className="text-6xl text-gray-400">📱</div>
                )}
            </div>
            <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">
                    {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="bg-white text-gray-700 px-3 py-1 rounded border border-gray-200 text-sm font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
