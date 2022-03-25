/* eslint-disable no-prototype-builtins */

import { Platform, NativeModules } from 'react-native';

import I18n from 'i18n-js';

import pt from './locales/pt-br.json';

export const normalizeTranslate = {
  pt_BR: 'pt_BR',
  pt_US: 'pt_BR',
};

const getLanguageByDevice = (): string => {
  const language =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier;

  return language || normalizeTranslate.pt_BR;
};

I18n.translations = {
  pt_BR: pt,
};

const setLanguageToI18n = (): void => {
  const language = getLanguageByDevice();
  const translateNormalize = normalizeTranslate[language];
  const iHaveThisLanguage =
    I18n.translations.hasOwnProperty(translateNormalize);
  iHaveThisLanguage
    ? (I18n.locale = translateNormalize)
    : (I18n.locale = normalizeTranslate.pt_BR);
};

setLanguageToI18n();

export const translate = (key: string): string => I18n.t(key);
export const language = getLanguageByDevice();
