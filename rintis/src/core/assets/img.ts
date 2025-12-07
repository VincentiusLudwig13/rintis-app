export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const IMG = {
  logo: {
    default: <ImageProps>{
      src: '/img/logo/rintis-high-resolution-logo-transparent.svg',
      alt: 'Primary Logo',
      width: 602,
      height: 437,
    },
    grayscale: <ImageProps>{
      src: '/img/logo/rintis-high-resolution-logo-grayscale-transparent.svg',
      alt: 'White Logo',
      width: 602,
      height: 437,
    },
  },
} as const;
