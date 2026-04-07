document.addEventListener("DOMContentLoaded", () => {
    
    // --- EFECTO MATRIX (TEXT DECODE) ---
    const textElement = document.querySelector('.main-hook');
    
    // Le pusimos un seguro: solo corre si encuentra la clase .main-hook
    if (textElement) {
        const targetText = "NO HACEMOS UNA COSA,\nHACKEAMOS TODO EL ECOSISTEMA";
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+/\\|<>{}[]";
        let iterations = 0;
        
        setTimeout(() => {
            const interval = setInterval(() => {
                textElement.innerText = targetText.split("")
                    .map((letter, index) => {
                        if (letter === '\n' || letter === ' ' || letter === ',') {
                            return letter; 
                        }
                        if (index < iterations) {
                            return targetText[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("");

                if (iterations >= targetText.length) {
                    clearInterval(interval);
                }
                
                iterations += 1 / 2; 
            }, 30); 
        }, 500);
    }

    // --- RADAR DE SCROLL REVEAL (EL QUE MUESTRA TU BANNER) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible'); 
            }
        });
    }, { threshold: 0.15 }); 

    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

});
function updateTerminalClock() {
    const clockElement = document.getElementById('terminal-clock');
    if (clockElement) {
        const now = new Date();
        const date = now.toLocaleDateString('es-MX', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.');
        const time = now.toLocaleTimeString('es-MX', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        clockElement.innerText = `[LOG_TIME: ${date} // ${time} CST]`;
    }
}

// Actualiza cada segundo
setInterval(updateTerminalClock, 1000);
updateTerminalClock(); // Carga inicial