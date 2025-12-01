export const track = async (eventName: string, params: any, poll = 0) => {
  //@ts-expect-error
  if (!window.umami) {
    if (poll < 10) {
      console.warn(
        'Umami not loaded. Retrying in 1 second...',
        eventName,
        params
      );
      setTimeout(() => track(eventName, params, poll + 1), 1000);
      return;
    }

    console.warn('Umami not loaded. No retry.');

    return;
  }

  //@ts-expect-error
  return window.umami.track(eventName, params);
};
