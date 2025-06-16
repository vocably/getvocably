import { presentPaywall } from './presentPaywall';

let timeoutId: ReturnType<typeof setTimeout> | undefined = undefined;

export const presentPaywallSingleton = async () => {
  clearTimeout(timeoutId);

  timeoutId = setTimeout(async () => {
    await presentPaywall();
  }, 500);
};
