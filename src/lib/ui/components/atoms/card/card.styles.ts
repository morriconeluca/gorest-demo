import t from '@/lib/ui/theme/recipes/typography.styles';

export const label = `${t.heading.small} h-12 flex items-center justify-center sm:w-[calc((100%-1rem)/2)] sm:bg-black-light/80 sm:drop-shadow-base-only-right sm:rounded-t-10`;

export const card = {
  true: 'px-4 py-12 sm:px-16 sm:bg-black-light/80 sm:drop-shadow-base sm:rounded-tr-10 sm:rounded-b-10',
  false:
    'px-4 py-12 sm:px-16 sm:bg-black-light/80 sm:drop-shadow-base sm:rounded-10',
};
