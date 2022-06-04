const BASE_URL = process.env.REACT_APP_SERVER_URL;

export async function getFetch(resource) {
    try {
        const resp = await fetch(`${BASE_URL}/v1/${resource}`);
        const dataInJs = await resp.json();
        return dataInJs;
    } catch (error) {
        console.log('getFetch error:', error);
        return false;
    }
}

export async function getFetchWithToken(resource) {
    try {
        const token = localStorage.getItem('token');
        const resp = await fetch(`${BASE_URL}/${resource}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer: ${token}`
            },
        });
        const dataFromApi = await resp.json();
        return dataFromApi;
    } catch (error) {
        return false;
    }
};

export async function deleteFetch(resource, id) {
    try {
        const token = localStorage.getItem('token');
        const resp = await fetch(`${BASE_URL}/${resource}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer: ${token}`,
            },
        });
        const dataInJS = await resp.json();
        return dataInJS;
    } catch (error) {
        return false;
    }
}

export async function sendFetch(resource, dataToPost) {
    try {
        const resp = await fetch(`${BASE_URL}/${resource}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToPost),
        });
        const dataInJS = await resp.json();
        if (dataInJS.msg === 'Successfully logged in') {
            localStorage.setItem('token', dataInJS.data);
        }
        return dataInJS;
    } catch (error) {
        console.log('sendFetch error', error);
        return false;
    }
}
export async function sendFetchWithToken(resource, dataToPost) {
    try {
        const token = localStorage.getItem('token');
        const resp = await fetch(`${BASE_URL}/${resource}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },

            body: JSON.stringify(dataToPost),
        });
        const dataInJS = await resp.json();
        if (dataInJS.msg === 'Successfully logged in') {
            localStorage.setItem('token', dataInJS.data);
        }
        return dataInJS;
    } catch (error) {
        console.log('sendFetch error', error);
        return false;
    }
}

export async function sendAuthFetch(resource, dataForAuth) {
    try {
        const resp = await fetch(`${BASE_URL}/auth/${resource}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataForAuth),
        });
        const dataInJS = await resp.json();
        return dataInJS;
    } catch (error) {
        return false;
    }
}

export async function sendAddFetch(resource, dataToAdd) {
    try {
        const token = localStorage.getItem('token');
        const resp = await fetch(`${BASE_URL}/${resource}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },

            body: JSON.stringify(dataToAdd),
        });
        const dataInJS = await resp.json();
        return dataInJS;
    } catch (error) {
        return false;
    }
}