import type { PortfolioItem } from '@/types';
import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

interface PortfolioItemCardProps {
    item: PortfolioItem;
}

export function PortfolioItemCard({ item }: PortfolioItemCardProps) {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <Card className="overflow-hidden border border-neutral-200">
            <div className="h-48 bg-neutral-50 border-b border-neutral-200 flex items-center justify-center">
                {!imageError ? (
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                    />
                ) : (
                    <div className="text-6xl text-neutral-400">📱</div>
                )}
            </div>
            <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">
                    {item.title}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                    {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                        <Badge
                            key={tagIndex}
                            variant="outline"
                            className="px-3 py-2 bg-white text-neutr-700 text-sm hover:bg-neutral-50"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
