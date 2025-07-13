# Simulacro de Examen de Conocimientos MTC - Perú

![MTC Logo](src/images/mtc-logo.jpg)

Una aplicación web interactiva y de código abierto diseñada para ayudar a los postulantes a obtener la licencia de conducir en Perú. Permite practicar con un simulacro del examen de conocimientos oficial del Ministerio de Transportes y Comunicaciones (MTC).

## Características

*   **Simulación Realista:** Responde 40 preguntas en un tiempo límite de 40 minutos, igual que en el examen real.
*   **Banco de Preguntas Actualizado:** Utiliza el balotario de preguntas oficial del MTC.
*   **Revisión Instantánea:** Al finalizar, revisa tus respuestas correctas e incorrectas para identificar áreas de mejora.
*   **Diseño Responsivo:** Practica desde cualquier dispositivo, ya sea de escritorio o móvil.
*   **Sin Registros:** Comienza a practicar de inmediato. Tu progreso se guarda localmente.

## Tecnologías Utilizadas

Este proyecto está construido con tecnologías web modernas, enfocado en la velocidad y la experiencia de usuario.

*   **Framework Frontend:** [React](https://react.dev/)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Herramienta de Build:** [Vite](https://vitejs.dev/)
*   **Estilos CSS:** [Tailwind CSS](https://tailwindcss.com/)
*   **Gestor de Paquetes:** [Bun](https://bun.sh/)

## Próximas Funcionalidades

Tenemos planeado seguir mejorando la aplicación. La próxima gran característica será:

*   **Pregunta Generada por IA:** La última pregunta de cada simulacro será generada dinámicamente por una Inteligencia Artificial para presentar un desafío único y evaluar la capacidad de razonamiento en situaciones de tránsito no cubiertas explícitamente en el balotario.

## Cómo Empezar

Si deseas ejecutar este proyecto localmente, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/lee-chang/simulacros-mtc-react.git
    cd simulacros-mtc-react
    ```

2.  **Instala las dependencias:**
    ```bash
    bun install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    bun run dev
    ```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación.

## Descargo de Responsabilidad

Esta aplicación **NO** es una aplicación oficial del MTC de Perú. Es un proyecto independiente y de código abierto creado con fines educativos. La información se basa en el balotario oficial, pero no se garantiza que esté siempre actualizada o libre de errores.

## Información Recopilada

La aplicación **NO** recopila ningún tipo de información personal identificable (PII). El progreso del simulacro se almacena únicamente en el `localStorage` de tu navegador.

## Créditos y Agradecimientos

*   **Creador del Proyecto:** [lee chang](https://github.com/lee-chang/)
*   **Asistencia en el Desarrollo:** Parte del código y la estructura de este proyecto fueron generados y mejorados con la ayuda de **Gemini**, una IA de Google.