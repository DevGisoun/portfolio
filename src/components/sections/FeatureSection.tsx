import type { Feature } from '@/types';
import { FeatureItemCard } from '../cards';

export function FeatureSection() {
    const features: Feature[] = [
        {
            icon: '⚡',
            title: '빠른 개발',
            description:
                '효율적인 개발 프로세스로 단시간 내 고품질 결과물을 제공합니다',
        },
        {
            icon: '💬',
            title: '소통 중심',
            description:
                '프로젝트 진행 상황을 투명하게 공유하며 지속적으로 소통합니다',
        },
        {
            icon: '🎯',
            title: '맞춤형 솔루션',
            description:
                '클라이언트의 요구사항에 최적화된 맞춤형 개발 솔루션을 제공합니다',
        },
        {
            icon: '🔧',
            title: '사후 지원',
            description:
                '개발 완료 후에도 지속적인 유지보수와 기술 지원을 제공합니다',
        },
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-5">
                <h2 className="text-4xl font-bold text-center mb-12 text-black">
                    왜 저를 선택해야 할까요?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureItemCard key={index} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}
