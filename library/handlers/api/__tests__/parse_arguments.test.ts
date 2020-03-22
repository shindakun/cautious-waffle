import parse_arguments from '../parse_arguments'

describe('parse arguments', () => {
  it('should handle empty', () => {
    let result = parse_arguments()
    expect(result).toHaveLength(0)
  })
})
