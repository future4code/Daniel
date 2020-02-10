import { VideoDataSource } from '../business/datasources/VideoDataSource';
import { Video } from '../business/entities/Video';
import admin = require('firebase-admin');

export class VideoFirestoreDatabase implements VideoDataSource{
    private static VIDEO_COLLETION = 'videos';

    async createVideo(video: Video): Promise<void> {
        await admin.firestore().collection(VideoFirestoreDatabase. VIDEO_COLLETION).doc(video.getId()).set({
            id: video.getId(),
            ownerid: video.getOwnerId(),
            title: video.getTitle(),
            description: video.getDescription(),
            url: video.getUrl()
        });
    }
    async fetchUserVideos(id: string): Promise<Video[]> {
        console.log(id);
        const query = await admin.firestore()
            .collection(VideoFirestoreDatabase.VIDEO_COLLETION)
            .where('ownerid', '==', id)
            .get();
        const videos = query.docs.map(video => {
            const videoData = video.data();
            return new Video(videoData.id,videoData.title,videoData.description,videoData.ownerid,videoData.url);
        });
        return videos;
    }


}