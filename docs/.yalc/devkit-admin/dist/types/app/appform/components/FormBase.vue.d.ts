import { StringUnkownRecord } from 'devkit-apiclient';
import { AppFormProps } from '../../../pkg/types/types';
declare const _default: <TApi extends Record<string, Function>, TFormRequest extends StringUnkownRecord = StringUnkownRecord, TApiRequest extends StringUnkownRecord = StringUnkownRecord, TApiResponse extends StringUnkownRecord = StringUnkownRecord, TFindRequestPropName extends string = "recordId", TFindResponsePropName extends string = "request", TFindCallbakResponse = unknown, TCallbakResponse = unknown>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{} & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>, never> & AppFormProps<TApi, TFormRequest, TApiRequest, TApiResponse, TFindRequestPropName, TFindResponsePropName, TFindCallbakResponse, TCallbakResponse> & Partial<{}>> & import('vue').PublicProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {};
    emit: {};
}>) => import('vue').VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
