import { Video } from "../entities/Video";

export interface VideoDataSource{
    fetchUserVideos(id: string): Promise<Video[]>;
    createVideo(video: Video): Promise<void>;

}