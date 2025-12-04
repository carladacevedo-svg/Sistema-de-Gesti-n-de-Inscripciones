## Sistema de Gestión de Inscripciones (SGI)

El presente repositorio contiene el desarrollo del Sistema de Gestión de Inscripciones (SGI), elaborado como parte del trabajo final de la Tecnicatura Superior en Análisis de Sistemas.  

El sistema tiene como propósito organizar y digitalizar el circuito completo de inscripción de aspirantes, incorporando distintos niveles de acceso según el rol operativo dentro del proceso.

### Descripción del proyecto

El SGI se estructura en torno a dos componentes principales: una interfaz visual destinada a los usuarios del sistema y un backend encargado del procesamiento de datos y la administración de la información.  

El proyecto busca unificar en una misma herramienta la preinscripción, revisión, seguimiento, asignación de trámites y análisis estadístico, manteniendo un flujo claro entre los participantes del proceso. Así como también una comunicación personalizada dentro de un proceso de inscripción extenso. 

Los roles contemplados incluyen:

- **Aspirante:** inicia su preinscripción y puede seguir el estado del trámite.  
- **Aprobador:** revisa documentación, determina estados y mantiene comunicación con el aspirante.  
- **Oficial:** asigna y reasigna trámites, administra aprobadores y controla períodos de vacaciones.  
- **Jefatura:** supervisa las operaciones generales y accede a reportes y estadísticas consolidadas.

Cada uno de estos perfiles cuenta con pantallas y opciones adaptadas a sus funciones específicas.


### El Sistema se compone por: 

### 1. Frontend

El frontend representa la parte visible del sistema. Incluye todas las pantallas necesarias para que los usuarios puedan interactuar con el SGI.  

Está construido utilizando:

- HTML5  
- CSS3  
- Bootstrap  
- JavaScript  

Las pantallas fueron diseñadas para ser simples de utilizar, con una distribución clara de la información y una estética uniforme. El enfoque estuvo puesto en la navegación, la legibilidad y la coherencia entre secciones. También fue diseñado para que pueda ser utilizado en distintos dispositivos, lo que genera una inclusión completa en el proceso de las personas interesadas. 

### 2. Backend

El backend funciona como la capa lógica del sistema. Se encarga de procesar solicitudes, gestionar usuarios, validar datos, administrar estados, almacenar información y coordinar todas las funciones necesarias para que el SGI opere de forma correcta.

Tecnologías empleadas:

- Java 21  
- Spring Boot  
- Spring Data JPA  
- Hibernate  
- MySQL  
- Docker y Docker Compose  

El proyecto se organiza en controladores, servicios, modelos y repositorios, siguiendo una arquitectura habitual en aplicaciones basadas en Spring Boot.



