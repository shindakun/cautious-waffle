import parse_arguments from '../parse_arguments'

describe('parse arguments', () => {
  it('should handle empty', () => {
    const result = parse_arguments()
    expect(result).toHaveLength(0)
  })
})
