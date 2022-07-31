import {PostRepositoryInterface} from "~/services/post/interface/repository.interface";
import {injectable} from '~/packages/inversify'

@injectable()
export class PostRepository implements PostRepositoryInterface {
    getIds(): number[] {
        return [];
    }

}