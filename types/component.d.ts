import Vue from 'vue'

/** LUI component common definition */
export declare class LUIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type LUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type LUIHorizontalAlignment = 'left' | 'center' | 'right'
