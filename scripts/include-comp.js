fetch('components/header.html')
.then(res => res.text())
.then(data => {
    document.getElementsByTagName('header')[0].innerHTML = data;
});


fetch('components/footer.html')
.then(res => res.text())
.then(data => {
    document.getElementsByTagName('footer')[0].innerHTML = data;
})