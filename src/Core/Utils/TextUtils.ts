import { ControlInput } from '../../Definitions/ControlInput';

export const alpha = (text: string, opacity: number) =>
  `<alpha=${
    typeof opacity === 'number' ? `#${opacity.toString(16)}` : opacity
  }>${text}</alpha>`;
/**
 * Make the given text Bold
 */
export const bold = (text: string) => `<b>${text}</b>`;
/**
 * Color the given text
 * @param text Text to color
 * @param color Hex code or defined color
 * @returns
 */
export const color = (
  text: string,
  color:
    | `#${string}`
    | (
        | 'black'
        | 'blue'
        | 'green'
        | 'orange'
        | 'purple'
        | 'red'
        | 'white'
        | 'yellow'
      ),
) => `<color=${color}>${text}</color>`;
/**
 * cspace allows you to adjust character spacing, either absolute or relative to the original font Asset. You can use pixels or font units.
 */
export const cspace = (text: string, spacing: `${number}${'px' | 'em'}`) =>
  `<cspace=${spacing}>${text}</cspace>`;
/**
 * Make the given text Italic
 */
export const italic = (text: string) => `<i>${text}</i>`;
export const uppercase = (text: string) => `<uppercase>${text}</uppercase>`;
export const lowercase = (text: string) => `<lowercase>${text}</lowercase>`;
export const smallcaps = (text: string) => `<smallcaps>${text}</smallcaps>`;
export const mark = (text: string, color: string, opacity: number = 0xaa) =>
  `<mark=${color}${opacity.toString(16)}>${text}</mark>`;
export const mspace = (text: string, spacing: `${number}${'px' | 'em'}`) =>
  `<mspace=${spacing}>${text}</mspace>`;
export const size = (
  text: string,
  size:
    | `${number}%`
    | `${'+' | '-'}${number}`
    | `${number}${'px' | 'em'}`
    | number,
) => `<size=${size}>${text}</size>`;
/**
 * Use the <voffset> tag to offset the text baseline vertically. This adjusts the line height accordingly to accommodate the text's offset position. You can compensate for that adjustment by manually adjusting the line height.
 */
export const voffset = (
  text: string,
  spacing: `${'' | '-'}${number}${'px' | 'em'}`,
) => `<voffset=${spacing}>${text}</voffset>`;
export const icon = (
  icon: string,
  remove_background?: boolean,
  color?: string,
) =>
  `<icon name="${icon}"${remove_background ? ` type="nobg"` : ''}${
    color ? ` iconcolor="${color}"` : ''
  }>`;
/**
 * Make the given text Underlined
 */
export const underline = (text: string) => `<u>${text}</u>`;
/**
 * Make the given text Strikethrough
 */
export const strikethrough = (text: string) => `<s>${text}</s>`;
/**
 * Make the given text Subscript
 */
export const subscript = (text: string) => `<sub>${text}</sub>`;
/**
 * Make the given text Superscript
 */
export const superscript = (text: string) => `<sup>${text}</sup>`;
/**
 * Make a Linebreak
 */
export const linebreak = () => `<br>`;
/**
 * Align the given text. Does not work in chat.
 */
export const align = (
  alignment: 'left' | 'right' | 'center' = 'left',
  text: string,
) => `<align=${alignment}>${text}</align>`;
/**
 * Force the text on a single line without line breaks
 */
export const nobreak = (text: string) => `<nobr>${text}</nobr>`;
/**
 * Any text given will NOT be parsed.
 */
export const noparse = (text: string) => `<noparse>${text}</noparse>`;
/**
 * Create a Hover menu
 * @param linktext Text to hover the mouse on
 * @param title Title of the window
 * @param body Contents of the Window
 */
export const foldout = (linktext: string, title: string, body: string) =>
  `<foldout><linktext>${linktext}</linktext><title>${title}</title>${body}</foldout>`;

export const hotkey = (control: ControlInput) => `<hotkey name="${control}">`;

//? Shorthands
/**
 * Make the given text Bold
 * Shorthand of `bold`
 */
export const b = bold;
/**
 * Make the given text Italic
 * Shorthand of `italic`
 */
export const i = italic;
/**
 * Make the given text Underlined
 * Shorthand of `underline`
 */
export const u = underline;
/**
 * Make the given text Strikethrough
 * Shorthand of `strikethrough`
 */
export const s = strikethrough;
/**
 * Make the given text Subscript
 * Shorthand of `subscript`
 */
export const sub = subscript;
/**
 * Make the given text Superscript
 * Shorthand of `superscript`
 */
export const sup = superscript;
/**
 * Make a Linebreak
 * Shorthand of `linebreak`
 */
export const lb = linebreak;
/**
 * Force the text on a single line without line breaks
 * Shorthand of `nobreak`
 */
export const nobr = nobreak;
