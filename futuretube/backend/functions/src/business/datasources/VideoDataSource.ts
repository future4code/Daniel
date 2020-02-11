import { Video } from "../entities/Video";

export interface VideoDataSource {
    getAllVideos(limit: number, offset: number): Promise<Video[]>;
    deleteVideo(videoId: string): Promise<void>;
    getVideo(videoId: string): Promise<Video>;
    updatedVideoDescription(videoId: string, description: string): Promise<void>;
    updateVideoTitle(videoId: string, title: string): Promise<void>;
    getUserVideos(id: string): Promise<Video[]>;
    createVideo(video: Video): Promise<void>;

}