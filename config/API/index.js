import { Get } from './Get';
import { Post } from './Post';

const login = (email, password) => Post('login', {}, {}, { email, password });
const getAcara = () => Get('acara', {});

export const API = {
  getAcara,
  login,
};
