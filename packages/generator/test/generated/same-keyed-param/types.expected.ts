// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * {name} {name} {name}
	 * @param {unknown} name
	 */
	SAME_KEYED_PARAM: RequiredParams<'name' | 'name' | 'name'>
}

export type TranslationFunctions = {
	/**
	 * {name} {name} {name}
	 */
	SAME_KEYED_PARAM: (arg: { name: unknown }) => LocalizedString
}

export type Formatters = {}
