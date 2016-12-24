import * as React from "react";

declare module "react-css-themr"
{
	export interface IThemrOptions
	{
		/** @default "deeply" */
		composeTheme?: "deeply" | "softly" | false,
		/** @default false */
		withRef?: boolean
	}

	export interface ThemeProviderProps
	{
		theme: {}
	}

	export class ThemeProvider extends React.Component<ThemeProviderProps, any>
	{

	}

	class ThemedComponent<Original> extends React.Component<any, any>
	{
		getWrappedInstance(): Original;
	}

	export function themr(
		identifier: string,
		defaultTheme?: {},
		options?: IThemrOptions
	): <Original>(component: Original) => ThemedComponent<Original>;
}
