const BASE_URL = process.env.REACT_APP_SERVER_URL;

export async function getFetch(resource) {
    try {
        const resp = await fetch(`${BASE_URL}/${resource}`);
        const dataInJs = await resp.json();
        return dataInJs;
    } catch (error) {
        console.log('getFetch error:', error);
        return false;
    }
}

export const getFetchWithToken = async (resource) => {
    try {
        const token = localStorage.getItem('token');
        const resp = await fetch(`${BASE_URL}/${resource}`, {
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
            localStorage.setItem('token', dataInJS.token);
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
            localStorage.setItem('token', dataInJS.token);
        }
        return dataInJS;
    } catch (error) {
        console.log('sendFetch error', error);
        return false;
    }
}
