mi-proyecto/
├── .vscode/                    # Configuración IDE
│   ├── settings.json
│   └── extensions.json
├── public/                     # Archivos estáticos (sin procesar)
│   ├── favicon.ico
│   ├── robots.txt
│   └── assets/
│       └── images/
├── src/
│   ├── assets/                 # Recursos procesados por Vite
│   │   ├── styles/
│   │   │   ├── main.scss
│   │   │   ├── _variables.scss
│   │   │   └── _mixins.scss
│   │   ├── images/
│   │   └── fonts/
│   ├── components/             # Componentes reutilizables
│   │   ├── common/            # Genéricos (botones, inputs)
│   │   ├── layout/            # Layout estructural
│   │   └── domain/            # Específicos del negocio
│   ├── composables/            # Lógica reactiva reutilizable
│   ├── constants/              # Constantes globales
│   ├── directives/             # Directivas personalizadas
│   ├── layouts/                # Plantillas de página
│   ├── modules/                # Módulos funcionales (DDD)
│   ├── pages/                  # Vistas enrutadas
│   ├── plugins/                # Plugins de Vue
│   ├── router/                 # Configuración de rutas
│   ├── services/               # Capa de servicios (API, lógica)
│   ├── stores/                 # Stores de Pinia
│   ├── types/                  # Tipos TypeScript globales
│   ├── utils/                  # Funciones helpers puras
│   ├── validators/             # Esquemas de validación
│   ├── App.vue
│   └── main.ts
├── tests/                      # Testing
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .env                        # Variables de entorno
├── .env.development
├── .env.production
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts