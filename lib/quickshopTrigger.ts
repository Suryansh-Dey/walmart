import { create } from 'zustand';

interface QuickShopTriggerStore {
  open: boolean;
  product: null | {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
  };
  trigger: (product: QuickShopTriggerStore['product']) => void;
  reset: () => void;
}

export const useQuickShopTrigger = create<QuickShopTriggerStore>((set) => ({
  open: false,
  product: null,
  trigger: (product) => set({ open: true, product }),
  reset: () => set({ open: false, product: null }),
}));
