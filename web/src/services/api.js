const api = {

    async get(url) {

        console.log("API GET:", url);

        return Promise.resolve(null);

    },

    async post(url,data){

        console.log("API POST:", url,data);

        return Promise.resolve(null);

    }

};

export default api;