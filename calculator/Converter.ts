import { MAX_DIGITS } from '../setting/data';

// TODO: Strategy パターンを使ってみるといいかも

// 文字列を変換するクラス
class Converter {

  // 先頭のゼロを除去する
  static zeroSuppress(s: string): string {
    return s.indexOf('0.') < 0 ? s.replace(/^0/, '') : s;
  }

  // 表示用にフォーマットする
  static formatForDisplay(s: string): string {
    // 設定した桁数を超えていたら指数表記にして返す
    if(s.length > MAX_DIGITS) return Number(s).toExponential();

    // 整数部を桁区切りする
    const int = Number(s.split('.')[0]).toLocaleString( 'ja-JP', { maximumFractionDigits: 20 });
    
    // 小数部を取得する
    const dec = s.split('.')[1];

    // 小数部が存在しない場合は桁区切りした整数を返す
    if(dec === undefined) return int;

    // 整数部と小数部を連結して返す
    return `${int}.${dec}`;
  }

}

export default Converter;