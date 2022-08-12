// https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ab99e33ef125483bbfe7fd4b304a5fee

let newsContainer=document.getElementById('newsContainer');
let html=``;

function fetchNews(){
    const xhr=new XMLHttpRequest();
    xhr.open('GET',"https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=ab99e33ef125483bbfe7fd4b304a5fee",true);
    xhr.onload =function(){
        if(xhr.status==200){
            populate(JSON.parse(xhr.response));
        }
        else{
            console.log("error");   
        }
    }
    xhr.send();
}
function populate(response){
        
        let articles=response.articles;
        for (let i=0;i<articles.length;i++){
            let news=articles[i];
            let time= String(news.publishedAt);
            time=time.split('T')
            date=time[0];
            hours=time[1].split(".");
            hours=hours[0];
            console.log(time);
            html+=`<div class="xl:w-1/4 md:w-1/2 p-4" >
            <div class="bg-gray-100 hover:scale-105 duration-150 p-6 rounded-lg">
            <a href="${news.url}">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="${news.urlToImage}" alt="content">
            </a>
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">TITLE</h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">${news.title}</h2>
            <p class="leading-relaxed text-base" id="description">${news.description}</p>
            <p class="text-lg text-gray-900 font-medium title-font">${date} : ${hours}</p>
            </div>
            </div></div>`
        }
        newsContainer.innerHTML=html;
}


// main:
fetchNews();