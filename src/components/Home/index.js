// import React from 'react';
// import { withAuthorization } from '../Session';
// const HomePage = () => (
//   <div>
//     <h1>Home Page</h1>
//     <p>The Home Page is accessible by every signed in user.</p>
//   </div>
// );
// const condition = authUser => !!authUser;
// export default withAuthorization(condition)(HomePage);



import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
// import Messages from '../Messages';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>

    {/* <Messages /> */}
  </div>
);

// const condition = authUser => !!authUser;

// export default compose(
//   withEmailVerification,
//   withAuthorization(condition),
// )(HomePage);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);