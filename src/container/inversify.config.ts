import {Container} from "inversify";
import {PostServiceInterface} from "~/services/post/interface/service.interface";
import TYPES from "~/container/type";
import {PostService} from "~/services/post/service";
import {PostRepositoryInterface} from "~/services/post/interface/repository.interface";
import {PostRepository} from "~/services/post/repository";

const myContainer = new Container();

myContainer.bind<PostServiceInterface>(TYPES.PostService).to(PostService);
myContainer.bind<PostRepositoryInterface>(TYPES.PostRepository).to(PostRepository)

export {myContainer}