import {InputType, Field, Query, Resolver, Mutation, Arg } from "type-graphql";
import Video from "./Video";
import VideoSchema from '../../models/VideoSchema'

@InputType()
class VideoInput{
    @Field()
    description: String;
    @Field()
    name: String;
    @Field()
    category: String;
}



@Resolver(Video)
class VideoResolver{
    @Query(()=> [Video])
    async videos(){
        const videos = await VideoSchema.find() 
        return videos
    } 

    @Mutation(()=> [Video])
    async createVideos(@Arg('videoInput')videoInput: VideoInput){
        const video = await VideoSchema.create(videoInput)
        return video
    }
}

export default VideoResolver