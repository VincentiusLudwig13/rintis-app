// Mulai.data.ts
import { MulaiStepType } from '@/app/(main)/(landing-page)/mulai/type/Mulai.type';

export const MulaiData: MulaiStepType[] = [
  {
    id: 1,
    title: 'Ayo kita mulai,',
    description: 'Pertama, kita perlu tau berapa modal yang siap kamu gunakan',
    field: 'budget',
    placeholder: 'Pastikan ini bukan uang untuk kebutuhan sehari-hari ya!',
    type: 'input',
  },
  {
    id: 2,
    title: 'Oke, modal sudah aman',
    description: 'Seberapa banyak waktu luang...',
    field: 'hour',
    placeholder: 'Pertimbangin waktu luang kamu ya!',
    type: 'input',
  },
  {
    id: 3,
    title: 'Oke, lanjut',
    description: 'Bisnis itu harus dinikmati...',
    field: 'businessModel',
    type: 'tags',
  },
  {
    id: 4,
    title: 'Terakhir',
    description: 'rencananya kamu mau jalanin bisnis ini di mana?',
    field: 'location',
    type: 'select',
  },
];
