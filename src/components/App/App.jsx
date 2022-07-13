// Task-01 Profile ===================================
import user from '../../data/user';
import { Profile } from '../Profile/Profile';

// Task-02 Statistics ================================
import data from '../../data/data';
import { Statistics } from '../Statistics/Statistics';

// Task-03 FriendList ================================
import friends from '../../data/friends';
import { FriendList } from '../FriendList/FriendList';

export const App = () => {
    return (
        <>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />

            <Statistics
                title="Upload stats"
                stats={data}
            />

            <FriendList
                friends={friends}
            />

        </>
    );
};