const pathBuilder = (mode: string) => {
  const production = 'https://producao.com';
  const development = "http://localhost:3000";

  return mode === 'production' ? production : development;
};

process.env.MODE = 'development';

const baseURL = pathBuilder(import.meta.env.MODE)
console.log(import.meta.env.MODE)

export { baseURL };

