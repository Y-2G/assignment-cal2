import styles from '../index.module.scss';

// 整数として取り扱う最大桁数
export const MAX_DIGITS: number = 9;

// ボタンのテキスト文字列
export const BTN_TEXT_0: string = '0';
export const BTN_TEXT_1: string = '1';
export const BTN_TEXT_2: string = '2';
export const BTN_TEXT_3: string = '3';
export const BTN_TEXT_4: string = '4';
export const BTN_TEXT_5: string = '5';
export const BTN_TEXT_6: string = '6';
export const BTN_TEXT_7: string = '7';
export const BTN_TEXT_8: string = '8';
export const BTN_TEXT_9: string = '9';

export const BTN_TEXT_DOT: string = '.';

export const BTN_TEXT_CLEAR:    string = 'C';
export const BTN_TEXT_DIVIDE:   string = '÷';
export const BTN_TEXT_MULTIPLY: string = '×';
export const BTN_TEXT_MINUS:    string = '-';
export const BTN_TEXT_PLUS:     string = '+';
export const BTN_TEXT_EQUAL:    string = '=';

// 各種ボタンの設定
export const BTN_SETTINGS = [
    [
        {text: BTN_TEXT_CLEAR, type: styles.command},
        {text: BTN_TEXT_DIVIDE, type: styles.operator},
    ],
    [
        {text: BTN_TEXT_7, type: styles.normal},
        {text: BTN_TEXT_8, type: styles.normal},
        {text: BTN_TEXT_9, type: styles.normal},
        {text: BTN_TEXT_MINUS, type: styles.operator},
    ],
    [
        {text: BTN_TEXT_4, type: styles.normal},
        {text: BTN_TEXT_5, type: styles.normal},
        {text: BTN_TEXT_6, type: styles.normal},
        {text: BTN_TEXT_MINUS, type: styles.operator},
    ],
    [
        {text: BTN_TEXT_1, type: styles.normal},
        {text: BTN_TEXT_2, type: styles.normal},
        {text: BTN_TEXT_3, type: styles.normal},
        {text: BTN_TEXT_PLUS, type: styles.operator},
    ],
    [
        {text: BTN_TEXT_0, type: styles.wide},
        {text: BTN_TEXT_DOT, type: styles.normal},
        {text: BTN_TEXT_EQUAL, type: styles.operator},
    ],
];



