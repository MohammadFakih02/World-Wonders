let wondername= new URLSearchParams(window.location.search).get('name');
wondername=wondername.toLowerCase();
const instance = axios.create({
    baseURL: "https://www.world-wonders-api.org/v0/wonders/name",
  });

if(wondername){
    instance.get(`/${encodeURIComponent(wondername)}`)
    .then(Response=>{
        const wonder =Response.data;
        const container= document.getElementById('wondercontainer');
        container.classList.add('wonder-container')

        const name = document.createElement('h1');
        name.textContent=wonder.name;
        container.appendChild(name);
        
        const imagecontainer = document.createElement('div');
        imagecontainer.classList.add('image-container')
        wonder.links.images.forEach(element => {
            let image= document.createElement('img');
            image.src=element;
            imagecontainer.append(image);
        });
        container.append(imagecontainer);

        const summary = document.createElement('p');
        summary.textContent=wonder.summary;
        container.appendChild(summary);

        const location=document.createElement('p');
        location.textContent=`Location : ${wonder.location}`;
        container.appendChild(location);

        const buildyear=document.createElement('p');
        buildyear.textContent=`Build Year: ${wonder.buildyear}`;
        container.appendChild(buildyear);

        const linksContainer = document.createElement('div');
            linksContainer.classList.add('links');
            linksContainer.innerHTML = `
                <strong>Links:</strong>
                <a href="${wonder.links.wiki}" target="_blank">Wikipedia</a>
                <a href="${wonder.links.britannica}" target="_blank">Britannica</a>
                <a href="${wonder.links.google_maps}" target="_blank">Google Maps</a>
                <a href="${wonder.links.trip_advisor}" target="_blank">TripAdvisor</a>
            `;
            container.appendChild(linksContainer);
    })
}