import type { Service } from '@/types';
import { Card, CardContent } from '../ui/card';

interface ServiceCardProps {
    service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
    return (
        <Card className="text-center p-8 bg-white border border-gray-200">
            <CardContent className="p-0">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-black">
                    {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {service.description}
                </p>
            </CardContent>
        </Card>
    );
}
