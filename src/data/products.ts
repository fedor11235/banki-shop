import { Product } from '@/types';

import headphones1 from '@/assets/products/headphones-1.svg';
import headphones2 from '@/assets/products/headphones-2.svg';
import headphones3 from '@/assets/products/headphones-3.svg';
import sneakers1 from '@/assets/products/sneakers-1.svg';
import sneakers2 from '@/assets/products/sneakers-2.svg';
import sneakers3 from '@/assets/products/sneakers-3.svg';
import watch1 from '@/assets/products/watch-1.svg';
import watch2 from '@/assets/products/watch-2.svg';
import watch3 from '@/assets/products/watch-3.svg';
import backpack1 from '@/assets/products/backpack-1.svg';
import backpack2 from '@/assets/products/backpack-2.svg';
import backpack3 from '@/assets/products/backpack-3.svg';
import camera1 from '@/assets/products/camera-1.svg';
import camera2 from '@/assets/products/camera-2.svg';
import camera3 from '@/assets/products/camera-3.svg';
import speaker1 from '@/assets/products/speaker-1.svg';
import speaker2 from '@/assets/products/speaker-2.svg';
import speaker3 from '@/assets/products/speaker-3.svg';
import keyboard1 from '@/assets/products/keyboard-1.svg';
import keyboard2 from '@/assets/products/keyboard-2.svg';
import keyboard3 from '@/assets/products/keyboard-3.svg';
import phone1 from '@/assets/products/phone-1.svg';
import phone2 from '@/assets/products/phone-2.svg';
import phone3 from '@/assets/products/phone-3.svg';

export const products: Product[] = [
  {
    id: 1,
    name: 'Беспроводные наушники AirSound Pro',
    description:
      'Полноразмерные наушники с активным шумоподавлением, до 30 часов работы от одного заряда и быстрой зарядкой за 10 минут.',
    price: 12990,
    images: [headphones1, headphones2, headphones3],
  },
  {
    id: 2,
    name: 'Кроссовки Urban Runner',
    description:
      'Лёгкие городские кроссовки с амортизирующей подошвой и дышащим верхом. Подходят для бега и повседневной носки.',
    price: 7490,
    images: [sneakers1, sneakers2, sneakers3],
  },
  {
    id: 3,
    name: 'Смарт-часы FitTime 5',
    description:
      'Умные часы с AMOLED-экраном, мониторингом сна и пульса, GPS и защитой от воды по стандарту 5 ATM.',
    price: 15990,
    images: [watch1, watch2, watch3],
  },
  {
    id: 4,
    name: 'Рюкзак CityPack 20L',
    description:
      'Городской рюкзак с отделением для ноутбука до 16", скрытым карманом и влагозащитной тканью.',
    price: 4290,
    images: [backpack1, backpack2, backpack3],
  },
  {
    id: 5,
    name: 'Фотокамера SnapShot X',
    description:
      'Компактная беззеркальная камера с матрицей APS-C, съёмкой видео в 4K и байонетом для сменной оптики.',
    price: 54990,
    images: [camera1, camera2, camera3],
  },
  {
    id: 6,
    name: 'Портативная колонка BoomGo',
    description:
      'Bluetooth-колонка с мощным басом, защитой IP67 и 20 часами автономной работы. Можно объединять в стереопару.',
    price: 5990,
    images: [speaker1, speaker2, speaker3],
  },
  {
    id: 7,
    name: 'Механическая клавиатура KeyMaster TKL',
    description:
      'Беспроводная механическая клавиатура с горячей заменой переключателей, RGB-подсветкой и кейкапами PBT.',
    price: 8990,
    images: [keyboard1, keyboard2, keyboard3],
  },
  {
    id: 8,
    name: 'Смартфон Nova S24',
    description:
      'Флагманский смартфон с OLED-дисплеем 120 Гц, тройной камерой 50 Мп и аккумулятором 5000 мА·ч.',
    price: 69990,
    images: [phone1, phone2, phone3],
  },
];
