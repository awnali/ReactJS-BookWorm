import axios from 'axios';

export default {
  user: {
    login: credentials =>
      axios.post('api/auth', { credentials }).then(res => res.data.user),
    signup: user =>
      axios.post('api/users/signup', { user }).then(res => res.data.user),
  },
};
