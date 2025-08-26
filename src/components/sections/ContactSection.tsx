import { ContactForm } from '../forms';

export function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-black text-white text-center">
            <div className="max-w-6xl mx-auto px-5">
                <h2 className="text-4xl font-bold mb-4">프로젝트 문의</h2>
                <p className="text-xl mb-8 text-gray-300">
                    아이디어가 있으시다면 언제든 연락주세요. 함께 멋진
                    프로젝트를 만들어나가겠습니다.
                </p>
                <ContactForm />
            </div>
        </section>
    );
}
