const loadCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategories(data.data.news_category))
}
const displayCategories = (categories) =>{
    const categoriesDiv = document.getElementById('category')
    for(const category of categories){
        console.log(category);
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
    console.log(categoryId);
}
