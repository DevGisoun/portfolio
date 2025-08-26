import type { Service } from '@/types';
import { ServiceCard } from '../cards';

export function ServiceSection() {
    const services: Service[] = [
        {
            icon: '🌐',
            title: '웹 개발',
            description:
                '반응형 웹사이트부터 복잡한 웹 애플리케이션까지, 최신 기술을 활용한 고품질 웹 개발 서비스를 제공합니다.',
        },
        {
            icon: '📱',
            title: '모바일 앱 개발',
            description:
                'iOS, Android 네이티브 앱부터 크로스 플랫폼 앱까지, 사용자 경험을 중시한 모바일 애플리케이션을 개발합니다.',
        },
        {
            icon: '⚙️',
            title: '백엔드 개발',
            description:
                '안정적이고 확장 가능한 서버 시스템과 API 개발로 비즈니스 로직을 효율적으로 구현합니다.',
        },
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-5">
                <h2 className="text-4xl font-bold text-center mb-12 text-black">
                    제공 서비스
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
