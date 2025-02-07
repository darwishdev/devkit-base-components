

import type { VNode } from 'vue'
import type { MenuItem } from 'primevue/menuitem'
import type { IconFindRequest, IconFindResponse } from './api_types'

export type EndpointFunction<
	TReq extends Record<string, unknown> = {},
	TResp extends Record<string, unknown> = {}
> = ((req: TReq) => Promise<TResp>)

export type ApiEndpoint<
	TApi extends Record<string, Function>,
	TReq extends Record<string, unknown> = {},
	TResp extends Record<string, unknown> = {}
> = keyof TApi | EndpointFunction<TReq, TResp> | Promise<TResp>

export type DevkitBaseConfig<TApi extends Record<string, Function>> = {
	apiClient: TApi
	locales: string[]
	iconFindApi?: ApiEndpoint<TApi, IconFindRequest, IconFindResponse>
}

export type RouterLink = string
export type ExternalLink = `http${string}`
export type LinkType = RouterLink | ExternalLink;
export type AppIconSlots = {
	top(): VNode;
	bottom(): VNode;
}
export type AppIconProps = {
	icon: string
	size?: 'small' | 'medium' | 'large'
	iconType?: 'primevue' | 'svg'
	useReset?: boolean
	color?: string
}
export type AppBtnProps = {
	action: string | Function,
	label?: string,
	label_ar?: string,
	variant?: "outlined" | "text" | "link"
}

export type AppBtnSlots = {
	default(): VNode;
	icon(): VNode;
	label(): VNode;
	end(): VNode;
}

export type AppImageEmits = {
	(e: 'load', event: Event): void
	(e: 'error', error: Event): void
	(e: 'placeholder-loaded', event: Event): void
	(e: 'fallback-error', error: Event): void
}
export type AppHeaderProps = {
	items: MenuItem & { labelAr?: string }[]
	hideLocalSwitch?: boolean
	logo?: string | {
		src: string, type?: 'image' | 'icon',
		size?: 'small' | 'medium' | 'large'
	}
}
