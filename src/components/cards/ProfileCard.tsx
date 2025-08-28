// import { Avatar, TechBadge } from '../common';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';

export function ProfileCard() {
    const techStack: string[] = [
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
        <Card className="p-8 bg-neutral-50 border border-neutral-200 max-w-md w-full">
            <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                    <Avatar className="w-20 h-20">
                        <AvatarImage
                            src="/src/assets/avatar.jpg"
                            alt="profile-avatar"
                        />
                        <AvatarFallback className="text-3xl">👨‍💻</AvatarFallback>
                    </Avatar>
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-1 text-black">
                            Dev. Gisoun
                        </h3>
                        <p className="text-neutral-600">Full Stack Developer</p>
                    </div>
                </div>

                <Card className="mb-6 bg-white">
                    <CardContent>
                        <p className="text-sm text-neutral-600 mb-2">경력</p>
                        <p className="text-lg font-semibold text-black">
                            2021. 9. ~ ing
                        </p>
                    </CardContent>
                </Card>

                <div>
                    <p className="text-sm text-neutral-600 mb-3 text-left">
                        기술 스택
                    </p>
                    <div className="flex flex-wrap gap-2 justify-between">
                        {techStack.map((tech, index) => (
                            <Badge
                                key={index}
                                variant="outline"
                                className="px-2 py-1 bg-white text-black hover:bg-neutral-50"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
