import { useState } from 'react';

interface AvatarProps {
    src: string;
    alt: string;
    fallback: string;
}

export function Avatar({ src, alt, fallback }: AvatarProps) {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="w-20 h-20 bg-white rounded-full border border-gray-200 flex items-center justify-center overflow-hidden">
            {!imageError ? (
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                />
            ) : (
                <div className="text-3xl">{fallback}</div>
            )}
        </div>
    );
}
