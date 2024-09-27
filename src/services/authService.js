// src/services/authService.ts
import axios from 'axios';

export const login = async (username, password) => {
  const response = await axios.post('https://core.wezolo.com/v1/users/login', {
    username,
    password,
  });
  
  return response.data; // API trả về token sau khi đăng nhập thành công
};
