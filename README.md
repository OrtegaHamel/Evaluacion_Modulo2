# Evaluacion_Modulo2 del Bootcamp Fullstack Python

# Desarrollado por Álvaro Ortega Hamel

# Sitio Web Informativo sobre Ciberseguridad

Este es un proyecto educativo que presenta información clave sobre ciberseguridad de forma interactiva y clara. 
El sitio está compuesto por tres páginas principales: `Inicio`, `Amenazas` y `Consejos`.

## Estructura del Proyecto
/
├── index.html # Página principal con banner e introducción
├── amenazas.html # Página sobre amenazas comunes con tarjetas y carrusel
├── consejos.html # Página con consejos, test interactivo y formulario
├── assets/
│ ├── script.js # Script principal con animaciones y validaciones
│ ├── style.css # Estilos personalizados adicionales
│ └── ignorar/ # Carpeta de trabajo local (excluida con .gitignore)
├── .gitignore # Ignora la carpeta assets/ignorar/
└── README.md # Este archivo

## Tecnologías Utilizadas

- **HTML5**
- **Bootstrap 5.3**: para diseño responsivo y componentes visuales.
- **jQuery**: para animaciones, efectos visuales y validación de formularios.
- **JavaScript**: para control de eventos, test de seguridad y lógica general.

## Funcionalidad por Página

### index.html
- Muestra un **banner animado con imagen de fondo desenfocada** y texto superpuesto.
- Incluye una **introducción** a la ciberseguridad que aparece con `slideDown()`.

### amenazas.html
- Muestra **tarjetas de amenazas comunes** (phishing, malware, ransomware, DDoS).
- Las tarjetas aparecen con animación secuencial (`fadeIn()` con `delay()`).
- Cada tarjeta tiene un botón "Saber más" que despliega un **modal** explicativo.
- Al final hay un **carrusel de casos reales** con navegación Bootstrap.

### consejos.html
- Lista animada de **consejos de seguridad**.
- **Test interactivo** con selección y feedback de respuestas.
- **Formulario de contacto** con validación y confirmación por `alert()`.