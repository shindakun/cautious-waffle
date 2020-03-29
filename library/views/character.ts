export const helpView = (text: string) => {
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
