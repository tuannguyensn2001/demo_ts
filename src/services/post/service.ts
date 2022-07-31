import {PostServiceInterface} from "~/services/post/interface/service.interface";
import {injectable, inject} from "~/packages/inversify";
import TYPES from "~/container/type";
import {PostRepositoryInterface} from "~/services/post/interface/repository.interface";

@injectable()
export class PostService implements PostServiceInterface {

    constructor(@inject(TYPES.PostRepository) private postRepository: PostRepositoryInterface) {
    }

    public say() {
        console.log(this.postRepository.getIds())
        return "hi"
    }
}