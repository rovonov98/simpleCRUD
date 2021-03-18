export const state = () => ({
    dataList: [],
    api: 'http://localhost:9000/api'
})

export const mutations = {
    getData(state, data) {
        state.dataList = data
    },
    postData(state, data) {
        state.dataList.push(data)
    },
    deleteData(state, _id) {
        state.dataList = state.dataList.filter((data) => {
            return data._id !== _id
        })
    }
}

export const actions = {
    getData(state) {
        fetch(`${this.state.api}`)
        .then(res => res.json())
        .then(data => state.commit('getData', data))
        .catch(error => console.log(error))
    },
    postData(state, item) {
        fetch(`${this.state.api}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: item.name,
                age: item.age
            })
        })
        .then(res => res.json())
        .then(data => {
            state.commit('postData', {
                name: item.name,
                age: item.age,
                _id: data
            })
        })
        .catch(error => console.log(error))
    },
    deleteData(state, _id) {
        fetch(`${this.state.api}/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.text())
        .then(() => state.commit('deleteData', _id))
        .catch(error => console.log(error))
    },
    putData(state, data) {
        fetch(`${this.state.api}/${data._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                age: data.age
            })
        })
        .then(res => res.text())
        .then(() => {
            state.commit('putData', '')
        })
    }
}