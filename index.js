// console.log("Welcome to News Website");

// let source = 'the-times-of-india';
let country = 'in';
let apiKey = 'b23a80efd7304a348f6cce8ab13a43b8'

// let newsAccordion = document.getElementById('newsAccordion');
// const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);

// xhr.onload = function () {
//     if (this.status === 200) {
//         let json = JSON.parse(this.responseText);
//         // console.log(json);
//         let articles = json.articles;
//         let newsHtml = "";

//         articles.forEach(function (element) {
//             // console.log(element[news]);
//             let news = `<div class="accordion" id="newsAccordion">
//                             <div class="accordion-item">
//                                 <h2 class="accordion-header" id="heading">
//                                     <div class="accordion-button" type=" " data-bs-toggle="collapse"
//                                         data-bs-target="#collapseOne" aria-expanded=" " aria-controls="collapse">
//                                         ${element["title"]}
//                                     </div>
//                                 </h2>
//                                 <div id="collapse" class="accordion-collapse collapse show" aria-labelledby="heading"
//                                     data-bs-parent="#accordionExample">
//                                     <div class="accordion-body"> ${element["description"]}. <a href="${element["url"]}" target="_blank">Read more hear</a> </div>
//                                 </div>
//                             </div>
//                         </div>`;

//             newsHtml += news;
//         });

//         newsAccordion.innerHTML = newsHtml;
//     }
//     else {
//         console.log("Some Error occurs");
//     }
// }

// xhr.send();

function getData() {
    // console.log("Started getData")
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        let newsData = data.articles;
        // console.log(newsData);
        let newsHtml = "";
        newsData.forEach((values)=>{
            let news = `<div class="accordion" id="newsAccordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading">
                                    <div class="accordion-button" type=" " data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded=" " aria-controls="collapse">
                                        ${values.title}
                                    </div>
                                </h2>
                                <div id="collapse" class="accordion-collapse collapse show" aria-labelledby="heading"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body"> ${values.description}. <a href="${values.url}" target="_blank">Read more hear</a> </div>
                                </div>
                            </div>
                        </div>`;

            newsHtml += news;
        })
        document.getElementById("newsAccordion").innerHTML = newsHtml;
    })
    .catch((err)=>{
        console.log(err);
    }) 
}

getData();
