import { Model } from 'mongoose';
import { Observable } from 'rxjs';
import { User, UserDoc } from './user.model';
export declare class UserService {
    private UserDoc;
    constructor(UserDoc: Model<UserDoc>);
    find(email: string): Observable<User>;
}
