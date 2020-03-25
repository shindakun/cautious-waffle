import axios from 'axios'

const dndApi = (section: string) => `http://www.dnd5eapi.co/api/${section}`;
const dndApiSearch = (section: string) => (search: string) =>
    `${dndApi(section)}?name=${search}`;
const dndApiItem = (section: string) => (item: string) =>
    `${dndApi(section)}/${item}`;

const getInfo = (section, params?: string) => {
    const endpoint = !params
        ? dndApi(section)
        : params.indexOf('?') != -1
            ? dndApiSearch(section)(params.replace('?', ''))
            : dndApiItem(section)(params);

    return axios.get(endpoint)
}

export const getOpenDnDClient = () => {
    return {
        getInfo
    }
};
