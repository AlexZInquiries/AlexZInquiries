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
			onMouseLeave={() => setIsHovered(false)}>
			<div className={`absolute ${imageStyles}`}>
				<Image
					alt={linkText}
					className={`${imageClass} transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
					height={imageHeight}
					src={imageUrl}
					width={imageWidth}
					priority
				/>
			</div>
			<AnimatePresence>
				{isHovered && (
					<motion.div
						animate={{ opacity: 1, y: 0 }}
						className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-sm"
						exit={{ opacity: 0, y: "100%" }}
						initial={{ opacity: 0, y: "100%" }}
						transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
						<motion.h3
							animate={{ opacity: 1, y: 0 }}
							className="text-2xl font-bold text-white mb-2"
							initial={{ opacity: 0, y: 20 }}
							transition={{ delay: 0.2, duration: 0.5 }}>
							{linkText}
						</motion.h3>
						<motion.p
							animate={{ opacity: 1, y: 0 }}
							className="text-white text-base mb-4"
							initial={{ opacity: 0, y: 20 }}
							transition={{ delay: 0.3, duration: 0.5 }}>
							{description}
						</motion.p>
						<motion.button
							animate={{ opacity: 1, y: 0 }}
							className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${btnStyles} ${btnHoverStyles}`}
							initial={{ opacity: 0, y: 20 }}
							transition={{ delay: 0.4, duration: 0.5 }}
							onClick={onClick}>
							Learn More
						</motion.button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Item;
