import React from "react";

interface MusicPlayerCardProps {
    title: string;
    soundCloudUrl: string;
}

const MusicPlayerCard: React.FC<MusicPlayerCardProps> = ({ title, soundCloudUrl }) => {
    return (
        <div className="w-full h-full p-4 bg-white dark:bg-darkBg rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <div className="w-full">
                <iframe
                    allow="autoplay"
                    frameBorder="no"
                    height="225"
                    scrolling="no"
                    src={soundCloudUrl}
                    title={`SoundCloud player for ${title}`}
                    width="100%"
                 />
                <div
                    style={{
                        fontSize: "10px",
                        color: "#cccccc",
                        lineBreak: "anywhere",
                        wordBreak: "normal",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        fontFamily:
                            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                        fontWeight: 100,
                    }}
                >
                    <a
                        href="https://soundcloud.com/yulania"
                        rel="noreferrer"
                        style={{ color: "#cccccc", textDecoration: "none" }}
                        target="_blank" title="Yulania"
                    >
                        Yulania
                    </a>{" "}
                    ·{" "}
                    <a
                        href={soundCloudUrl}
                        rel="noreferrer"
                        style={{ color: "#cccccc", textDecoration: "none" }}
                        target="_blank" title={title}
                    >
                        {title}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayerCard;