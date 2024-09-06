import Image from "next/image";

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
}: ItemProps) => {
	return (
		<div className={`relative w-full h-full group ${containerStyles}`}>
			{overlayStyles && <div className={`absolute ${overlayStyles}`} />}
			<div className={`absolute ${imageStyles}`}>
				<Image
					alt={linkText}
					className={imageClass}
					src={imageUrl}
					height={imageHeight}
					width={imageWidth}
				/>
			</div>
			<button
				onClick={onClick}
				className={`absolute transition-all w-10 h-10 md:w-[2.75rem] md:h-[2.75rem] duration-500 ease-in-out group-hover:w-40 p-2 rounded-full border-2 border-transparent ${btnStyles} ${btnHoverStyles}`}>
				<div className="flex justify-center items-center">
					<span className="text-sm md:text-medium text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
						{linkText}
					</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-6 h-6">
						<path
							fillRule="evenodd"
							d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			</button>
		</div>
	);
};

export default Item;
