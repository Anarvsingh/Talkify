import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem('chat-theme') || 'coffee', // Use 'coffee' as default theme
  
    setTheme: (newTheme) => {
      try {
        localStorage.setItem('chat-theme', newTheme); 
        set({ theme: newTheme }); 
      } catch (error) {
        console.error('Error setting theme in localStorage:', error); 
        // Handle the error gracefully, e.g., by setting a default theme
        set({ theme: 'coffee' }); 
      }
    },
  }));
  