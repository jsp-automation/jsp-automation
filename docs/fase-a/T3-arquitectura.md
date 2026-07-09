# T3 — Arquitectura de la web
**Proyecto:** Web JSP Automation · **Fase A** · Julio 2026
**Base:** T1 (benchmark) y T2 (posicionamiento «Primero, el proceso»)

---

## 1. Sitemap

```
/                               Inicio
/soluciones/                    Hub de soluciones (índice corto, no página de relleno)
/soluciones/paletizado/         Paletizado robotizado
/soluciones/despaletizado/      Despaletizado con visión
/soluciones/vision-artificial/  Visión artificial industrial
/soluciones/control-de-calidad/ Control de calidad con visión e IA
/soluciones/automatizacion-a-medida/  Automatización y maquinaria a medida
/proyectos/                     Hub de proyectos (con filtro por tipo y por solución)
/proyectos/<slug>/              Ficha de proyecto
/como-trabajamos/               Metodología (página estrella)
/empresa/                       Quiénes somos / cómo pensamos
/contacto/                      Cuéntanos tu proceso
/privacidad/ /aviso-legal/ /cookies/   Legales (RGPD)
```

### Decisiones razonadas sobre tu duda del brief (¿3, 4 o 5 soluciones?)

**En la homepage y la navegación: 3 categorías. En URLs: 5 páginas.** Así se reconcilian claridad y especificidad:

- **Home muestra 3 tarjetas** (tu propuesta original era correcta): *Paletizado y despaletizado* · *Visión artificial e inspección* · *Automatización a medida*. Tres se recuerdan; cinco fragmentan la oferta ante alguien que os ve por primera vez.
- **Pero existen 5 páginas específicas**, porque:
  - **SEO:** "robot paletizador" y "despaletizado automático" son búsquedas distintas con intención distinta; una página combinada compite peor en ambas.
  - **Despaletizado merece página propia:** es la solución técnicamente más diferencial de JSP (visión 3D, pallets heterogéneos) y la que menos competidores locales pueden contar bien. Fusionarla con paletizado la degradaría a párrafo.
  - **Visión y control de calidad se separan** porque el comprador es distinto: visión/guiado lo busca quien automatiza (ingeniero de procesos); control de calidad lo busca el responsable de calidad. Distinto problema, distinta keyword, distinta página.
- La tarjeta "Paletizado y despaletizado" de la home enlaza al hub con ancla o directamente a paletizado con acceso cruzado visible a despaletizado (se decide en diseño).

### Qué se queda fuera (consciente)

- **Blog/recursos:** no en el lanzamiento. Es la palanca SEO de autoridad correcta (lección Rocketfarm) pero solo si se alimenta; una sección "Noticias" con 2 entradas viejas resta más que suma. Se deja la arquitectura preparada.
- **Sectores:** no hay páginas por sector aún (calzado podría ser el primero más adelante, cuando haya 2+ proyectos publicables del sector).
- **Idiomas:** castellano en raíz (`/`), arquitectura preparada para `/en/` y `/fr/` (contenido separado del código, T6).

---

## 2. Navegación

**Header (desktop):** logo JSP → Soluciones (desplegable: 5 + "ver todas") · Proyectos · Cómo trabajamos · Empresa · **[Cuéntanos tu proceso]** (botón destacado, estilo distinto)

- "Contacto" no aparece como ítem de menú: **el botón CTA es el contacto.** Menos redundancia, más foco. En el footer sí hay bloque de contacto completo.
- "Cómo trabajamos" mantiene nivel 1: es el pilar de credibilidad metodológica (T2); esconderlo bajo "Empresa" lo mataría.
- **Móvil:** menú hamburguesa de pantalla completa con los 4 ítems + botón CTA fijo. El CTA además persiste como botón compacto en la barra superior móvil al hacer scroll.
- Header transparente sobre el hero → sólido al hacer scroll (patrón premium estándar, barato en rendimiento).

**Footer:** propuesta en una línea + navegación completa + datos de contacto reales (email, teléfono, ubicación) + legales + selector de idioma (cuando exista).

---

## 3. Decisión de CTA principal

| Candidato | Análisis | Veredicto |
|---|---|---|
| **«Cuéntanos tu proceso»** | Fricción mínima: no pide comprar, ni reunión, ni compromiso — pide *contar*, que es lo que un responsable con un problema ya quiere hacer. Define exactamente la acción y el modelo comercial (conversación técnica). Coherente total con «Primero, el proceso». Patrón validado en el mercado español (Inser: "¿Estudiamos tu caso?", Geniotic: "Cuéntanos qué tienes pensado automatizar"). | ✅ **CTA principal** |
| «Hablar con un ingeniero» | Máxima señal de interlocución técnica, pero promete una llamada/reunión → más compromiso percibido, más fricción para un primer contacto frío. Además operativamente exige agenda. | Se usa como **refuerzo**, no como botón: bajo el formulario, "Te responde un ingeniero, no un comercial." |
| «Estudiar mi aplicación» | Primera persona del usuario (patrón moderno), pero "estudiar" suena a encargo formal (¿me van a cobrar el estudio?, ¿me comprometo?). Ambigüedad = fricción. | ❌ |
| «Analizar mi proceso» | Mismo problema, más frío y clínico. | ❌ |

**Sistema de CTAs completo:**
- **Primario (header, hero, cierre de cada página):** «Cuéntanos tu proceso» → `/contacto/`
- **Secundario del hero:** «Ver soluciones» (para el visitante que aún no está listo).
- **Secundario contextual en páginas de solución:** el mismo primario con línea de refuerzo debajo: *"Lo revisa un ingeniero. Sin compromiso."*

---

## 4. Homepage — wireframe textual

**Cambio razonado sobre tu estructura del brief:** muevo «Problemas que resolvemos» ANTES de «Soluciones». Narrativa: primero el visitante se reconoce en su problema, después ve las soluciones como respuesta. Es el arco de T2 (tu proceso tiene un límite → lo estudiamos → lo resolvemos) y evita el efecto catálogo de abrir con nuestras categorías.

```
S1 · HERO (oscuro)
    H1: "Automatizamos lo que frena tu producción."
    Sub: "Robótica, visión artificial y automatización a medida. Estudiamos
         tu proceso, validamos la viabilidad y construimos la solución."
    CTA: [Cuéntanos tu proceso] [Ver soluciones]
    Visual: FOTO 01 (robot real) con animación "mirada del ingeniero":
    zoom lento + overlay progresivo de anotaciones técnicas (cotas, ejes,
    punto de agarre). Móvil: misma foto recortada vertical, overlay reducido.

S2 · PROPUESTA DE VALOR (claro) — breve, 2-3 líneas + 4 afirmaciones
    H2: "Primero estudiamos el proceso. Después elegimos la tecnología."
    4 bloques mínimos: No vendemos robots, resolvemos procesos ·
    Validamos antes de construir · Integramos mecánica, control, visión y
    software · Instalamos y acompañamos.

S3 · PROBLEMAS QUE RESOLVEMOS (claro→oscuro, transición)
    H2 orientado al visitante: "¿Te suena?"  (definitivo en copy de T8)
    Interacción propuesta (NO lista de iconos): panorámica de planta real
    donde los problemas aparecen como ETIQUETAS DE DETECCIÓN sobre la escena
    (estilo visión artificial, concepto T2): "puesto sin cubrir",
    "manipulación manual de 20 kg", "inspección visual manual", "cuello de
    botella". Al pulsar/hover, cada etiqueta despliega 1 frase + enlace a la
    solución. Móvil: las etiquetas se convierten en lista vertical animada
    sobre la misma foto. Fallback sin JS: lista simple.

S4 · SOLUCIONES (oscuro) — 3 tarjetas grandes
    Paletizado y despaletizado · Visión artificial e inspección ·
    Automatización a medida. Cada una: foto real + 1 frase de problema
    + enlace. (Textos base: los del brief §14.3, pulidos en T8.)

S5 · CÓMO TRABAJAMOS (claro) — la sección estrella
    Los 4 pasos del brief §14.5 (Entendemos el proceso / Validamos la
    viabilidad / Diseñamos e integramos / Instalamos y acompañamos)
    presentados como línea de proceso con numeración grande 01-04 y
    revelado secuencial al hacer scroll. Cada paso: 2 líneas concretas de
    QUÉ se hace (datos que pedimos, qué se simula, qué se entrega).
    Cierre: enlace a /como-trabajamos/ ("Ver el método completo").

S6 · PROYECTOS (claro) — 2-3 destacados
    Tarjetas con etiqueta de tipo visible (Proyecto / PoC / Desarrollo…) —
    la honestidad de la etiqueta ES el mensaje. Enlace al hub.
    Si al lanzar solo hay 1-2 publicables, la sección se titula
    "Trabajo real" y muestra lo que haya sin rellenar.

S7 · TECNOLOGÍA (oscuro) — corta
    H2: "Primero la solución. Después, la tecnología."
    Copy: seleccionamos robot/cobot, cámara 2D/3D, PLC, herramienta según
    la aplicación — sin atarte a un fabricante. Visual: NO pared de logos;
    composición tipográfica de categorías tecnológicas con datos.

S8 · CTA FINAL (oscuro, cierre potente)
    H2: "¿Tienes un proceso que crees que se puede automatizar?"
    Copy: "Cuéntanos el proceso, los requisitos y el objetivo. Estudiamos
    la aplicación y su viabilidad técnica. Te responde un ingeniero."
    CTA: [Cuéntanos tu proceso]
```

Ritmo de fondos: oscuro → claro → transición → oscuro → claro → claro → oscuro → oscuro. El oscuro marca los momentos de marca (hero, soluciones, tecnología, cierre); el claro, los de confianza y lectura (valor, método, proyectos). Coincide con la mitigación de riesgo definida en T2.

---

## 5. Plantilla de página de solución

Estructura común con contenido 100 % específico por página (temas del brief §15; prohibido clonar párrafos):

```
1. Hero (oscuro, compacto): H1 con la solución + subtítulo de problema.
2. "Problemas típicos": 3-5 situaciones concretas de ESA solución
   (paletizado: pesos/ciclos/cambios de formato; despaletizado: pallets
   heterogéneos/posición variable; calidad: variabilidad del criterio
   humano/trazabilidad…).
3. "Qué resolvemos": alcance técnico real, con cifras orientativas solo
   si son defendibles (rangos de peso, tipos de formato).
4. "Cómo lo abordamos": el método de 4 pasos PARTICULARIZADO (qué se
   estudia y qué se prueba en un proyecto de este tipo — p.ej. en
   despaletizado: dataset de producto, pruebas de detección 3D).
5. Tecnología aplicable: cobot vs industrial, 2D vs 3D… explicado como
   decisión según proceso (refuerzo del posicionamiento).
6. Proyecto/PoC relacionado (si existe; si no, se omite la sección — no
   se rellena).
7. FAQ técnica breve (3-5 preguntas reales de cliente; base SEO).
8. CTA de cierre contextual.
```

---

## 6. Proyectos: taxonomía y plantilla

**Tipos (etiqueta visible en tarjeta y ficha, con definición pública):**

| Etiqueta | Criterio de asignación |
|---|---|
| **Caso de éxito** | Proyecto real, terminado, en producción, con resultado medible que el cliente permite contar |
| **Proyecto** | Proyecto real entregado o en ejecución, sin métricas publicables |
| **Desarrollo tecnológico** | Tecnología/software propio desarrollado internamente |
| **Prueba de concepto** | Validación técnica real de una aplicación |
| **Capacidad técnica** | Demostración de una capacidad (p. ej. celda de pruebas del taller) |

Reglas: la etiqueta la asignamos contigo pieza a pieza (T13); "Caso de éxito" exige resultado real; el bloque "Resultado" de la ficha **se omite** si no hay datos (nunca se rellena con vaguedades).

**Ficha:** Problema → Reto técnico → Solución → Tecnología (lista concreta) → Resultado (condicional) → Galería. Hub con filtros por tipo y por solución.

---

## 7. Estrategia de contacto (`/contacto/`)

**Experiencia progresiva en dos pasos** (decisión técnica del backend en T14):

- **Paso 1 — contar el proceso (fricción mínima):** nombre · empresa · email · teléfono (opcional) · "¿Qué proceso quieres automatizar?" (textarea con placeholder-guía: *"Qué se hace hoy, cuántas unidades/turnos, qué te gustaría conseguir"*). Consentimiento RGPD. Botón: «Enviar».
- **Paso 2 — tras enviar (opcional, en la pantalla de gracias):** "¿Tienes fotos, vídeos o planos del proceso? Nos ayudan a estudiarlo mejor." → subida de archivos + campos opcionales (producción, pesos, ciclos, restricciones). Quien no quiera, ya ha convertido en el paso 1.
- **Alrededor del formulario:** qué pasa después en 3 líneas (*"1. Un ingeniero revisa tu proceso. 2. Te contactamos para entenderlo bien. 3. Te decimos si es viable y cómo lo abordaríamos."*) + email y teléfono directos para quien odia formularios.
- WhatsApp Business y calendario: se evalúan en T14 contigo (dependen de vuestra operativa real, no de la web).

---

## ADENDA (tras recibir la presentación corporativa 2026)

1. **Las páginas de solución se anclan en productos con nombre propio:**
   - `/soluciones/paletizado/` → **Celda Compacta AWP·40L** (● Disponible comercialmente) + **Paletizador Caótico IA** (● En desarrollo 2025/2026)
   - `/soluciones/despaletizado/` → **Despaletizado por Visión IA** (● En desarrollo 2026)
   - `/soluciones/control-de-calidad/` → **Control de Calidad IA** (● En desarrollo 2026, calzado)
   - **GlueArm** (célula encoladora, instalada 2022, 4 unidades) → producto/caso estrella; encaja como proyecto destacado + presencia en automatización a medida y sector calzado.
2. **Los badges de estado del PDF** (`● DISPONIBLE COMERCIALMENTE` / `● EN DESARROLLO — año`) se integran con la taxonomía A-E de proyectos: los productos llevan badge de estado; los proyectos llevan etiqueta de tipo. Fusión definitiva en T13.
3. **CTA validado:** la diapositiva final del PDF es "Cuéntanos tu proceso." con subtexto "Te decimos en días si podemos mejorarlo." → se adopta el subtexto en el CTA final de la web.
4. **Cómo trabajamos: 5 fases oficiales del PDF** (Definición → Diseño e integración → Instalación y puesta en marcha → Ajustes en producción real → Validación final del cliente), con los dos compromisos: cobro por hitos cumplidos y "la instalación no termina cuando se entrega: termina cuando funciona."
5. Contacto real disponible: Juan Ignacio Pérez Domínguez · +34 696 199 024 · email a confirmar (el PDF muestra "ingeniería@" con tilde).

## 8. Criterio de "listo"

- [x] Sitemap con decisiones razonadas (3 tarjetas / 5 páginas; despaletizado y calidad con página propia; blog y sectores fuera conscientemente).
- [x] Navegación desktop y móvil definida; contacto = botón CTA.
- [x] CTA principal decidido y argumentado: «Cuéntanos tu proceso», con sistema completo.
- [x] Homepage wireframe sección a sección con interacción de "problemas" no-iconos y ritmo de fondos.
- [x] Plantillas de solución y proyecto; taxonomía honesta con reglas.
- [x] Contacto progresivo en 2 pasos.
- [ ] **Pendiente: tu aprobación.**
