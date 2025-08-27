import type { Feature } from '@/types';
import { Card, CardContent } from '../ui/card';

interface FeatureItemCardProps {
    feature: Feature;
}

export function FeatureItemCard({ feature }: FeatureItemCardProps) {
    return (
        <Card className="text-center p-6 border-none shadow-none">
            <CardContent className="p-0">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-black">
                    {feature.title}
                </h3>
                <p className="text-neutral-600">{feature.description}</p>
            </CardContent>
        </Card>
    );
}
