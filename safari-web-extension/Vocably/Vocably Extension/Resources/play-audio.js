/*!
 * Hello to whoever is reading this! I think you are cool 🤜🤛
 *
 * I did not obfuscate the code to help you better understand it.
 * However, I don't know how to disable minification of web components (StencilJS).
 * Sorry, I didn't look too hard!
 * The code of the entire project is available at:
 * https://github.com/vocably/language-learning-tool
 *
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ../../node_modules/@vocably/hermes/dist/esm/index.js
let browserEnv;
if (typeof chrome !== 'undefined') {
    browserEnv = chrome;
    // @ts-ignore
}
else if (typeof browser !== 'undefined') {
    // @ts-ignore
    browserEnv = browser;
}
const makeSend = (identifier) => (data, extensionId) => {
    return new Promise((resolve, reject) => {
        if (!browserEnv) {
            reject('browserEnv environment is not defined');
            return;
        }
        if (!browserEnv.runtime) {
            reject('browserEnv.runtime is not defined defined');
            return;
        }
        const sendParams = [
            { identifier, data },
            (response) => {
                if (browserEnv.runtime.lastError) {
                    return reject(browserEnv.runtime.lastError);
                }
                resolve(response);
            },
        ];
        if (extensionId) {
            sendParams.unshift(extensionId);
        }
        browserEnv.runtime.sendMessage(...sendParams);
    });
};
const makeListener = (identifier, callback) => (request, sender, nativeSendResponse) => {
    if (typeof request !== 'object' ||
        request === null ||
        request.identifier !== identifier) {
        return;
    }
    const data = request.data;
    const sendResponse = (r) => {
        nativeSendResponse(r);
        return r;
    };
    callback(sendResponse, data);
    return true;
};
const createMessage = (identifier) => {
    const subscribe = (callback) => {
        browserEnv.runtime.onMessage.addListener(makeListener(identifier, callback));
    };
    return [makeSend(identifier), subscribe];
};
const createExternalMessage = (identifier) => {
    const send = makeSend(identifier);
    const subscribe = (callback) => {
        browserEnv.runtime.onMessageExternal.addListener(makeListener(identifier, callback));
    };
    return [
        (extensionId, data) => send(data, extensionId),
        subscribe,
    ];
};

;// CONCATENATED MODULE: ../extension-messages/dist/esm/index.js

const createScope = (scope) => (identifier) => createMessage(`${scope}.${identifier}`);
const createScopedMessage = createScope('vocably');
const [isLoggedIn, onIsLoggedInRequest] = createScopedMessage('isLoggedIn');
const [getSettings, onGetSettingsRequest] = createScopedMessage('getSettings');
const [setSettings, onSetSettingsRequest] = createScopedMessage('setSettings');
const [isActive, onIsActiveRequest] = createScopedMessage('isActive');
const [isEligibleForTrial, onIsEligibleForTrialRequest] = createScopedMessage('isEligibleForTrial');
const [getMaxCards, onGetMaxCardsRequest] = createScopedMessage('getMaxCards');
const [getUserEmail, onGetUserEmail] = createScopedMessage('getUserEmail');
const [analyze, onAnalyzeRequest] = createScopedMessage('analyze');
const [removeCard, onRemoveCardRequest] = createScopedMessage('removeCard');
const [addCard, onAddCardRequest] = createScopedMessage('addCard');
const [listLanguages, onListLanguagesRequest] = createScopedMessage('listLanguages');
const [listTargetLanguages, onListTargetLanguagesRequest] = createScopedMessage('listTargetLanguages');
const [getLocationLanguage, onGetLocationLanguageRequest] = createScopedMessage('getLocationLanguage');
const [saveLocationLanguage, onSaveLocationLanguageRequest] = createScopedMessage('saveLocationLanguage');
const [getLanguagePairs, onGetLanguagePairs] = createScopedMessage('getLanguagePairs');
const [cleanUp, onCleanUpRequest] = createScopedMessage('cleanUp');
const [ping, onPing] = createScopedMessage('ping');
const [getInternalProxyLanguage, onGetInternalProxyLanuage] = createScopedMessage('getInternalProxyLanguage');
const [setInternalProxyLanguage, onSetInternalProxyLanguage] = createScopedMessage('setInternalProxyLanguage');
const [getInternalSourceLanguage, onGetInternalSourceLanguage] = createScopedMessage('getInternalSourceLanguage');
const [setInternalSourceLanguage, onSetInternalSourceLanguage] = createScopedMessage('setInternalSourceLanguage');
const [isUserKnowsHowToAdd, onIsUserKnowsHowToAdd] = createScopedMessage('isUserKnowsHowToAdd');
const [setUserKnowsHowToAdd, onSetUserKnowsHowToAdd] = createScopedMessage('setUserKnowsHowToAdd');
const [pingExternal, onPingExternal] = createExternalMessage('vocably.ping-external');
const [setProxyLanguage, onSetProxyLanguage] = createExternalMessage('vocably.setProxyLanguage');
const [getProxyLanguage, onGetProxyLanguage] = createExternalMessage('vocably.getProxyLanguage');
const [setSourceLanguage, onSetSourceLanguage] = createExternalMessage('vocably.setSourceLanguage');
const [getSourceLanguage, onGetSourceLanguage] = createExternalMessage('vocably.getSourceLanguage');
const [getAudioPronunciation, onGetAudioPronunciation] = createScopedMessage('getAudioPronunciation');
const [askForRating, onAskForRating] = createScopedMessage('askForRating');
const [saveAskForRatingResponse, onSaveAskForRatingResponse] = createScopedMessage('askForRatingResponse');
const [playAudioPronunciation, onPlayAudioPronunciation] = createScopedMessage('playAudioPronunciation');
const [playAudioPronunciationOffscreen, onPlayAudioPronunciationOffscreen,] = createScopedMessage('playAudioPronunciationOffscreen');
const [canPlayOffScreen, onCanPlayOffScreen] = createScopedMessage('canPlayOffScreen');
const [updateCard, onUpdateCard] = createScopedMessage('updateCard');
const [attachTag, onAttachTag] = createScopedMessage('attachTag');
const [detachTag, onDetachTag] = createScopedMessage('detachTag');
const [updateTag, onUpdateTag] = createScopedMessage('updateTag');
const [deleteTag, onDeleteTag] = createScopedMessage('deleteTag');

;// CONCATENATED MODULE: ./src/play-audio.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const playDataUrl = (dataUrl) => __awaiter(void 0, void 0, void 0, function* () {
    return yield new Promise((resolve) => {
        try {
            const audio = new Audio(dataUrl);
            audio.addEventListener('ended', () => {
                resolve({
                    success: true,
                    value: true,
                });
            });
            audio.play().catch((e) => {
                resolve({
                    success: false,
                    errorCode: 'UNABLE_TO_PLAY_AUDIO_DATA_URL',
                    reason: 'An error occurred while playing the offscreen audio',
                    extra: e,
                });
            });
        }
        catch (e) {
            resolve({
                success: false,
                errorCode: 'UNABLE_TO_PLAY_AUDIO_DATA_URL',
                reason: 'An error occurred while playing the offscreen audio',
                extra: e,
            });
        }
    });
});
onPlayAudioPronunciationOffscreen((sendResponse, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield getAudioPronunciation(payload);
    if (result.success === false) {
        return sendResponse(result);
    }
    return sendResponse(yield playDataUrl(result.value.url));
}));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS1hdWRpby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxrQkFBa0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMvRHVFO0FBQ3ZFLCtDQUErQyxhQUFhLElBQUksTUFBTSxHQUFHLFdBQVc7QUFDcEY7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFCQUFxQjtBQUM1RCwrQ0FBK0MscUJBQXFCO0FBQ3BFLCtDQUErQyxxQkFBcUI7QUFDcEUsaURBQWlELHFCQUFxQjtBQUN0RSxpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3pDUCxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDd0c7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0QsaUNBQWlDO0FBQ2pDLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHZvY2FibHkvc2FmYXJpLWV4dGVuc2lvbi8uLi8uLi9ub2RlX21vZHVsZXMvQHZvY2FibHkvaGVybWVzL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL0B2b2NhYmx5L3NhZmFyaS1leHRlbnNpb24vLi4vZXh0ZW5zaW9uLW1lc3NhZ2VzL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL0B2b2NhYmx5L3NhZmFyaS1leHRlbnNpb24vLi9zcmMvcGxheS1hdWRpby50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYnJvd3NlckVudjtcbmlmICh0eXBlb2YgY2hyb21lICE9PSAndW5kZWZpbmVkJykge1xuICAgIGJyb3dzZXJFbnYgPSBjaHJvbWU7XG4gICAgLy8gQHRzLWlnbm9yZVxufVxuZWxzZSBpZiAodHlwZW9mIGJyb3dzZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGJyb3dzZXJFbnYgPSBicm93c2VyO1xufVxuY29uc3QgbWFrZVNlbmQgPSAoaWRlbnRpZmllcikgPT4gKGRhdGEsIGV4dGVuc2lvbklkKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKCFicm93c2VyRW52KSB7XG4gICAgICAgICAgICByZWplY3QoJ2Jyb3dzZXJFbnYgZW52aXJvbm1lbnQgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWJyb3dzZXJFbnYucnVudGltZSkge1xuICAgICAgICAgICAgcmVqZWN0KCdicm93c2VyRW52LnJ1bnRpbWUgaXMgbm90IGRlZmluZWQgZGVmaW5lZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbmRQYXJhbXMgPSBbXG4gICAgICAgICAgICB7IGlkZW50aWZpZXIsIGRhdGEgfSxcbiAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChicm93c2VyRW52LnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoYnJvd3NlckVudi5ydW50aW1lLmxhc3RFcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgaWYgKGV4dGVuc2lvbklkKSB7XG4gICAgICAgICAgICBzZW5kUGFyYW1zLnVuc2hpZnQoZXh0ZW5zaW9uSWQpO1xuICAgICAgICB9XG4gICAgICAgIGJyb3dzZXJFbnYucnVudGltZS5zZW5kTWVzc2FnZSguLi5zZW5kUGFyYW1zKTtcbiAgICB9KTtcbn07XG5jb25zdCBtYWtlTGlzdGVuZXIgPSAoaWRlbnRpZmllciwgY2FsbGJhY2spID0+IChyZXF1ZXN0LCBzZW5kZXIsIG5hdGl2ZVNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcmVxdWVzdCAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgcmVxdWVzdCA9PT0gbnVsbCB8fFxuICAgICAgICByZXF1ZXN0LmlkZW50aWZpZXIgIT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gcmVxdWVzdC5kYXRhO1xuICAgIGNvbnN0IHNlbmRSZXNwb25zZSA9IChyKSA9PiB7XG4gICAgICAgIG5hdGl2ZVNlbmRSZXNwb25zZShyKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICBjYWxsYmFjayhzZW5kUmVzcG9uc2UsIGRhdGEpO1xuICAgIHJldHVybiB0cnVlO1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVNZXNzYWdlID0gKGlkZW50aWZpZXIpID0+IHtcbiAgICBjb25zdCBzdWJzY3JpYmUgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgYnJvd3NlckVudi5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihtYWtlTGlzdGVuZXIoaWRlbnRpZmllciwgY2FsbGJhY2spKTtcbiAgICB9O1xuICAgIHJldHVybiBbbWFrZVNlbmQoaWRlbnRpZmllciksIHN1YnNjcmliZV07XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUV4dGVybmFsTWVzc2FnZSA9IChpZGVudGlmaWVyKSA9PiB7XG4gICAgY29uc3Qgc2VuZCA9IG1ha2VTZW5kKGlkZW50aWZpZXIpO1xuICAgIGNvbnN0IHN1YnNjcmliZSA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICBicm93c2VyRW52LnJ1bnRpbWUub25NZXNzYWdlRXh0ZXJuYWwuYWRkTGlzdGVuZXIobWFrZUxpc3RlbmVyKGlkZW50aWZpZXIsIGNhbGxiYWNrKSk7XG4gICAgfTtcbiAgICByZXR1cm4gW1xuICAgICAgICAoZXh0ZW5zaW9uSWQsIGRhdGEpID0+IHNlbmQoZGF0YSwgZXh0ZW5zaW9uSWQpLFxuICAgICAgICBzdWJzY3JpYmUsXG4gICAgXTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVFeHRlcm5hbE1lc3NhZ2UsIGNyZWF0ZU1lc3NhZ2UgfSBmcm9tICdAdm9jYWJseS9oZXJtZXMnO1xuY29uc3QgY3JlYXRlU2NvcGUgPSAoc2NvcGUpID0+IChpZGVudGlmaWVyKSA9PiBjcmVhdGVNZXNzYWdlKGAke3Njb3BlfS4ke2lkZW50aWZpZXJ9YCk7XG5jb25zdCBjcmVhdGVTY29wZWRNZXNzYWdlID0gY3JlYXRlU2NvcGUoJ3ZvY2FibHknKTtcbmV4cG9ydCBjb25zdCBbaXNMb2dnZWRJbiwgb25Jc0xvZ2dlZEluUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdpc0xvZ2dlZEluJyk7XG5leHBvcnQgY29uc3QgW2dldFNldHRpbmdzLCBvbkdldFNldHRpbmdzUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdnZXRTZXR0aW5ncycpO1xuZXhwb3J0IGNvbnN0IFtzZXRTZXR0aW5ncywgb25TZXRTZXR0aW5nc1JlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnc2V0U2V0dGluZ3MnKTtcbmV4cG9ydCBjb25zdCBbaXNBY3RpdmUsIG9uSXNBY3RpdmVSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2lzQWN0aXZlJyk7XG5leHBvcnQgY29uc3QgW2lzRWxpZ2libGVGb3JUcmlhbCwgb25Jc0VsaWdpYmxlRm9yVHJpYWxSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2lzRWxpZ2libGVGb3JUcmlhbCcpO1xuZXhwb3J0IGNvbnN0IFtnZXRNYXhDYXJkcywgb25HZXRNYXhDYXJkc1JlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnZ2V0TWF4Q2FyZHMnKTtcbmV4cG9ydCBjb25zdCBbZ2V0VXNlckVtYWlsLCBvbkdldFVzZXJFbWFpbF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdnZXRVc2VyRW1haWwnKTtcbmV4cG9ydCBjb25zdCBbYW5hbHl6ZSwgb25BbmFseXplUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdhbmFseXplJyk7XG5leHBvcnQgY29uc3QgW3JlbW92ZUNhcmQsIG9uUmVtb3ZlQ2FyZFJlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgncmVtb3ZlQ2FyZCcpO1xuZXhwb3J0IGNvbnN0IFthZGRDYXJkLCBvbkFkZENhcmRSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2FkZENhcmQnKTtcbmV4cG9ydCBjb25zdCBbbGlzdExhbmd1YWdlcywgb25MaXN0TGFuZ3VhZ2VzUmVxdWVzdF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdsaXN0TGFuZ3VhZ2VzJyk7XG5leHBvcnQgY29uc3QgW2xpc3RUYXJnZXRMYW5ndWFnZXMsIG9uTGlzdFRhcmdldExhbmd1YWdlc1JlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnbGlzdFRhcmdldExhbmd1YWdlcycpO1xuZXhwb3J0IGNvbnN0IFtnZXRMb2NhdGlvbkxhbmd1YWdlLCBvbkdldExvY2F0aW9uTGFuZ3VhZ2VSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ2dldExvY2F0aW9uTGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbc2F2ZUxvY2F0aW9uTGFuZ3VhZ2UsIG9uU2F2ZUxvY2F0aW9uTGFuZ3VhZ2VSZXF1ZXN0XSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ3NhdmVMb2NhdGlvbkxhbmd1YWdlJyk7XG5leHBvcnQgY29uc3QgW2dldExhbmd1YWdlUGFpcnMsIG9uR2V0TGFuZ3VhZ2VQYWlyc10gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdnZXRMYW5ndWFnZVBhaXJzJyk7XG5leHBvcnQgY29uc3QgW2NsZWFuVXAsIG9uQ2xlYW5VcFJlcXVlc3RdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnY2xlYW5VcCcpO1xuZXhwb3J0IGNvbnN0IFtwaW5nLCBvblBpbmddID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgncGluZycpO1xuZXhwb3J0IGNvbnN0IFtnZXRJbnRlcm5hbFByb3h5TGFuZ3VhZ2UsIG9uR2V0SW50ZXJuYWxQcm94eUxhbnVhZ2VdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnZ2V0SW50ZXJuYWxQcm94eUxhbmd1YWdlJyk7XG5leHBvcnQgY29uc3QgW3NldEludGVybmFsUHJveHlMYW5ndWFnZSwgb25TZXRJbnRlcm5hbFByb3h5TGFuZ3VhZ2VdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnc2V0SW50ZXJuYWxQcm94eUxhbmd1YWdlJyk7XG5leHBvcnQgY29uc3QgW2dldEludGVybmFsU291cmNlTGFuZ3VhZ2UsIG9uR2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZV0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdnZXRJbnRlcm5hbFNvdXJjZUxhbmd1YWdlJyk7XG5leHBvcnQgY29uc3QgW3NldEludGVybmFsU291cmNlTGFuZ3VhZ2UsIG9uU2V0SW50ZXJuYWxTb3VyY2VMYW5ndWFnZV0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdzZXRJbnRlcm5hbFNvdXJjZUxhbmd1YWdlJyk7XG5leHBvcnQgY29uc3QgW2lzVXNlcktub3dzSG93VG9BZGQsIG9uSXNVc2VyS25vd3NIb3dUb0FkZF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdpc1VzZXJLbm93c0hvd1RvQWRkJyk7XG5leHBvcnQgY29uc3QgW3NldFVzZXJLbm93c0hvd1RvQWRkLCBvblNldFVzZXJLbm93c0hvd1RvQWRkXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ3NldFVzZXJLbm93c0hvd1RvQWRkJyk7XG5leHBvcnQgY29uc3QgW3BpbmdFeHRlcm5hbCwgb25QaW5nRXh0ZXJuYWxdID0gY3JlYXRlRXh0ZXJuYWxNZXNzYWdlKCd2b2NhYmx5LnBpbmctZXh0ZXJuYWwnKTtcbmV4cG9ydCBjb25zdCBbc2V0UHJveHlMYW5ndWFnZSwgb25TZXRQcm94eUxhbmd1YWdlXSA9IGNyZWF0ZUV4dGVybmFsTWVzc2FnZSgndm9jYWJseS5zZXRQcm94eUxhbmd1YWdlJyk7XG5leHBvcnQgY29uc3QgW2dldFByb3h5TGFuZ3VhZ2UsIG9uR2V0UHJveHlMYW5ndWFnZV0gPSBjcmVhdGVFeHRlcm5hbE1lc3NhZ2UoJ3ZvY2FibHkuZ2V0UHJveHlMYW5ndWFnZScpO1xuZXhwb3J0IGNvbnN0IFtzZXRTb3VyY2VMYW5ndWFnZSwgb25TZXRTb3VyY2VMYW5ndWFnZV0gPSBjcmVhdGVFeHRlcm5hbE1lc3NhZ2UoJ3ZvY2FibHkuc2V0U291cmNlTGFuZ3VhZ2UnKTtcbmV4cG9ydCBjb25zdCBbZ2V0U291cmNlTGFuZ3VhZ2UsIG9uR2V0U291cmNlTGFuZ3VhZ2VdID0gY3JlYXRlRXh0ZXJuYWxNZXNzYWdlKCd2b2NhYmx5LmdldFNvdXJjZUxhbmd1YWdlJyk7XG5leHBvcnQgY29uc3QgW2dldEF1ZGlvUHJvbnVuY2lhdGlvbiwgb25HZXRBdWRpb1Byb251bmNpYXRpb25dID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnZ2V0QXVkaW9Qcm9udW5jaWF0aW9uJyk7XG5leHBvcnQgY29uc3QgW2Fza0ZvclJhdGluZywgb25Bc2tGb3JSYXRpbmddID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnYXNrRm9yUmF0aW5nJyk7XG5leHBvcnQgY29uc3QgW3NhdmVBc2tGb3JSYXRpbmdSZXNwb25zZSwgb25TYXZlQXNrRm9yUmF0aW5nUmVzcG9uc2VdID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnYXNrRm9yUmF0aW5nUmVzcG9uc2UnKTtcbmV4cG9ydCBjb25zdCBbcGxheUF1ZGlvUHJvbnVuY2lhdGlvbiwgb25QbGF5QXVkaW9Qcm9udW5jaWF0aW9uXSA9IGNyZWF0ZVNjb3BlZE1lc3NhZ2UoJ3BsYXlBdWRpb1Byb251bmNpYXRpb24nKTtcbmV4cG9ydCBjb25zdCBbcGxheUF1ZGlvUHJvbnVuY2lhdGlvbk9mZnNjcmVlbiwgb25QbGF5QXVkaW9Qcm9udW5jaWF0aW9uT2Zmc2NyZWVuLF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdwbGF5QXVkaW9Qcm9udW5jaWF0aW9uT2Zmc2NyZWVuJyk7XG5leHBvcnQgY29uc3QgW2NhblBsYXlPZmZTY3JlZW4sIG9uQ2FuUGxheU9mZlNjcmVlbl0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCdjYW5QbGF5T2ZmU2NyZWVuJyk7XG5leHBvcnQgY29uc3QgW3VwZGF0ZUNhcmQsIG9uVXBkYXRlQ2FyZF0gPSBjcmVhdGVTY29wZWRNZXNzYWdlKCd1cGRhdGVDYXJkJyk7XG5leHBvcnQgY29uc3QgW2F0dGFjaFRhZywgb25BdHRhY2hUYWddID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnYXR0YWNoVGFnJyk7XG5leHBvcnQgY29uc3QgW2RldGFjaFRhZywgb25EZXRhY2hUYWddID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnZGV0YWNoVGFnJyk7XG5leHBvcnQgY29uc3QgW3VwZGF0ZVRhZywgb25VcGRhdGVUYWddID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgndXBkYXRlVGFnJyk7XG5leHBvcnQgY29uc3QgW2RlbGV0ZVRhZywgb25EZWxldGVUYWddID0gY3JlYXRlU2NvcGVkTWVzc2FnZSgnZGVsZXRlVGFnJyk7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldEF1ZGlvUHJvbnVuY2lhdGlvbiwgb25QbGF5QXVkaW9Qcm9udW5jaWF0aW9uT2Zmc2NyZWVuLCB9IGZyb20gJ0B2b2NhYmx5L2V4dGVuc2lvbi1tZXNzYWdlcyc7XG5jb25zdCBwbGF5RGF0YVVybCA9IChkYXRhVXJsKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICByZXR1cm4geWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKGRhdGFVcmwpO1xuICAgICAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhdWRpby5wbGF5KCkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZTogJ1VOQUJMRV9UT19QTEFZX0FVRElPX0RBVEFfVVJMJyxcbiAgICAgICAgICAgICAgICAgICAgcmVhc29uOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcGxheWluZyB0aGUgb2Zmc2NyZWVuIGF1ZGlvJyxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmE6IGUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3JDb2RlOiAnVU5BQkxFX1RPX1BMQVlfQVVESU9fREFUQV9VUkwnLFxuICAgICAgICAgICAgICAgIHJlYXNvbjogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIHBsYXlpbmcgdGhlIG9mZnNjcmVlbiBhdWRpbycsXG4gICAgICAgICAgICAgICAgZXh0cmE6IGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5vblBsYXlBdWRpb1Byb251bmNpYXRpb25PZmZzY3JlZW4oKHNlbmRSZXNwb25zZSwgcGF5bG9hZCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgZ2V0QXVkaW9Qcm9udW5jaWF0aW9uKHBheWxvYWQpO1xuICAgIGlmIChyZXN1bHQuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gc2VuZFJlc3BvbnNlKHlpZWxkIHBsYXlEYXRhVXJsKHJlc3VsdC52YWx1ZS51cmwpKTtcbn0pKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==