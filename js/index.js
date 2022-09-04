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
    const newsesDiv = document.getElementById('newsesDiv')
    newsesDiv.innerHTML = ``;
    for(const news of newses){
        console.log(news);
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
        <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-3 p-2">
                  <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-9 p-2">
                  <div class="card-body">
                    <h5 class="card-title py-3">${news.title}</h5>
                    <p class="card-text py-3">${news.details.slice(0, 200)+ '...'}</p>
                    <div class="d-flex justify-content-between py-2">
                      <div class="d-flex">
                        <img style="height: 50px; width: 50px;" class="rounded-circle" src="${news.author.img}" alt="">
                        <p>${news.author.name}</p>
                      </div>
                      <div>
                        Views: ${news.total_view}
                      </div>
                      <div>
                        <button class="btn btn-primary">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `;
        newsesDiv.appendChild(newsDiv);
    }
}
