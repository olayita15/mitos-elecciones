# Mitos Candidaturas

Aplicación estática con Nuxt pensada para consultar mitos y verificaciones sobre candidatos presidenciales de Colombia.

## Arquitectura recomendada

```text
app/
  app.vue
  assets/
    styles/
      main.css
  components/
    app/
      AppHeader.vue
      AppHero.vue
      BreadcrumbTrail.vue
      EmptyState.vue
    explore/
      ExploreShell.vue
    filters/
      CandidateTabs.vue
      CategoryChips.vue
    myths/
      MythCard.vue
      MythDetail.vue
      MythGrid.vue
  composables/
    useMyths.ts
    useSeo.ts
  layouts/
    default.vue
  pages/
    index.vue
    [candidate]/
      index.vue
      [category]/
        index.vue
        [slug].vue
public/
  og-cover.svg
  robots.txt
server/
  routes/
    sitemap.xml.ts
shared/
  config/
    site.ts
  content/
    candidates.ts
    categories.ts
    myths.ts
  types/
    content.ts
  utils/
    routes.ts
nuxt.config.ts
```

## Estructura de rutas

- `/`: todos los mitos, sin filtro de candidato.
- `/cepeda`: mitos de Cepeda.
- `/abelardo`: mitos de Abelardo.
- `/cepeda/economia`: mitos de Cepeda filtrados por Economía.
- `/abelardo/seguridad`: mitos de Abelardo filtrados por Seguridad.
- `/cepeda/economia/cepeda-quiere-subir-el-iva`: detalle de una verificación.

Cada URL representa exactamente el estado de filtros que ve el usuario.

## Modelo de datos

```ts
type Verdict = 'verdadero' | 'falso' | 'parcial'

interface Myth {
  id: string
  slug: string
  candidate: string
  category: string
  verdict: Verdict
  title: string
  summary: string
  explanation: string
  evidences: string[]
  sources: Array<{
    title: string
    url: string
    publisher: string
  }>
}
```

## Componentes principales

- `ExploreShell.vue`: ensambla hero, filtros y listado.
- `CandidateTabs.vue`: selector principal de candidato.
- `CategoryChips.vue`: filtro contextual por categoría.
- `MythGrid.vue`: rejilla/listado de resultados.
- `MythCard.vue`: tarjeta minimalista para cada mito.
- `MythDetail.vue`: lectura completa del mito.
- `BreadcrumbTrail.vue`: navegación contextual para detalle.

## Composables

- `useMyths.ts`: catálogo, búsqueda y filtros sobre contenido estático.
- `useSeo.ts`: `title`, `meta description`, `canonical`, Open Graph, Twitter Cards y JSON-LD.

## Estrategia SEO

- Metadata dinámica por ruta.
- `canonical` absoluto usando `siteConfig.siteUrl`.
- Open Graph y Twitter Cards con imagen base.
- JSON-LD:
  - `CollectionPage` en listados.
  - `ClaimReview` en detalle.
- `robots.txt` y `sitemap.xml` generados para el sitio estático.

Antes de producción, reemplaza `https://mitoscandidaturas.example` por el dominio real en `shared/config/site.ts` y `public/robots.txt`.

## Wireframes en texto

### Home `/`

```text
+--------------------------------------------------+
| Mitos                         Verifica en segundos|
+--------------------------------------------------+
| Verificaciones presidenciales                    |
| Mitos y verificaciones presidenciales            |
| Explora rápidamente...                           |
|                                                  |
| [ Cepeda ] [ Abelardo ]                          |
| Selecciona un candidato para activar categorías. |
|                                                  |
| Mitos disponibles                        8 res   |
| [VERDADERO] Título mito                         >|
| Categoría · Candidato                            |
| Resumen corto                                    |
|                                                  |
| [FALSO] Otro mito                               >|
+--------------------------------------------------+
```

### Candidato `/cepeda`

```text
+--------------------------------------------------+
| Mitos                         Verifica en segundos|
+--------------------------------------------------+
| Cepeda                                           |
| Verificaciones y mitos relacionados...           |
|                                                  |
| [ Cepeda activo ] [ Abelardo ]   Ver todos       |
| Categorías      Limpiar                          |
| [Economía] [Seguridad] [Educación] ...           |
|                                                  |
| Mitos disponibles                        4 res   |
| tarjetas filtradas                               |
+--------------------------------------------------+
```

### Detalle `/cepeda/economia/cepeda-quiere-subir-el-iva`

```text
+--------------------------------------------------+
| Inicio / Cepeda / Economía                       |
| [PARCIAL] Economía · Cepeda                      |
| ¿Cepeda quiere subir el IVA?                     |
| resumen corto                                    |
|                                                  |
| Explicación                                      |
| párrafo resumido                                 |
|                                                  |
| Evidencias                                       |
| - punto 1                                        |
| - punto 2                                        |
|                                                  |
| Fuentes                                          |
| - título fuente                                  |
+--------------------------------------------------+
```

## Datos de ejemplo

El dataset inicial vive en `shared/content/myths.ts` y ya incluye verificaciones de:

- Cepeda / Economía
- Cepeda / Seguridad
- Cepeda / Educación
- Cepeda / Derechos Humanos
- Abelardo / Corrupción
- Abelardo / Salud
- Abelardo / Trabajo
- Abelardo / Energía

## Escalabilidad

- Mantén `shared/content/myths.ts` como fuente única mientras el volumen sea bajo.
- Cuando existan cientos de verificaciones, mueve cada mito a archivos separados por candidato o categoría y genera un índice durante build.
- Conserva `slug`, `candidate` y `category` como claves estables.
- Evita acoplar la UI a textos literales; usa catálogos en `shared/content`.
- Si el volumen crece mucho, considera contenido en Markdown o JSON validado por esquema y compilado en build.
- Mantén las páginas como composición liviana y toda la lógica de filtrado en composables.

## Comandos

```bash
npm install
npm run dev
npm run typecheck
npm run generate
npm run preview
```

## Salida estática

Después de `npm run generate`, el sitio queda listo para publicar desde:

```text
.output/public/
```
