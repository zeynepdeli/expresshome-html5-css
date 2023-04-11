const searchForm = document.querySelector(".search-form")


const searchBtn = document.querySelector("#search-btn")

searchBtn.addEventListener("click", function () {
    searchForm.classList.toggle("active");
    document.addEventListener("click",function(e){
        if (!e.composerdPath().includes(searchBtn)){
            searchForm.classList.remove("active");
            
        }

    })
});
