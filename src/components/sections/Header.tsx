import type { NavItem } from '@/types';
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

    const navItems: NavItem[] = [
        { label: '서비스', sectionId: 'services' },
        { label: '특징', sectionId: 'features' },
        { label: '문의', sectionId: 'contact' },
    ];

    return (
        <header className="fixed top-0 w-full bg-white border-b border-neutral-200 z-50">
            <div className="max-w-6xl mx-auto px-5">
                <nav className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold text-black">
                        DevGisoun
                    </div>
                    <ul className="hidden md:flex space-x-8">
                        {navItems.map((item) => {
                            return (
                                <li className="flex items-center">
                                    <button
                                        onClick={() =>
                                            scrollToSection(item.sectionId)
                                        }
                                        className="text-neutral-600 font-medium hover:text-black cursor-pointer transition-colors p-0 h-auto"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            );
                        })}
                        <li>
                            <Button
                                onClick={handleBlogClick}
                                className="bg-black text-white hover:bg-neutral-700"
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
