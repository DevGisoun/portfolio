import { ProfileCard } from '../cards';
import { Button } from '../ui/button';

export function HeroSection() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="pt-32 pb-20 bg-white border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-black">
                            전문적인 웹/앱 개발
                        </h1>
                        <p className="text-xl mb-8 text-gray-600">
                            아이디어를 현실로 만드는 개발 파트너가
                            되어드리겠습니다
                        </p>
                        <Button
                            onClick={() => scrollToSection('contact')}
                            className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg"
                        >
                            프로젝트 문의하기
                        </Button>
                    </div>
                    <div className="flex justify-center">
                        <ProfileCard />
                    </div>
                </div>
            </div>
        </section>
    );
}
