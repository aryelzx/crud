const pathBuilder = (mode: string) => {
  const production = 'https://producao.com';
  const development = "http://localhost:8800";

  return mode === 'production' ? production : development;
};

const mode = import.meta.env.MODE;
console.log(mode, '- MODE')

const baseURL = pathBuilder(mode)

export { baseURL };

