import type { PortfolioItem } from '@/types';
import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

interface PortfolioItemCardProps {
    item: PortfolioItem;
}

export function PortfolioItemCard({ item }: PortfolioItemCardProps) {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    const handleImageClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // 이벤트 버블링 방지
        const url: string | null | undefined = item.url;
        if (url && url.trim() !== '')
            window.open(url, '_blank', 'noopener,noreferrer');
    };

    const isUrlValid = item.url && item.url.trim() !== '';

    return (
        <Card className="py-0 overflow-hidden border border-neutral-200">
            <div className="relative h-48 bg-neutral-50 border-b border-neutral-200 flex items-center justify-center group">
                {/* 이미지 또는 플레이스홀더 */}
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

                {/* 호버 오버레이 - 기본적으로 완전히 숨김 */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/80 transition-colors duration-300 flex items-center justify-center">
                    <Button
                        variant={isUrlValid ? 'default' : 'default'}
                        size="lg"
                        className={`
                            opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 
                            transition-all duration-300 ease-out shadow-lg
                            ${
                                isUrlValid
                                    ? 'bg-black text-white hover:bg-gray-800'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300'
                            }
                        `}
                        onClick={isUrlValid ? handleImageClick : undefined}
                    >
                        자세히 보기
                    </Button>
                </div>
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
