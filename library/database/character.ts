import db from './dynamodb'

const ACTIVE_CHARACTERS_TABLE_NAME = process.env.ACTIVE_CHARACTERS_TABLE_NAME;

const buildParams = (dbKey, character) => {
    return {
        TableName: ACTIVE_CHARACTERS_TABLE_NAME,
        Item: {
            'user': dbKey,
            'character': character
        }
    }
};

const setActive = (dbKey, character) => db('put', buildParams(dbKey, character)
).then(request => request.send());

const resetActive = (dbKey) => db('put', buildParams(dbKey, '')
).then(request => request.send());

const getActive = async (dbKey) => {
    const request = await db('get', {
        TableName: ACTIVE_CHARACTERS_TABLE_NAME,
        Key: {'user': dbKey}
    });
    return await request.promise();
};



export {setActive, resetActive, getActive}