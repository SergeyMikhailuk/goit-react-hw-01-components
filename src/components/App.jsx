import friends from 'db/friends.json';
import user from 'db/user.json';
import data from 'db/data.json';
import transactions from 'db/transactions.json';

import Profile from 'components/Profile';
import Friends from 'components/Friends';
import Statistics from 'components/Statistic';
import TransactionHistory from 'components/Transaction';

import css from './app.module.css';

const App = () => {
  return (
    <div className={css.wrapper}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
