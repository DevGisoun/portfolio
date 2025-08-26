interface TechBadgeProps {
    tech: string;
}

export function TechBadge({ tech }: TechBadgeProps) {
    return (
        <span className="bg-white text-black px-3 py-1 rounded border border-gray-200 text-sm font-medium">
            {tech}
        </span>
    );
}
