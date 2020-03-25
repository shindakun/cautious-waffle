import tokenizeText from '../tokenize_text'

describe('tokenizeText', () => {
  it('should return NOOP for empty text', () => {
    const [cmd] = tokenizeText('')
    expect(cmd).toBe('NOOP')
  })

  it('should return NOOP for unknowns', () => {
    const [cmd] = tokenizeText('break boys')
    expect(cmd).toBe('NOOP')
  })

  it('should return HELP for help entry text', () => {
    const [cmd, args] = tokenizeText('help api')
    expect(cmd).toBe('HELP')
    expect(args).toEqual(['api'])
  })

  it('should return API for api spell text', () => {
    const [cmd, args] = tokenizeText('api spell fireball')
    expect(cmd).toBe('API')
    expect(args).toEqual(['spell', 'fireball'])
  })
})
