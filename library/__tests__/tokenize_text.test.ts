import tokenizeText from '../tokenize_text'

describe('tokenizeText', () => {
  it('should return NOOP for empty text', () => {
    let [cmd] = tokenizeText('')
    expect(cmd).toBe('NOOP')
  })

  it('should return NOOP for unknowns', () => {
    let [cmd] = tokenizeText('break boys')
    expect(cmd).toBe('NOOP')
  })

  it('should return HELP for help entry text', () => {
    let [cmd, args] = tokenizeText('help api')
    expect(cmd).toBe('HELP')
    expect(args).toBe('api')
  })

  it('should return API for api spell text', () => {
    let [cmd, args] = tokenizeText('api spell fireball')
    expect(cmd).toBe('API')
    expect(args).toBe('spell fireball')
  })
})
