export default (text: string) => {
    return {
        blocks: [
            {
                type: 'section',
                text: {
                    type: 'mrkdwn',
                    text: text
                },
            }
        ]}
};