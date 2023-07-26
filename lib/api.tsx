export const Api = {
    url: "http://localhost:3001",

    getAll: (tableName: string) =>
        fetch(Api.url + `/${tableName}`, getRequest()).then(res => res.json()),

    getById: (tableName: string, id: string) =>
        fetch(Api.url + `/${tableName}/${id}`).then(res => res.json()),

    insert: (tableName: string, body: Object) =>
        fetch(Api.url + `/${tableName}`, postRequest(body)).then(res => res.json()),

    login: (body: Object) => fetch(Api.url + "/login", postRequest(body)).then(res => res.json()),

    update: (tableName: string, id: string, body: Object) => fetch(Api.url + `/${tableName}/${id}`, patchRequest(body)).then(res => res.json()),

    delete: (tableName: string, id: string) => fetch(Api.url + `/${tableName}/${id}`, deleteRequest()).then(res => res.json()),
};

// REQUEST BUILDS

const getRequest = () => ({
    method: "GET",
    headers: new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
    })
})

const postRequest = (body: Object) => ({
    method: "POST",
    headers: new Headers({
        "Content-type": "application/json"
    }),
    body: JSON.stringify(body),
});

const patchRequest = (body: Object) => ({
    method: "PATCH",
    headers: new Headers({
        "Content-type": "application/json"
    }),
    body: JSON.stringify(body),
});

const deleteRequest = () => ({
    method: "DELETE"
});