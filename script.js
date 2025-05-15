document.addEventListener('DOMContentLoaded', () => {
  const searchIcon = document.querySelector('.search-icon');
  const searchBox = document.getElementById('search-box');
  const categoryItems = document.querySelectorAll('.category-item');
  const coursesSection = document.getElementById('courses-section');
  

  searchBox.style.display = 'none';

 
  searchIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
  });


  document.addEventListener('click', (event) => {
    if (!searchIcon.contains(event.target) && !searchBox.contains(event.target)) {
      searchBox.style.display = 'none';
    }
  });

 
  searchBox.addEventListener('input', () => {
    const query = searchBox.value.toLowerCase();
    categoryItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? '' : 'none';
    });
  });

 
  const coursesLink = document.querySelector('a[href="#courses-section"]');
  
  coursesLink.addEventListener('click', (event) => {
    event.preventDefault();  
    coursesSection.scrollIntoView({ behavior: 'smooth' }); 
  });
});