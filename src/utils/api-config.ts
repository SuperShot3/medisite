export const getApiConfig = () => {
  return {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    secretKey: process.env.API_SECRET_KEY,
    baseUrl: 'https://api.example.com', // замените на ваш базовый URL
  }
} 