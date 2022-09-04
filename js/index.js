const loadCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.data.news_category))
}
const displayCategories = (categories) =>{
    const categoriesDiv = document.getElementById('category')
    for(const category of categories){
        // console.log(category);
        const categoryDiv = document.createElement('div')
        categoryDiv.innerHTML = `
        <button onclick="loadNews('${category.category_id}')" class="btn btn-outline-light text-dark fw-semibold">
            ${category.category_name}
          </button>
        `;
        categoriesDiv.appendChild(categoryDiv);
    }
}
loadCategories();
function loadNews(categoryId){
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data.data))
}
const displayNews = (newses) =>{
    for(const news of newses){
        console.log(news.total_view)
    }
}
