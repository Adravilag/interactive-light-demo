# Interactive Light Demo

Una demostración interactiva de habitación oscura que muestra las capacidades de Astro junto con técnicas avanzadas de CSS y JavaScript para crear experiencias web inmersivas.

> 🤖 **Desarrollado completamente con Claude Sonnet 4** - Esta aplicación fue creada íntegramente mediante conversación con IA, demostrando las capacidades de desarrollo colaborativo entre humanos e inteligencia artificial.

## ✨ Características

- 🌙 **Experiencia de habitación oscura** con efectos de linterna
- ⌨️ **Animaciones de texto typewriter** estilo Undertale
- 🔦 **Sistema de pickup interactivo** con animaciones y efectos de partículas
- 💡 **Interruptor de luz dinámico** con posicionamiento aleatorio
- 🎨 **Efectos CSS avanzados** (masks, gradients, animations)
- 🔊 **Sistema de audio procedural** para efectos de sonido
- 📱 **Diseño completamente responsivo**
- 🎮 **Interacciones tipo videojuego** (mouse + teclado)
- 🌈 **Múltiples estilos de animación** (undertale, retro, glitch, elegant)
- 🖼️ **Integración perfecta de assets** (fuentes, imágenes, sonidos)

## 🚀 Estructura del Proyecto

```text
interactive-light-demo/
├── public/                   # Assets estáticos
│   ├── background.png       # Imagen de fondo de la habitación
│   ├── modal.png           # Fondo del modal final
│   ├── favicon.svg         # Icono del sitio
│   └── fonts/              # Fuentes personalizadas
│       ├── atkinson-hyperlegible/
│       └── walter-turncoat/
├── src/
│   ├── components/         # Componentes interactivos
│   │   ├── DarkRoom.astro  # Componente principal
│   │   ├── TypewriterText.astro
│   │   ├── FlashlightEffect.astro
│   │   ├── PickupItem.astro
│   │   └── LightSwitch.astro
│   ├── layouts/           
│   │   └── Layout.astro    # Layout principal con fuentes
│   ├── pages/             
│   │   └── index.astro     # Página de inicio
│   └── styles/
│       └── global.css      # Estilos globales
├── astro.config.mjs        # Configuración Astro limpia
├── package.json            # Dependencias mínimas
├── tsconfig.json          # Configuración TypeScript
└── README.md
```

El proyecto utiliza una estructura minimalista y limpia, enfocada exclusivamente en la demostración interactiva. Todos los assets estáticos como imágenes y fuentes se encuentran en el directorio `public/`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎮 Cómo usar la demo

1. Inicia el servidor de desarrollo: `npm run dev`
2. Abre `http://localhost:4321` en tu navegador
3. Sigue la secuencia interactiva:
   - Lee los textos que aparecen automáticamente
   - Espera a que aparezca la linterna brillando (�)
   - Recoge la linterna haciendo click o presionando 'Z'
   - Busca el interruptor de luz (posición aleatoria)
   - Activa el interruptor para completar la demo

## 🤖 Desarrollado con Claude Sonnet 4

Esta aplicación es un ejemplo destacado de **desarrollo colaborativo con IA**:

- **100% código generado** mediante conversación natural
- **Iteración rápida** de funcionalidades complejas
- **Debugging colaborativo** entre humano e IA
- **Implementación de técnicas avanzadas** sin conocimiento previo detallado
- **Optimización continua** basada en feedback inmediato

### Tecnologías implementadas con IA:
- Astro framework con componentes interactivos
- CSS Grid y Flexbox para layouts responsivos
- CSS Masks para efectos de linterna
- Web Audio API para sonidos procedurales
- Canvas y animaciones CSS complejas
- TypeScript para type safety
- Gestión de estados y eventos complejos

## Información del Proyecto

- **Nombre**: Interactive Light Demo
- **Versión**: v0.0.1
- **Repositorio**: `github.com/adravilag/interactive-light-demo`
- **Framework**: Astro v5.15.4
- **Lenguajes**: TypeScript, CSS3, HTML5
- **Dependencias**: Mínimas (solo Astro core)

## 🙏 Créditos

- **Claude Sonnet 4** - Desarrollo completo de la aplicación
- **Astro Team** - Framework excepcional para desarrollo web moderno
- **Fuentes**: Atkinson Hyperlegible, Walter Turncoat
- **Imágenes**: Propiedad del desarrollador (background.png, modal.png)
