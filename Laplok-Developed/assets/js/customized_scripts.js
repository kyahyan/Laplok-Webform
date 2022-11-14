const nextBtn = document.getElementsByClassName('nextBtn');
const prevBtn = document.getElementsByClassName('prevBtn');

nextBtn.onclick = () => {
    const nextTabLinkEl = $(".nav-tabs .active").closest("li").next("li").find("a")[0];
    const nextTab = new bootstrap.Tab(nextTabLinkEl);
    nextTab.show();
}

prevBtn.onclick = () => {
    const prevTabLinkEl = $(".nav-tabs .active").closest("li").prev("li").find("a")[0];
    const prevTab = new bootstrap.Tab(prevTabLinkEl);
    prevTab.show();
}
