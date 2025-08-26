export interface ICartService {
  add: (id: string, qty: number) => void;
  update: (id: string, qty: number) => void;
  delete: (id: string) => void;
}
