import { Link } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

interface ItemProps {
	imageUrl: string;
	linkUrl: string;
	linkText: string;
	containerStyles: string;
	imageStyles: string;
	overlayStyles?: string;
	btnStyles?: string;
	btnHoverStyles?: string;
	imageWidth?: number;
	imageHeight?: number;
	imageClass: string;
}

const Item = ({
	imageUrl,
	linkUrl,
	linkText,
	containerStyles,
	imageStyles,
	overlayStyles,
	btnStyles,
	btnHoverStyles,
	imageWidth,
	imageHeight,
	imageClass,
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
				className={`absolute transition-all w-10 h-10 md:w-[2.75rem] md:h-[2.75rem] duration-500 ease-in-out group-hover:w-40 p-2 rounded-full border-2 border-transparent ${btnStyles} ${btnHoverStyles}`}>
				<div className="flex justify-center items-center">
					<Link isExternal color="foreground" href={linkUrl}>
						<span className="text-sm md:text-medium text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
							{linkText}
						</span>
						<GoArrowUpRight />
					</Link>
				</div>
			</button>
		</div>
	);
};

export default Item;
