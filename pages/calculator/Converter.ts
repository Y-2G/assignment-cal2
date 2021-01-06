class Converter {
  static convert(s: string): string {
    return s.replace(/(\d)(?=(\d\d\d)+$)/g, '$1,');;
  }
}

export default Converter;