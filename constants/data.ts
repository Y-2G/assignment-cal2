// 整数として取り扱う最大桁数
export const MAX_DIGITS: number = 9;

// ボタンのテキスト文字列
export const TEXT_0: string = '0';
export const TEXT_1: string = '1';
export const TEXT_2: string = '2';
export const TEXT_3: string = '3';
export const TEXT_4: string = '4';
export const TEXT_5: string = '5';
export const TEXT_6: string = '6';
export const TEXT_7: string = '7';
export const TEXT_8: string = '8';
export const TEXT_9: string = '9';

export const TEXT_DOT: string = '.';

export const TEXT_CLEAR:    string = 'C';
export const TEXT_DIVIDE:   string = '÷';
export const TEXT_MULTIPLY: string = '×';
export const TEXT_MINUS:    string = '-';
export const TEXT_PLUS:     string = '+';
export const TEXT_EQUAL:    string = '=';

// 各種ボタンの設定
export const BTN_SETTINGS = [
    [
        {text: TEXT_CLEAR, type: 'command'},
        {text: TEXT_DIVIDE, type: 'operator'},
    ],
    [
        {text: TEXT_7, type: 'normal'},
        {text: TEXT_8, type: 'normal'},
        {text: TEXT_9, type: 'normal'},
        {text: TEXT_MULTIPLY, type: 'operator'},
    ],
    [
        {text: TEXT_4, type: 'normal'},
        {text: TEXT_5, type: 'normal'},
        {text: TEXT_6, type: 'normal'},
        {text: TEXT_MINUS, type: 'operator'},
    ],
    [
        {text: TEXT_1, type: 'normal'},
        {text: TEXT_2, type: 'normal'},
        {text: TEXT_3, type: 'normal'},
        {text: TEXT_PLUS, type: 'operator'},
    ],
    [
        {text: TEXT_0, type: 'wide'},
        {text: TEXT_DOT, type: 'normal'},
        {text: TEXT_EQUAL, type: 'operator'},
    ],
];



