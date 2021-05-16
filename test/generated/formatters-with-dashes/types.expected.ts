// This types were auto-generated. Any manual changes will be overwritten.
/* eslint-disable */

export type BaseLocale = 'en'

export type Locales =
	| 'en'

export type TranslationKeys =
	| 'FORMATTER'

export type Translation = {
	/**
	 * {0|custom-formatter|and-another}
	 * @param {unknown} 0
	 */
	'FORMATTER': RequiredParams1<'0|custom-formatter|and-another'>
}

export type TranslationFunctions = {
	/**
	 * {0|custom-formatter|and-another}
	 */
	'FORMATTER': (arg0: unknown) => string
}

export type Formatters = {
	'and-another': (value: unknown) => unknown
	'custom-formatter': (value: unknown) => unknown
}


type Param<P extends string> = `{${P}}`

type Params1<P1 extends string> =
	`${string}${Param<P1>}${string}`

type RequiredParams1<P1 extends string> =
	| Params1<P1>
