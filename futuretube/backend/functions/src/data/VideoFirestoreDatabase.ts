import { VideoDataSource } from '../business/datasources/VideoDataSource';
import { Video } from '../business/entities/Video';
import admin = require('firebase-admin');

export class VideoFirestoreDatabase implements VideoDataSource {

    private static VIDEO_COLLETION = 'videos';

    public async createVideo(video: Video): Promise<void> {
        await admin.firestore().collection(VideoFirestoreDatabase.VIDEO_COLLETION).doc(video.getId()).set({
            id: video.getId(),
            ownerid: video.getOwnerId(),
            title: video.getTitle(),
            description: video.getDescription(),
            url: video.getUrl()
        });
    }
    public async fetchUserVideos(id: string): Promise<Video[]> {
        const query = await admin.firestore()
            .collection(VideoFirestoreDatabase.VIDEO_COLLETION)
            .where('ownerid', '==', id)
            .get();
        const videos = query.docs.map(video => {
            const videoData = video.data();
            return new Video(videoData.id, videoData.title, videoData.description, videoData.ownerid, videoData.url);
        });
        return videos;
    }
    public async getVideo(videoId: string): Promise<Video> {
        const videoRef = await admin.firestore().collection(VideoFirestoreDatabase.VIDEO_COLLETION).doc(videoId).get();
        const videoDoc = videoRef.data();
        if (videoDoc) {
            return new Video(videoDoc.id, videoDoc.title, videoDoc.description, videoDoc.ownerid, videoDoc.url);
        }
        else {
            throw new Error("Não foi possível encontrar o video!");
        }
    }
    public async updatedVideoDescription(videoId: string, description: string): Promise<void> {
        const videoRef = admin.firestore().collection(VideoFirestoreDatabase.VIDEO_COLLETION).doc(videoId);
        await videoRef.update({ description });
    }
    public async updateVideoTitle(videoId: string, title: string): Promise<void> {
        const videoRef = admin.firestore().collection(VideoFirestoreDatabase.VIDEO_COLLETION).doc(videoId);
        await videoRef.update({ title });
    }

}