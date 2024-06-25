// import { fakeTarifFetching } from '@/consts/mockData';
import { TTarif } from '@/types/tarif';
import axios from 'axios';

const defaultPath = 'https://t-pay.iqfit.app/subscribe';

export const API = {
  tarifs: {
    get: async () => {
      // на время пока CORS не починят )
      // return await fakeTarifFetching();

      return await axios.get<TTarif[]>(`${defaultPath}/list-test`);
    },
  },
};

export async function fetchTarifs(): Promise<TTarif[]> {
  const response = await API.tarifs.get();

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return response.data;
}
