const btnDarkMode = document.querySelector(".dark__mode-btn");

//1. Проверка темной темы  на уровне системных настроек
if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ){
    btnDarkMode.classList.add("dark__mode-btn--active");
    document.body.classList.add("dark");
}


//2. Проверка темной темы  в LocalSrorage
 if(localStorage.getItem('darkMode') ==='dark'){
     btnDarkMode.classList.add("dark__mode-btn--active");
     document.body.classList.add("dark");
 }else if(localStorage.getItem('darkMode') ==='light'){
    btnDarkMode.classList.remove("dark__mode-btn--active");
    document.body.classList.remove("dark");
 }


//Проверка темной темы  на уровне системных настроек
if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ){
    btnDarkMode.classList.add("dark__mode-btn--active");
    document.body.classList.add("dark");
}

//Еси меняются системные настройки, меняем тему
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event)=> {
    const newColorScheme  = event.matches ? "dark" : 'Light';


    if(newColorScheme === 'dark') {
        btnDarkMode.classList.add("dark__mode-btn--active");
        document.body.classList.add("dark");  
        localStorage.setItem('darkMode', 'dark')
    }else{
        btnDarkMode.classList.remove("dark__mode-btn--active");
        document.body.classList.remove  ("dark");
        localStorage.setItem('darkMode', 'light')
    }
})

//Включения ночного режима
btnDarkMode.onclick = function(){
    btnDarkMode.classList.toggle("dark__mode-btn--active");
    const isDark = document.body.classList.toggle('dark');

    if(isDark) {
        localStorage.setItem('darkMode', 'dark')
    }else{
        localStorage.setItem('darkMode', 'light');
    }
}