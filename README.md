# Label77 Costa Rica - frontend con Vite

Esta carpeta ahora contiene una version frontend con:

- `React`
- `Vite`
- `lucide-react`

No usa backend ni base de datos.

## Comandos

- `npm run dev`
- `npm run build`
- `npm run preview`

## Editar contenido

La mayoria del contenido esta en `src/App.jsx`.

Los estilos estan en `src/styles.css`.

## Agregar imagenes sin tocar tanto codigo

Ahora el proyecto detecta imagenes automaticamente si las guardas en estas carpetas:

- `src/assets/products/camisas/`
- `src/assets/products/suteres/`
- `src/assets/products/tazas/`
- `src/assets/products/botellas/`
- `src/assets/products/gorras/`
- `src/assets/products/llaveros/`
- `src/assets/products/bolsos/`
- `src/assets/products/almohadas/`
- `src/assets/products/mousepad/`
- `src/assets/examples/`

Como funciona:

- Cada archivo dentro de `src/assets/products/<categoria>/` aparece solo en esa categoria.
- Cada archivo dentro de `src/assets/examples/` aparece solo en "Trabajos Realizados".
- El nombre del archivo se usa como titulo visible. Ejemplo: `gorra-negra-frente.png` se mostrara como `Gorra Negra Frente`.

Ejemplos:

- `src/assets/products/gorras/gorra-negra-frente.png`
- `src/assets/products/tazas/taza-11oz-logo.png`
- `src/assets/examples/gorra-evento-empresa.png`

## Publicar

Despues de correr `npm run build`, sube el contenido de la carpeta `dist`.
