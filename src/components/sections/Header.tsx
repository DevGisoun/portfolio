import { Button } from '../ui/button';

export function Header() {
    const scrollToSection = (sectionId: string) => {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleBlogClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const blogUrl = 'http://devgisoun.github.io/';
        if (blogUrl && blogUrl.trim() !== '') {
            window.open(blogUrl, '_blank');
        }
    };

    return (
        <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
            <div className="max-w-6xl mx-auto px-5">
                <nav className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold text-black">
                        DevGisoun
                    </div>
                    <ul className="hidden md:flex space-x-8">
                        <li>
                            <button
                                onClick={() => scrollToSection('services')}
                                className="text-gray-600 font-medium hover:text-black transition-colors"
                            >
                                서비스
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('features')}
                                className="text-gray-600 font-medium hover:text-black transition-colors"
                            >
                                특징
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-gray-600 font-medium hover:text-black transition-colors"
                            >
                                문의
                            </button>
                        </li>
                        <li>
                            <Button
                                onClick={handleBlogClick}
                                className="bg-black text-white hover:bg-gray-800"
                            >
                                블로그 방문
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
