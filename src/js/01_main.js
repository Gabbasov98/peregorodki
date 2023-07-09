function gallery() {
    var swiper = new Swiper(".gallery .mySwiper", {
        spaceBetween: 0,
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".gallery .mySwiper2", {
        spaceBetween: 0,
        slidesPerView: "auto",
        thumbs: {
            swiper: swiper,
        },
        navigation: {
            nextEl: '.gallery .swiper-button-next',
            prevEl: '.gallery .swiper-button-prev',
        },
    });
}

let tabBlocks = document.querySelectorAll("._tabs-parent")

tabBlocks.forEach(tabBlock => {
    let tabs = tabBlock.querySelectorAll("._tab")
    let tabContents = tabBlock.querySelectorAll("._tab-content")

    tabs.forEach(tab => {
        tab.onclick = function(){
            let tabId = this.dataset.tab

            tabs.forEach(tab => {
                tab.classList.remove("_active")
            })
            tab.classList.add("_active")

            tabContents.forEach(tabContent => {
                tabContent.classList.remove("_active")
            })
            tabBlock.querySelector(`._tab-content.${tabId}`).classList.add("_active")
        }

    })
})

gallery()


// $("._tab").click(function() {
//     let tabId = $(this).attr("data-tab")
//     if(tabId == 'disabled'){
//         return
//     }
//     let parentBlock = $(this).parents("._tabs-parent")
//
//     console.log(parentBlock)
//     $(parentBlock).find("._tab").removeClass("_active")
//     $(this).addClass("_active")
//     $(parentBlock).find(".tab-content").slideUp(300)
//     $(parentBlock).find(`.${tabId}`).slideDown(300)
//
// })
