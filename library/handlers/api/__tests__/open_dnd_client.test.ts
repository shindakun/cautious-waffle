import { getOpenDnDClient } from '../open_dnd_client'

describe('Open Dnd Client', () => {
  it('should make calls', () => {
    const client = getOpenDnDClient()
    expect(client.getInfo).not.toBeUndefined()
  })
})
