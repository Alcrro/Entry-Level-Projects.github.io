const about = document.querySelector('.about');
const btns  = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
	// console.log(e.target.dataset.id)
	const id = e.target.dataset.id;
	if(id){
		// remove active from  other buttons
		btns.forEach(function(btn){
			btn.classList.remove('active');
			//access the button when i click on : "e.target"
			e.target.classList.add('active')
		});
		// hide other articles
		articles.forEach(function(article){
			article.classList.remove('active');
		})
		const element = document.getElementById(id);
		element.classList.add('active');
	} 
})