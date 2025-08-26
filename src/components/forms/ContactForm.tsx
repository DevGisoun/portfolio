import type { ContactFormData } from '@/types';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

export function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다!');
        console.log('Form submitted with data:', formData);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="max-w-2xl mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    type="text"
                    name="name"
                    placeholder="이름"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="이메일"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
            </div>
            <Input
                type="text"
                name="subject"
                placeholder="프로젝트 제목"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
            <Textarea
                name="message"
                placeholder="프로젝트 설명을 자세히 적어주세요..."
                value={formData.message}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 min-h-32 resize-y"
            />
            <Button
                onClick={handleSubmit}
                className="w-full bg-white text-black hover:bg-gray-200 py-3 text-lg font-semibold"
            >
                문의하기
            </Button>
        </div>
    );
}
