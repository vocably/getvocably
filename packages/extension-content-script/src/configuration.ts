export type ContentScriptConfiguration = {
  askForRatingEnabled: boolean;
  displayMobileLookupButton: boolean;
  allowFirstTranslationCongratulation: boolean;
  webPaymentLink: string;
  premiumCtaSuffix: string;
};

export let contentScriptConfiguration: ContentScriptConfiguration = {
  askForRatingEnabled: false,
  displayMobileLookupButton: false,
  allowFirstTranslationCongratulation: false,
  webPaymentLink: 'https://app.vocably.pro/subscribe',
  premiumCtaSuffix: '',
};

export const configureContentScript = (
  configuration: Partial<ContentScriptConfiguration>
) => {
  contentScriptConfiguration = {
    ...contentScriptConfiguration,
    ...configuration,
  };
};
