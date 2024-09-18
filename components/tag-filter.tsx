import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface Tag {
    name: string;
    color: string;
}

interface TagFilterProps {
    tags: Tag[];
    onFilterChange: (selectedTags: string[]) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ tags, onFilterChange }) => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTag = (tagName: string) => {
        const newSelectedTags = selectedTags.includes(tagName)
            ? selectedTags.filter(t => t !== tagName)
            : [...selectedTags, tagName];
        
        setSelectedTags(newSelectedTags);
        onFilterChange(newSelectedTags);
    };

    if (!mounted) {
        // Avoid rendering until the theme is properly loaded
        return null;
    }

    const getBackgroundColor = (tag: Tag) => {
        if (selectedTags.includes(tag.name)) {
            return tag.color;
        }

        return resolvedTheme === 'dark' ? '#3f3f46' : '#ece7e7';
    };

    const getTextColor = (tag: Tag) => {
        return selectedTags.includes(tag.name) ? 'text-white' : (resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700');
    };

    return (
        <div className="flex flex-wrap justify-center gap-2 mb-4">
            {tags.map((tag) => (
                <motion.button
                    key={tag.name}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${getTextColor(tag)}`}
                    style={{ backgroundColor: getBackgroundColor(tag) }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleTag(tag.name)}
                >
                    {tag.name}
                </motion.button>
            ))}
        </div>
    );
};

export default TagFilter;