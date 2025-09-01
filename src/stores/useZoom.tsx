import { create } from 'zustand';
import { GetState, SetState } from './store.interface';

interface IZoomStore {
  zoom: number;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
  setZoom: (zoom: number) => void;
}

const handleZoomIn = (get: GetState<IZoomStore>) => () => {
  // Don't allow zoom changes on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) return;
  get().setZoom(get().zoom * 1.1);
};

const handleZoomOut = (get: GetState<IZoomStore>) => () => {
  // Don't allow zoom changes on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) return;
  get().setZoom(get().zoom / 1.1);
};

const handleSetZoom = (set: SetState<IZoomStore>) => (zoom: number) =>
  set(() => {
    // Don't allow zoom changes on mobile - CSS handles it
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return { zoom: 1 };
    }
    if (zoom > 1.5) return { zoom: 1.5 };
    if (zoom < 0.6) return { zoom: 0.6 };
    return { zoom: +zoom.toFixed(1) };
  });

const handleResetZoom = (set: SetState<IZoomStore>) => () => {
  set(() => {
    // Mobile responsive zoom
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 768;
      return { zoom: isMobile ? 1 : 0.8 };
    }
    return { zoom: 0.8 };
  });
};

export const useZoom = create<IZoomStore>((set, get) => ({
  zoom: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 0.8,
  setZoom: handleSetZoom(set),
  zoomIn: handleZoomIn(get),
  resetZoom: handleResetZoom(set),
  zoomOut: handleZoomOut(get),
}));
