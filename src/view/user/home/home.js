const topBar = document.querySelector('.topbar');

// Altura del topBar
let topbarHeight = topBar.offsetHeight;
// padding top (separación del contenido)
const mainContent = document.querySelector('.main-content');
mainContent.style.paddingTop = `${topbarHeight + 22}px`;



// Tipo de Lista
const containerRecent = document.querySelectorAll(
	'.card-recent'
);
// Tipo de Lista
const containerforMe = document.querySelectorAll(
	'.card-forMe'
);


const createButton = card => {
	// Insertando HTML
	const button = document.createElement('button');
	button.innerHTML = '<i class="fa-solid fa-play"></i>';

	// Agregar el botón al elemento hijo
	card.appendChild(button);

	// Ocultar el botón al inicio
	button.style.display = 'none';
	button.classList.add('btn-play');


	// Hover Mouse
	card.addEventListener('mouseover', () => {
		button.style.display = 'block';
	});

	card.addEventListener('mouseout', () => {
		button.style.display = 'none';
	});


	  // Agregando evento al botón Play
	button.addEventListener('click', () => {
        // Obtenemos la URL del atributo data-url del enlace
        const url = card.querySelector('.card').getAttribute('data-url');

        // Redirigir la vista
        window.location.href = url;
    });

};


// Agregar evento de clic al enlace que envuelve todo el contenido
containerRecent.forEach(card => {

    const link = card.querySelector('.card');

    // Agregar evento de clic al enlace
    link.addEventListener('click', () => {
        // Obtener la URL del atributo data-url del enlace
        const url = link.getAttribute('data-url');

           // Redirigir la vista
        window.location.href = url;
    });

    // Crear el botón durante el hover
    createButton(card);
});


// Agregar evento de clic al enlace que envuelve todo el contenido
containerforMe.forEach(card => {

    const link = card.querySelector('.card');

    // Agregar evento de clic al enlace
    link.addEventListener('click', () => {
        // Obtener la URL del atributo data-url del enlace
        const url = link.getAttribute('data-url');

           // Redirigir la vista
        window.location.href = url;
    });

    // Crear el botón durante el hover
    createButton(card);
});


