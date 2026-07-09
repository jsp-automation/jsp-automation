# T4 — Dirección visual (v3 — APROBADA)

> **Estado final:** dirección aprobada por el cliente el 09/07/2026 sobre la maqueta v3 inmersiva (`T4-mockup-home.html`, publicada en https://claude.ai/code/artifact/315634e8-f6be-4ee2-ac4c-6659dde77cf4). Principios añadidos en v3 que se convierten en norma para la construcción (T6-T8):
> 1. **La fotografía manda:** hero a pantalla completa (100svh) con foto real + texto superpuesto; secciones clave a sangre completa. Nada de layout "de diapositiva" (tarjetas de texto apiladas y centradas).
> 2. **Scroll narrativo:** parallax en imágenes de fondo, banda de vídeo full-bleed, metodología como scrollytelling con sección fijada (5 fases, número gigante, barra de progreso).
> 3. **Profundidad:** brillos cian radiales, grano fino global, cristal (blur) en tarjetas sobre oscuro, degradados sutiles en botones y fondos. Nada de planos 100 % sólidos en secciones de marca.
> 4. **Header camaleón** (detecta sección clara/oscura).
> 5. **Nube de puntos 3D canvas** como firma visual del despaletizado/visión.
> 6. Fotos reales extraídas del PDF corporativo como material provisional (baja resolución); **pendiente material original (LOTE 1, T5)**.
> La v2 (más abajo) documenta el sistema de marca base (paleta, tipografía, patrones del PDF), que sigue vigente.

# (v2 — sistema de marca base)
**Proyecto:** Web JSP Automation · **Fase A** · Julio 2026
**v2:** reescrita tras recibir la identidad corporativa real (`JSP Automation — Presentación Corporativa 2026.pdf`, 14 págs). La v1 (propuesta oscura/naranja/Archivo) queda descartada por decisión del cliente: **la web debe seguir la imagen de la presentación.**

---

## 1. Sistema de marca extraído del PDF (fuente de verdad)

### Logo
Insignia hexagonal con borde negro: "JSP" (la S es un brazo robótico en cian), "AUTOmation" debajo (AUTO cian / MATION negro), engranaje en el vértice inferior. Funciona sobre claro. **Pedir archivos vectoriales (SVG/AI) en el LOTE 1; si no existen, extraer del PDF a alta resolución.**

### Tipografía
**DM Sans** — única familia en toda la presentación (Light, Regular, Medium, SemiBold, Bold). Es libre (Google Fonts), variable y self-hostable. La web usa DM Sans para todo.
- Titulares: DM Sans Bold/SemiBold, interlineado apretado.
- Cuerpo: DM Sans Regular/Light.
- **Etiquetas técnicas:** DM Sans en MAYÚSCULAS con tracking amplio (patrón constante del PDF: "ESPECIFICACIONES TÉCNICAS", "CARGA ÚTIL").
- Opcional a validar contigo: DM Mono (misma fundición, empareja nativamente) SOLO para cifras/coordenadas en overlays sobre foto. Si prefieres pureza total, DM Sans tracked hace ese papel.

### Paleta (medida del PDF)
| Token | Valor | Uso en el PDF |
|---|---|---|
| `cyan-400` | `#46BED4` | Acento principal: palabras resaltadas de titulares, iconos, eyebrows, tiles de métricas |
| `cyan-600` | `#2A9BB5` | Cian oscurecido para texto pequeño sobre claro (contraste AA) |
| `ink-900` | `#1D1D1F` | Titulares, banda oscura de stats, tarjeta de fase final |
| `gray-700` | `#3D3D3F` | Texto principal |
| `gray-500` | `#6E6E73` | Texto secundario, etiquetas |
| `bg-100` | `#F4F5F7` | Fondo general claro |
| `white` | `#FFFFFF` | Tarjetas |
| Semánticos | rojo `✗` / verde `✓` / ámbar (seguridad) | Solo con significado (antes/después, OK/DEFECTO, PRL) |

**La web es de base CLARA** (fondo `#F4F5F7`, tarjetas blancas). El negro `#1D1D1F` se usa como el PDF lo usa: bandas puntuales de datos y momentos de énfasis (1-2 por página máximo). El cian es el único color de marca; verde/rojo/ámbar solo semánticos.

### Patrones de composición (vocabulario del PDF → componentes web)
1. **Eyebrow + titular bicolor:** etiqueta MAYÚSCULAS tracked (cian o gris) sobre titular en dos partes: *"Frase en negro. Remate en cian."* — siempre con punto final. Es EL patrón de voz visual de JSP ("No vendemos robots. Resolvemos procesos.", "El robot ve el palet. Entiende cómo viene. Actúa.").
2. **Tarjeta blanca redondeada** (radio ~16-24 px) con sombra muy suave, sobre fondo gris claro.
3. **Ficha de especificaciones:** pares etiqueta-mayúscula-gris / valor-semibold-negro separados por hairlines. 
4. **Badge de estado:** pastilla cian claro con punto: `● DISPONIBLE COMERCIALMENTE` / `● EN DESARROLLO — 2026`. **Este sistema del PDF ES la taxonomía de honestidad de T3** — se adopta tal cual.
5. **Banda oscura de métricas:** fondo `ink-900`, cifras grandes en cian, etiquetas tracked.
6. **Tiles de métrica cian:** fondo `cyan-400`, cifra blanca enorme, etiqueta blanca tracked (+25% PRODUCCIÓN).
7. **Tarjetas antes/después:** borde superior rojo (✗ proceso manual) / cian (✓ con JSP).
8. **Cita destacada:** bloque cian con texto blanco itálica, o tarjeta clara con barra lateral cian.
9. **Icon chip:** cuadrado redondeado cian muy claro con icono lineal cian.
10. **Foto con fundido a blanco:** la fotografía industrial se funde hacia el fondo claro por el lado del texto (patrón de la pág. 5).

---

## 2. Concepto visual (revisado)

**«La mirada del ingeniero» sobreVIVE pero se re-viste:** el lenguaje de anotación (marcos de detección, cotas, trayectorias, OK/NOK) se ejecuta con la estética del PDF — líneas cian finas, etiquetas DM Sans tracked, checks verdes/rojos semánticos sobre fotografía real. El propio PDF ya lo insinúa (flujo OK/DEFECTO, specs junto a foto); la web lo lleva a movimiento.

Reglas de contención (sin cambios): máx. 3 anotaciones por imagen, unidades reales, nada de HUD/neón/glow, cifras solo verdaderas.

## 3. Fotografía

- Fotos reales de planta (el PDF ya contiene: GlueArm en inyectora, celda AWP·40L de producto). Grade: luminoso y neutro, alineado con la base clara — NO el grade oscuro de la v1.
- Producto sobre fondo claro/blanco para fichas (como la foto AWP·40L del PDF).
- Fundido a blanco como máscara de integración foto↔texto.
- Renders 3D: el PDF los usa para productos en desarrollo (Paletizador Caótico) sobre fondo negro — aceptado como lenguaje de "producto futuro", siempre con badge EN DESARROLLO visible.

## 4. Animación (catálogo revisado)

Sin cambios estructurales respecto a v1 salvo estética (cian/claro) y una adición:

| # | Animación | Nota v2 |
|---|---|---|
| A1 | Zoom lento sobre foto | igual |
| A2 | Dibujo progresivo de anotaciones | trazos cian, etiquetas DM Sans tracked |
| A3 | Revelado de sección (fade + 12px) | igual |
| A4 | Trayectoria dibujándose | cian sobre foto clara |
| A5 | Parallax moderado desktop | igual |
| A6 | Contador de cifras reales | cifras cian en banda oscura / blancas en tiles cian |
| A7 | Microinteracciones | botones cian, tarjetas con elevación suave |
| A8 | Header claro translúcido→sólido | base clara, no oscura |
| **A9** | **Flujo de inspección animado** (nuevo) | el diagrama OK/DEFECTO de la pág. 11 como componente animado paso a paso — ideal para la página de control de calidad |

Reglas globales idénticas: transform/opacity, IntersectionObserver, `prefers-reduced-motion`, móvil simplificado, vanilla.

## 5. Componentes: carácter (revisado)

- **Botón primario:** fondo `cyan-400`, texto `ink-900` o blanco según contraste medido, radio ~10-12 px (siguiendo la redondez del PDF, más suave que la v1), flecha → al hover.
- **Formularios:** campos blancos sobre `bg-100`, foco cian.
- **Etiquetas de estado/taxonomía:** el badge del PDF, literal.
- Grid y aire: igual que v1 (12 col, 1280-1360 px, secciones generosas).

## 6. Impactos de la identidad real sobre T2/T3 (registrados como adenda en cada doc)

1. **T2 — posicionamiento REFORZADO y matizado:** "No vendemos robots. Resolvemos procesos." es frase oficial de JSP (pág. 6) → candidata firme a hero. Matiz nuevo: *"No somos un integrador. Somos el fabricante."* (pág. 12) — JSP fabrica productos propios (impresión 3D, aplicador de diseño propio). El relato pasa de "ingeniería que estudia" a **"fabricante de soluciones propias que parte del proceso real"**. El pilar de honestidad se confirma (badges de estado, "datos reales", nota "sistema en fase de desarrollo").
2. **T3 — arquitectura:** las páginas de solución se anclan en los productos con nombre: Paletizado → Celda Compacta AWP·40L (+Paletizador Caótico IA en desarrollo) · Despaletizado → Despaletizado por Visión IA · Control de calidad → Control de Calidad IA · y GlueArm como producto/caso estrella del sector calzado. Los badges de estado del PDF sustituyen/absorben la taxonomía A-E de proyectos (se fusionan en T13).
3. **T3 — CTA validado por el propio PDF:** su diapositiva final es exactamente "Cuéntanos tu proceso." con el subtexto "Te decimos en días si podemos mejorarlo." — se adopta este subtexto.
4. **Metodología:** el PDF define 5 fases (no 4) + "cobro por objetivos cumplidos" + "La instalación no termina cuando se entrega: termina cuando funciona." → la sección Cómo trabajamos usa las 5 fases oficiales.
5. **Datos a confirmar con el cliente:** (a) métricas GlueArm inconsistentes en el PDF: +25%/−60% (págs. 3 y 6) vs +35%/−50% (pág. 5) — decidir cuál es la real; (b) email mostrado "ingeniería@jsp-automation.es" contiene tilde (inválido como dirección real) — confirmar dirección exacta; (c) confirmar si existen archivos vectoriales del logo.

## 7. Criterio de "listo"
- [x] Sistema de marca extraído del PDF real (tipografía, paleta medida, 10 patrones).
- [x] Concepto "mirada del ingeniero" re-vestido, no descartado.
- [x] Catálogo de animación revisado + A9.
- [x] Impactos sobre T2/T3 documentados.
- [ ] **Pendiente: tu aprobación de la v2 + respuestas a los 3 datos a confirmar.**
