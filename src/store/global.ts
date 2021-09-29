import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    navigation: {
      routes: [
        {
          name: 'Home',
          route: {
            name: 'Home',
          },
        },
      ],
    },
  }),
});
