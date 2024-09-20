import React from "react";

import MusicPlayerCard from "@/components/music-player-card";

interface Song {
    title: string;
    soundCloudUrl: string;
}

interface MusicPlayerProps {
    songs: Song[];
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ songs }) => {
    return (
        <div className="w-full h-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {songs.map((song, index) => (
                <MusicPlayerCard key={index} title={song.title} soundCloudUrl={song.soundCloudUrl} />
            ))}
        </div>
    );
};

export default MusicPlayer;
