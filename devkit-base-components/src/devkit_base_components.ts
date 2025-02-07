import DevkitBaseDB from '@/pkg/database/DB'
import * as api_types from '@/pkg/types/api_types'
import { type App, type Plugin } from 'vue'
import type { ApiEndpoint, AppHeaderProps, AppBtnProps, DevkitBaseConfig } from '@/pkg/types/types'
import { AppBtn, AppIcon, AppImage, AppHeader, AppSection } from "@/app/base/index";
import { useI18n } from 'vue-i18n';
import { toggleLocale } from '@/pkg/utils/LocaleUtils';
import { IconFindRequest, IconFindResponse } from '@/pkg/types/api_types';
export { AppBtn, AppImage, AppIcon, AppHeader, AppSection }
export type { DevkitBaseConfig, AppHeaderProps, AppBtnProps }
export { api_types }
const db = new DevkitBaseDB()
export const cacheHelper = db.cache
export const iconHelper = db.iconHelper
// Function to sync i18n locale inside setup()
export function setupI18nSync() {
	const i18n = useI18n() // Must be inside setup()
	console.log("i19j", i18n.locale)
	cacheHelper.getLocale().then((locale: string) => {
		if (locale === 'ar') {
			toggleLocale({ i18n, cacheHelper })
		}
	})
}
const DevkitBaseComponentsPlugin: Plugin<DevkitBaseConfig<any>> = {
	install<TApi extends Record<string, Function>>(app: App, { apiClient, iconFindApi }: DevkitBaseConfig<TApi>) {
		app.provide('apiClient', apiClient)
		if (iconFindApi) {
			app.provide<ApiEndpoint<TApi, IconFindRequest, IconFindResponse>>('iconFindApi', iconFindApi)
		}
		app.component("AppImage", AppImage)
		app.component("AppIcon", AppIcon)
		app.component("AppBtn", AppBtn)
	}
}

export default DevkitBaseComponentsPlugin

