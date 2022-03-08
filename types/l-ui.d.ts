import Vue, { PluginObject } from 'vue'
import { LUIComponent, LUIComponentSize, LUIHorizontalAlignment } from './component'

import { ComLmLoading } from './lm-loading'
import { ComLLoading } from './l-loading'
import { ComLButton } from './l-button'

export interface InstallationOptions {
  locale: any
  i18n: any
  size: string
}
/** The version of element-ui */
export const version: string
/**
 * Install all element-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(LUI)` to install.
 */
export function install(vue: typeof Vue, options: InstallationOptions): void

/** LUI component common definition */
export type Component = LUIComponent

/** Component size definition for button, input, etc */
export type ComponentSize = LUIComponentSize

/** Horizontal alignment */
export type HorizontalAlignment = LUIHorizontalAlignment



/** LmLoading Component */
export class LmLoading extends ComLmLoading {}

/** LLoading Component */
export class LLoading extends ComLLoading {}

/** LButton Component */
export class LButton extends ComLButton {}
