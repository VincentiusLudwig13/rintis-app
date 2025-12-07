import { KelolaStepType } from '@/app/(main)/(landing-page)/kelola/type/Kelola.type';

export const KelolaData: KelolaStepType[] = [
  {
    id: 1,
    title: 'Hii, salam kenal!',
    description:
      'Supaya kami bisa bantu pantau keuangan, sekarang uang tunai/kas yang kamu pegang untuk usaha ada berapa?',
    type: 'input',
    field: 'cash',
    placeholder: 'Input uang kas mu disini',
  },
  {
    id: 2,
    title: 'Berapa omzet per bulan?',
    description:
      'Kami mau tau, supaya bisa memberikan insight kalau ada apa-apa',
    type: 'input',
    field: 'omzet',
    placeholder: 'Input omzet mu disini',
  },
  {
    id: 3,
    title: 'Ayo, kita mulai',
    description: undefined,
    type: 'none',
  },
];
