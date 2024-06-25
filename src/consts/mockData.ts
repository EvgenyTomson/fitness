import { TTarif } from '@/types/tarif';

const mockTarifs: TTarif[] = [
  {
    name: '1 неделя',
    price: 699,
    lengthInDays: 0,
    isPopular: true,
    isEndless: false,
    isDiscount: false,
    nonDiscountId: null,
    id: '6c04459a-24ed-43de-9f88-6bf245e9b1f0',
    ownerId: '00000000-0000-0000-0000-000000000000',
    statusId: null,
    creationDateTime: '2024-06-22T13:19:23.3139425+03:00',
    deleted: false,
  },
  {
    name: '1 месяц',
    price: 999,
    lengthInDays: 0,
    isPopular: true,
    isEndless: false,
    isDiscount: false,
    nonDiscountId: null,
    id: 'a5926cfd-8e03-43cb-b200-abdcdec1fa1b',
    ownerId: '00000000-0000-0000-0000-000000000000',
    statusId: null,
    creationDateTime: '2024-06-22T13:19:23.3139441+03:00',
    deleted: false,
  },
  {
    name: '3 месяца',
    price: 2990,
    lengthInDays: 0,
    isPopular: true,
    isEndless: false,
    isDiscount: false,
    nonDiscountId: null,
    id: 'a5375a29-d933-45ef-af87-d5e59530f7b2',
    ownerId: '00000000-0000-0000-0000-000000000000',
    statusId: null,
    creationDateTime: '2024-06-22T13:19:23.3139448+03:00',
    deleted: false,
  },
  {
    name: 'навсегда',
    price: 5990,
    lengthInDays: 0,
    isPopular: true,
    isEndless: false,
    isDiscount: false,
    nonDiscountId: null,
    id: 'e6c2a40f-eef0-4df4-99e2-1985a4999b04',
    ownerId: '00000000-0000-0000-0000-000000000000',
    statusId: null,
    creationDateTime: '2024-06-22T13:19:23.3139455+03:00',
    deleted: false,
  },
  {
    name: '1 неделя',
    price: 999,
    lengthInDays: 0,
    isPopular: false,
    isEndless: false,
    isDiscount: false,
    nonDiscountId: null,
    id: '90b14d1b-7b9b-4974-a479-4e4bdbecab3a',
    ownerId: '00000000-0000-0000-0000-000000000000',
    statusId: null,
    creationDateTime: '2024-06-22T13:19:23.3139461+03:00',
    deleted: false,
  },
  {
    name: '1 месяц',
    price: 1690,
    lengthInDays: 0,
    isPopular: false,
    isEndless: false,
    isDiscount: false,
    nonDiscountId: null,
    id: 'c37e2bc1-8caa-47f0-a00f-bb6e6e4da272',
    ownerId: '00000000-0000-0000-0000-000000000000',
    statusId: null,
    creationDateTime: '2024-06-22T13:19:23.313947+03:00',
    deleted: false,
  },
  {
    name: '3 месяца',
    price: 5990,
    lengthInDays: 0,
    isPopular: false,
    isEndless: false,
    isDiscount: false,
    nonDiscountId: null,
    id: 'cd609115-b995-4b7b-a743-bc41cd094856',
    ownerId: '00000000-0000-0000-0000-000000000000',
    statusId: null,
    creationDateTime: '2024-06-22T13:19:23.3139477+03:00',
    deleted: false,
  },
  {
    name: 'навсегда',
    price: 18990,
    lengthInDays: 0,
    isPopular: false,
    isEndless: false,
    isDiscount: false,
    nonDiscountId: null,
    id: 'd7a81fb3-e09c-4c43-bb38-0e602ba2af2f',
    ownerId: '00000000-0000-0000-0000-000000000000',
    statusId: null,
    creationDateTime: '2024-06-22T13:19:23.3139483+03:00',
    deleted: false,
  },
  {
    name: '1 неделя',
    price: 599,
    lengthInDays: 0,
    isPopular: false,
    isEndless: false,
    isDiscount: true,
    nonDiscountId: null,
    id: 'bf28c2c5-f0b0-4af6-9744-207a341767a0',
    ownerId: '00000000-0000-0000-0000-000000000000',
    statusId: null,
    creationDateTime: '2024-06-22T13:19:23.313949+03:00',
    deleted: false,
  },
  {
    name: '1 месяц',
    price: 799,
    lengthInDays: 0,
    isPopular: false,
    isEndless: false,
    isDiscount: true,
    nonDiscountId: null,
    id: 'db8d5c75-f6c5-43d1-b447-9fdcfcb952ca',
    ownerId: '00000000-0000-0000-0000-000000000000',
    statusId: null,
    creationDateTime: '2024-06-22T13:19:23.3139497+03:00',
    deleted: false,
  },
  {
    name: '3 месяца',
    price: 1690,
    lengthInDays: 0,
    isPopular: false,
    isEndless: false,
    isDiscount: true,
    nonDiscountId: null,
    id: 'b8b6963d-7d29-4050-8790-a6d9484db586',
    ownerId: '00000000-0000-0000-0000-000000000000',
    statusId: null,
    creationDateTime: '2024-06-22T13:19:23.3139504+03:00',
    deleted: false,
  },
];

/* Ребята, у вас CORS блокирует запросы к апи, поэтому приходится городить фековые данные
данные забрал через постман, ему-то настройки CORS не важны, в отличии от браузера */
type FakeResponse = {
  data: TTarif[];
  status: number;
  statusText: string;
};

export const fakeTarifFetching = () => {
  return new Promise<FakeResponse>((resolve: (value: FakeResponse) => void) => {
    setTimeout(() => {
      resolve({ data: mockTarifs, status: 200, statusText: 'Fake Error' });
    }, 1500);
  });
};

// Эти данные нужны для корректного отображения, но из API они не приходят.
// Хардкодим то, что есть в макете. При этом id генерируются на сервере рандомно
// Значит, мы не может тут указать id нужных тарифов и приходится мокать просто индексами.
interface TMockTarifData {
  oldPrice: number;
  discount: number;
  text: string;
}

export const tarifsDataMock: TMockTarifData[] = [
  {
    oldPrice: 999,
    discount: 30,
    text: 'Чтобы просто начать\u00A0👍🏻',
  },
  {
    oldPrice: 1690,
    discount: 40,
    text: 'Привести тело впорядок\u00A0💪🏻',
  },
  {
    oldPrice: 5990,
    discount: 50,
    text: 'Изменить образ жизни\u00A0🔥',
  },
  {
    oldPrice: 18990,
    discount: 70,
    text: 'Всегда быть в\u00A0форме и\u00A0поддерживать своё здоровье\u00A0⭐️',
  },
];

type TMockDiscountTarifData = Omit<TMockTarifData, 'text'>;

export const discountTarifsDataMock: TMockDiscountTarifData[] = [
  {
    oldPrice: 999,
    discount: 40,
  },
  {
    oldPrice: 1690,
    discount: 50,
  },
  {
    oldPrice: 5990,
    discount: 60,
  },
];
