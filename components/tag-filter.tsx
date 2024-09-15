import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

    const toggleTag = (tagName: string) => {
        const newSelectedTags = selectedTags.includes(tagName)
        ? selectedTags.filter(t => t !== tagName)
        : [...selectedTags, tagName];
        
        setSelectedTags(newSelectedTags);
        onFilterChange(newSelectedTags);
    };

    return (
        <div className="flex flex-wrap justify-center gap-2 mb-4">
        {tags.map((tag) => (
            <motion.button
            key={tag.name}
            className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
                selectedTags.includes(tag.name) ? 'text-white' : 'text-gray-700'
            }`}
            style={{ backgroundColor: selectedTags.includes(tag.name) ? tag.color : '#e0e0e0' }}
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