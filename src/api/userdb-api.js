export const getUser = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
        `${process.env.DB_PATH}${id}`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};
export const putUser = (authInfo) => {
    // console.log(args)
    const [, idPart] = authInfo.username.queryKey;
    const { id } = idPart;
    return fetch(`${process.env.DB_PATH}${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            authInfo
        })
    }).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};
export const postUser = (authInfo) => {
    // console.log(args)
    return fetch(`${process.env.DB_PATH}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username:authInfo.username,
            password:authInfo.password
        })
    }).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};
export const registerUser = (authInfo) => {
    // console.log(args)
    return fetch(`${process.env.DB_PATH}?action=register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username:authInfo.username,
            password:authInfo.password
        })
    }).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};