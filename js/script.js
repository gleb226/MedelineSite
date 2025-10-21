const STORAGE_KEY = 'medelin_visits';
let visits = parseInt(localStorage.getItem(STORAGE_KEY) || '0');
visits++;
localStorage.setItem(STORAGE_KEY, visits);
document.getElementById('visitCount').textContent = visits;
