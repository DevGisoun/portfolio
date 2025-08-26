import type { Feature } from '@/types';

interface FeatureItemCardProps {
    feature: Feature;
}

export function FeatureItemCard({ feature }: FeatureItemCardProps) {
    return (
        <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4 text-black">
                {feature.icon} {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
        </div>
    );
}
