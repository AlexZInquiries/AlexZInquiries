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
                    width="100%"
                    height="225"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={soundCloudUrl}
                ></iframe>
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
                        title="Yulania"
                        target="_blank"
                        style={{ color: "#cccccc", textDecoration: "none" }}
                    >
                        Yulania
                    </a>{" "}
                    ·{" "}
                    <a
                        href={soundCloudUrl}
                        title={title}
                        target="_blank"
                        style={{ color: "#cccccc", textDecoration: "none" }}
                    >
                        {title}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayerCard;