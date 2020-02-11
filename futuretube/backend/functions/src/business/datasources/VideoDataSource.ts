import { Video } from "../entities/Video";

export interface VideoDataSource {
    deleteVideo(videoId: string): Promise<void>;
    getVideo(videoId: string): Promise<Video>;
    updatedVideoDescription(videoId: string, description: string): Promise<void>;
    updateVideoTitle(videoId: string, title: string): Promise<void>;
    fetchUserVideos(id: string): Promise<Video[]>;
    createVideo(video: Video): Promise<void>;

}