import crypto from 'crypto'

const FIVE_MINUTES = 60 * 5

export default ({ body, headers }) => {
  if (process.env.DEV) {
    return
  }

  // Allow five minute drift between sending and receiving, otherwise probably replay attack
  const timestamp = headers['X-Slack-Request-Timestamp']
  const now = Date.now() / 1000
  const elapsed = Math.abs(now - timestamp)
  if (elapsed > FIVE_MINUTES) {
    return `elapsed ${elapsed} (from ${timestamp}) is off more than five minutes ${FIVE_MINUTES}`
  }

  // Compute a hmac sha256 from timestamp and body and compare to senders value
  const signature_basestring = `v0:${timestamp}:${body}`
  const digest = crypto
    .createHmac('sha256', process.env.SLACK_SIGNATURE)
    .update(signature_basestring)
    .digest('hex')

  const derived_signature = `v0=${digest}`
  const slack_signature = headers['X-Slack-Signature']

  return derived_signature === slack_signature
    ? undefined
    : `${derived_signature}=${slack_signature}`
}
