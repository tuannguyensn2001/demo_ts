import {myContainer} from "~/container/inversify.config";
import {PostServiceInterface} from "~/services/post/interface/service.interface";
import TYPES from "~/container/type";
import "reflect-metadata";

const service = myContainer.get<PostServiceInterface>(TYPES.PostService);

console.log(service.say());