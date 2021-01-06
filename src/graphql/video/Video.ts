import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Video{
    @Field()
    name: String;
    @Field()
    description: String;
    @Field()
    _di: String;
}

export default Video