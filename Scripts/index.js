// Select the container where data will be displayed
const wondersContainer = document.getElementById('wonders-container');

// Fetch data using Axios
axios.get('https://www.world-wonders-api.org/v0/wonders/')
    .then(response => {
        const wonders = response.data; 

        wonders.forEach(wonder => {
            const wonderCard = document.createElement('div');
            wonderCard.classList.add('wonder-card');

            const name = document.createElement('h2');
            name.textContent = wonder.name;
            wonderCard.appendChild(name);
            
            if (wonder.links.images) {
                const image = document.createElement('img');
                image.src = wonder.links.images[0];
                image.style.width = '100%';
                wonderCard.appendChild(image);
            }
            wondersContainer.appendChild(wonderCard);
            
            wonderCard.addEventListener('click',()=>{
                const wondername=wonder.name;
                window.location.href=`detail.html?name=${wondername}`;
            })
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        wondersContainer.textContent = 'Failed to load wonders data.';
    });
