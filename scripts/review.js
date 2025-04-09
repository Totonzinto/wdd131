let count = localStorage.getItem('reviewCount');
        count = count ? parseInt(count) + 1 : 1;
        localStorage.setItem('reviewCount', count);

        
        document.getElementById('reviewCount').textContent = count;

        function goBack() {
            window.location.href = 'form.html'; 
        }

        const year = document.querySelector("#currentyear");
        const lastModified = document.querySelector("#lastModified");
        
        const date = new Date();
        year.innerHTML = date.getFullYear();
        
        let lastMod = document.lastModified;
        lastModified.innerHTML = `Last Modified: ${lastMod}`;
        
        