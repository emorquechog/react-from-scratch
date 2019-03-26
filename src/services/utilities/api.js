function fetchData() {
    const request = {
        method: 'GET'
    };
    return fetch('https://jsonplaceholder.typicode.com/todos/1', request).then(
        response => response.json()
    );
}

function fetchData2() {
    const request = {
        method: 'GET'
    };
    return fetch('https://jsonplaceholder.typicode.com/todos/1', request).then(
        response => response.json()
    );
}

export default { fetchData, fetchData2 };
