import type { PortfolioItem } from '@/types';
import { PortfolioItemCard } from '../cards';

export function PortfolioSection() {
    const portfolioItems: PortfolioItem[] = [
        {
            title: '웹 기반 드론 관제 플랫폼',
            description:
                'Vue.js, CesiumJS 기반 드론 관제 플랫폼 프론트엔드 개발',
            tags: ['Vue.js', 'CesiumJS', 'Javascript'],
            image: '/assets/images/portfolio-1.png',
        },
        {
            title: "'9급 공무원 시험-Pass' 앱",
            description:
                'Flutter로 개발한 크로스 플랫폼(iOS, Android) 9급 공무원 시험 학습 앱 개발 및 배포',
            tags: [
                'Flutter',
                'GetX',
                'Nest.js',
                'FastAPI',
                'Firebase',
                'MariaDB',
                'TypeScript',
                'Python',
            ],
            image: '/assets/images/portfolio-2.png',
        },
        {
            title: '웹 기반 EnMS',
            description:
                'jQuery, Bootstrap, React Flow, Spring Boot 기반의 에너지 관리 시스템 개발',
            tags: [
                'jQuery',
                'Bootstrap',
                'React Flow',
                'Spring Boot',
                'MariaDB',
                'InfluxDB',
                'RabbitMQ',
            ],
            image: '/assets/images/portfolio-3.png',
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-5">
                <h2 className="text-4xl font-bold text-center mb-12 text-black">
                    포트폴리오
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <PortfolioItemCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
