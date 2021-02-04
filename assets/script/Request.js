class Request {
    // funcion para obtener las categorias de la API
    static getCategories() {
        return fetch ('https://opentdb.com/api_category.php')
    }

    //funcion para obtener las preguntas
    static getQuestions() {
        const [amount, category, difficulty, type] = this.getFilters();
        return fetch (`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
    }

    //funcion para obtener los valores de los filtros en el HTML
    static getFilters() {
        const totalQuestions = document.getElementById('questions').value;
        const category = document.getElementById('category').value;
        const difficulty = document.getElementById('dificulty').value;
        const type = document.getElementById('type').value;
        return [totalQuestions, category, difficulty, type]
    }
}

export default Request;