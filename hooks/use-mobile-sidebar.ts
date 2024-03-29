import { create } from 'zustand';

type MobielSidebarStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useMobileSidebar = create<MobielSidebarStore>(( set ) => ({
    isOpen: false, 
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
