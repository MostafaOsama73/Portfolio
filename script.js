document.addEventListener('DOMContentLoaded', () => {
    // =========================================
    // 1. Loading Screen & Terminal Effect
    // =========================================
    const loadingScreen = document.getElementById('loading-screen');
    const terminalText = document.getElementById('terminal-text');
    const progressBar = document.querySelector('.progress');
    
    const commands = [
        "Initializing system...",
        "Loading assets...",
        "Connecting to server...",
        "Access granted."
    ];
    
    let commandIndex = 0;
    let charIndex = 0;
    
    function typeCommand() {
        if (commandIndex < commands.length) {
            const currentCommand = commands[commandIndex];
            if (charIndex < currentCommand.length) {
                terminalText.textContent += currentCommand.charAt(charIndex);
                charIndex++;
                setTimeout(typeCommand, 50);
            } else {
                terminalText.textContent += '\n';
                commandIndex++;
                charIndex = 0;
                // Update progress bar
                progressBar.style.width = `${(commandIndex / commands.length) * 100}%`;
                setTimeout(typeCommand, 300);
            }
        } else {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    startTypingEffect(); // Start hero typing after loader
                }, 500);
            }, 500);
        }
    }
    
    typeCommand();

    // =========================================
    // 2. Matrix Rain Effect
    // =========================================
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(13, 13, 13, 0.05)'; // Fade effect
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0'; // Green text
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    }

    setInterval(drawMatrix, 30);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // =========================================
    // 3. Typing Effect (Hero Section)
    // =========================================
    const typedTextElement = document.getElementById('typed-text');
    const roles = ["Back-end Developer", "AI Enthusiast", ".NET Specialist", "Problem Solver"];
    let roleIndex = 0;
    let roleCharIndex = 0;
    let isDeleting = false;

    function startTypingEffect() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typedTextElement.textContent = currentRole.substring(0, roleCharIndex - 1);
            roleCharIndex--;
        } else {
            typedTextElement.textContent = currentRole.substring(0, roleCharIndex + 1);
            roleCharIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && roleCharIndex === currentRole.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && roleCharIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500;
        }

        setTimeout(startTypingEffect, typeSpeed);
    }

    // =========================================
    // 4. Scroll Reveal Animation
    // =========================================
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-scroll').forEach(el => {
        observer.observe(el);
    });

    // =========================================
    // 5. Smooth Scroll for Navigation
    // =========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
