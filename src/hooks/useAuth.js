import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserName,
  selectUserEmail,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const username = useSelector(selectUserName);
  const useremail = useSelector(selectUserEmail);

  return { isLoggedIn, username, useremail };
};
