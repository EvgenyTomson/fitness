import { TTarif } from '@/types/tarif';
import { API } from '@API/API';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface TarifState {
  tarifs: TTarif[];
  popularTarifs: TTarif[];
  discountTarifs: TTarif[];
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string | null;
}

const initialState: TarifState = {
  tarifs: [],
  popularTarifs: [],
  discountTarifs: [],
  status: 'idle',
  error: null,
};

export const fetchTarifs = createAsyncThunk<TTarif[]>('tarif/fetchTarifs', async () => {
  const response = await API.tarifs.get();

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return response.data;
});

const tarifSlice = createSlice({
  name: 'tarif',
  initialState,
  reducers: {},
  selectors: {
    selectTarifStatus: (state) => state.status,
    selectTarifError: (state) => state.error,
    selectAllTarifs: (state) => state.tarifs,
    selectPopularTarifs: (state) => state.popularTarifs,
    selectDiscountTarifs: (state) => state.discountTarifs,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTarifs.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchTarifs.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.tarifs = action.payload;
        // Один раз при получении данных раскланываем тарифы по категориям
        // и при вызове нужного селектора не итерируемся по всем тарифам каждый раз
        state.popularTarifs = action.payload.filter((tarif) => tarif.isPopular);
        state.discountTarifs = action.payload.filter((tarif) => tarif.isDiscount);
        state.error = null;
      })
      .addCase(fetchTarifs.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message ?? 'Произошла ошибка';
      });
  },
});

export const {
  selectAllTarifs,
  selectPopularTarifs,
  selectDiscountTarifs,
  selectTarifStatus,
  selectTarifError,
} = tarifSlice.selectors;

export default tarifSlice;
