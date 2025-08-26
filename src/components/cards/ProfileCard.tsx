import { Avatar, TechBadge } from '../common';
import { Card, CardContent } from '../ui/card';

export function ProfileCard() {
    const techStack = [
        'jQuery',
        'Bootstrap',
        'Vue.js',
        'React',
        'React Native',
        'Flutter',
        'Spring Boot',
        'Node.js',
        'Nest.js',
        'FastAPI',
        'Firebase',
        'MySQL',
        'InfluxDB',
        'Java',
        'JavaScript',
        'TypeScript',
        'Python',
        'RabbitMQ',
        'AWS',
        'Docker',
    ];

    return (
        <Card className="p-8 bg-gray-50 border border-gray-200 max-w-md w-full">
            <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                    <Avatar
                        src="/assets/avatar.jpg"
                        alt="Profile Avatar"
                        fallback="👨‍💻"
                    />
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-1 text-black">
                            Dev. Gisoun
                        </h3>
                        <p className="text-gray-600">Full Stack Developer</p>
                    </div>
                </div>

                <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">경력</p>
                    <p className="text-lg font-semibold text-black">
                        2021. 9. ~ ing
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-600 mb-3 text-left">
                        기술 스택
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {techStack.map((tech, index) => (
                            <TechBadge key={index} tech={tech} />
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
