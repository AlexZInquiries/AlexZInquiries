import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ItemProps {
	imageUrl: string;
	linkText: string;
	containerStyles: string;
	imageStyles: string;
	overlayStyles?: string;
	btnStyles?: string;
	btnHoverStyles?: string;
	imageWidth?: number;
	imageHeight?: number;
	imageClass: string;
	onClick: () => void;
	description: string; // Add this new prop
}

const Item = ({
	imageUrl,
	linkText,
	containerStyles,
	imageStyles,
	overlayStyles,
	btnStyles,
	btnHoverStyles,
	imageWidth,
	imageHeight,
	imageClass,
	onClick,
	description,
}: ItemProps) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`relative w-full h-full group overflow-hidden ${containerStyles}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className={`absolute ${imageStyles}`}>
				<Image
					alt={linkText}
					className={`${imageClass} transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
					src={imageUrl}
					height={imageHeight}
					width={imageWidth}
				/>
			</div>
			<AnimatePresence>
				{isHovered && (
					<motion.div
						initial={{ opacity: 0, y: "100%" }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "100%" }}
						transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
						className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-sm"
					>
						<motion.h3
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							className="text-2xl font-bold text-white mb-2"
						>
							{linkText}
						</motion.h3>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3, duration: 0.5 }}
							className="text-white text-base mb-4"
						>
							{description}
						</motion.p>
						<motion.button
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.5 }}
							onClick={onClick}
							className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${btnStyles} ${btnHoverStyles}`}
						>
							Learn More
						</motion.button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Item;
