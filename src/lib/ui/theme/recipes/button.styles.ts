const base =
  'flex items-center justify-center h-12 w-full px-4 text-sm uppercase font-bold rounded-5 disabled:opacity-50 transition-colors duration-300 ease-in-out cursor-pointer disabled:cursor-not-allowed';

const button = {
  primary: `${base} bg-primary hover:not-disabled:bg-primary-dark`,
  secondary: `${base} bg-secondary hover:not-disabled:bg-secondary-dark`,
  tertiary: `${base} bg-tertiary hover:not-disabled:bg-tertiary-dark`,
} as const;

export default button;
