// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'de'
	| 'en'
	| 'it'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * app started
	 */
	STARTUP: string
	/**
	 * choose locale...
	 */
	CHOOSE_LOCALE: string
	/**
	 * Hello {name}!
	 * @param {string} name
	 */
	HI: RequiredParams<'name'>
	/**
	 * Your name:
	 */
	YOUR_NAME: string
	/**
	 * Selected locale:
	 */
	SELECTED_LOCALE: string
	/**
	 * Today is {date|weekday}
	 * @param {Date} date
	 */
	TODAY: RequiredParams<'date|weekday'>
	/**
	 * Apples
	 */
	APPLES_LABEL: string
	/**
	 * Bananas
	 */
	BANANAS_LABEL: string
	/**
	 * I want to buy {nrOfApples|fallback0} apple{{s}} and {nrOfBananas|fallback0} banana{{s}}.
	 * @param {number} nrOfApples
	 * @param {number} nrOfBananas
	 */
	FRUITS: RequiredParams<'nrOfApples|fallback0' | 'nrOfBananas|fallback0'>
}

export type TranslationFunctions = {
	/**
	 * app started
	 */
	STARTUP: () => LocalizedString
	/**
	 * choose locale...
	 */
	CHOOSE_LOCALE: () => LocalizedString
	/**
	 * Hello {name}!
	 */
	HI: (arg: { name: string }) => LocalizedString
	/**
	 * Your name:
	 */
	YOUR_NAME: () => LocalizedString
	/**
	 * Selected locale:
	 */
	SELECTED_LOCALE: () => LocalizedString
	/**
	 * Today is {date|weekday}
	 */
	TODAY: (arg: { date: Date }) => LocalizedString
	/**
	 * Apples
	 */
	APPLES_LABEL: () => LocalizedString
	/**
	 * Bananas
	 */
	BANANAS_LABEL: () => LocalizedString
	/**
	 * I want to buy {nrOfApples|fallback0} apple{{s}} and {nrOfBananas|fallback0} banana{{s}}.
	 */
	FRUITS: (arg: { nrOfApples: number, nrOfBananas: number }) => LocalizedString
}

export type Formatters = {
	fallback0: (value: number) => unknown
	weekday: (value: Date) => unknown
}
