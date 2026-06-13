# Estudio Digital Solvers

- [x] Definir modelo de landing reutilizable por empresa.
- [x] Crear estructura de proyecto desplegable en Dokploy.
- [x] Construir plantilla visual premium.
- [x] Agregar datos demo y rutas por empresa.
- [x] Verificar responsive y carga de datos.
- [x] Dejar servidor local listo para revisión.
- [x] Analizar Tulia Boots y adaptar el micro-estudio a ecommerce con agente de ventas.
- [x] Agregar prospecto `tulia-boots` con hallazgos personalizados.
- [x] Verificar la ruta local y dejar lista la actualización para deploy.
- [x] Agregar auditoría de página y capa de mapa de calor para Tulia Boots.
- [x] Verificar localmente el nuevo contenido antes de actualizar producción.
- [x] Agregar contactos de Valentin y Valentina con roles dentro de Solvers.
- [x] Verificar y desplegar la actualización de contactos.
- [x] Revisar responsive y legibilidad en móvil, tablet y desktop.
- [x] Corregir bloque visual del plan en móvil para eliminar franja vacía y texto pesado dentro del mockup.
- [x] Analizar Blubba Lencería desde Instagram/canales visibles.
- [x] Agregar prospecto `blubba-lenceria` con enfoque web + pauta + bot.
- [x] Verificar localmente contenido, responsive y legibilidad.
- [x] Desplegar y verificar producción.

## Review

- `npm run check` valida marcadores de plantilla y 3 demos.
- HTTP local verificado en `/empresa/la-casa-del-sabor`, `/empresa/ferreteria-la-70?edit=1` y `/data/prospects.json`.
- Chromium headless generó capturas desktop 1440x950 y móvil 390x844 sin pantalla en blanco ni quiebre visible en hero.
- Tulia Boots: se verificó `https://tuliaboots.com`, presencia Shopify, WhatsApp visible y ausencia de agente conversacional visible; se desplegó `/empresa/tulia-boots` en Dokploy con HTTP 200 y DOM personalizado.
- Tulia Boots: se agregaron fallas visibles de página, medición con mapa de calor y entregable de panel de oportunidades. Verificación local: `npm run check` OK, `/data/prospects.json` expone `siteIssues`, `heatmapData` y el entregable de mapa de calor.
- Se agregaron contactos de cierre: Valentina como frente comercial/cliente y Valentin como estrategia/arquitectura Solvers, ambos con enlace directo de WhatsApp.
- Deploy de contactos verificado: `/empresa/tulia-boots` HTTP 200, HTML público contiene ambos contactos, OpenClaw browser móvil confirmó 2 `.contact-card`, links de WhatsApp y sin overflow horizontal.
- Responsive/legibilidad final: se ajustó line-height móvil para títulos grandes y `scroll-margin-top` en secciones. Producción verificada con OpenClaw browser en 360x800, 390x844, 768x1024 y 1440x900: sin overflow horizontal, sin textos menores a 12px, botones legibles, 8 headings principales y 2 tarjetas de contacto visibles.
- Fix de legibilidad móvil reportado por Valentina: en `max-width: 640px` se simplificó la barra superior, se eliminó el CTA fijo de header en móvil y el mockup de la sección de plan pasó a fluir por contenido, con copy a 14px/1.45 para evitar el bloque alto con franja vacía.
- Blubba Lencería: se agregó prospecto `blubba-lenceria` con enfoque de Instagram + WhatsApp sin landing/ecommerce visible. El argumento comercial se centra en web/catálogo, pauta con medición, pixel, mapa de calor y bot comercial para convertir consultas en ventas, no solo en crecimiento de perfil.
- Verificación local Blubba: `npm run check` OK con 5 prospectos; `/data/prospects.json` expone Blubba, estado detectado, CTA y referencia `wa.link/xi2ycp`; el enlace público de WhatsApp resuelve a Business Account Blubba con teléfono `+57 314 876 7758`.
- Deploy Blubba: commits `ca76fdf` y `5cf6431`, Dokploy deployment `_gUzLBPOPFEw-rRwHp5vR` terminó `done`. URL pública `https://estudios-digitales.solversai.cloud/empresa/blubba-lenceria` HTTP 200; datos públicos contienen Blubba, estado detectado, CTA y referencia `wa.link/xi2ycp`.
- Verificación responsive pública: OpenClaw browser en móvil 393x852 y desktop 1440x900 confirmó sin overflow horizontal, mínimo de fuente 12px, 2 tarjetas de contacto y título correcto `Estudio digital para Blubba Lencería`.
## Janethy Fiestas mini-estudio
- [x] Analizar dolores comerciales desde Instagram/canales visibles.
- [x] Agregar prospecto `janethy-fiestas` a la plantilla.
- [x] Verificar contenido local y responsive.
- [x] Commit/push y desplegar en Dokploy.
- [x] Verificar producción y enviar link a Valentina.

## Review Janethy Fiestas

- Se agregó `janethy-fiestas` con enfoque de vestidos de fiesta/alquiler: citas, tallas, disponibilidad, precio, alquiler/venta, ajustes, ubicación, separación y seguimiento por WhatsApp.
- Datos usados: captura del 12 de junio de 2026 y búsquedas públicas de @janethyfiestas; perfil con 639 publicaciones, 30,5 mil seguidores, Cll 49 # 40-48, teléfono 218-25-92 y WhatsApp +57 301 287 8067.
- Verificación local: `npm run check` OK con 7 prospectos; Chromium móvil 393x852 y desktop 1440x900 sin overflow horizontal, mínimo de fuente 12px, título correcto y 2 contactos visibles.
- Deploy: commit `0adbd97`, push a `main`, Dokploy app `estudios-digitales` deployment `EdEvBglEqDSwkByObT8NY` terminó `done`.
- Producción: `https://estudios-digitales.solversai.cloud/empresa/janethy-fiestas` HTTP 200; `/data/prospects.json` contiene Janethy; Chromium público móvil/desktop confirmó título, dolor de tallas/disponibilidad/precio, sin overflow horizontal, mínimo 12px y 2 contactos visibles.

## Casa Candela identidad visual
- [x] Rehacer Casa Candela para que no se sienta como plantilla genérica.
- [x] Agregar tratamiento visual propio con imagen real, universo de marca y scroll más editorial.
- [x] Verificar render local por DOM y `npm run check`.
- [x] Desplegar y verificar producción.

## Review Casa Candela identidad visual

- Se agregó `theme: "resort"` para Casa Candela con portada usando imagen real pública de villa, logo oficial, tipografía editorial y tratamiento cálido/hotelero.
- Se agregó sección `Universo de marca` con galería real de Casa Candela y 4 pasos: deseo, elección, claridad y reserva.
- Producción final: commit `de5aab8`, Dokploy deployment `5ExyyCzfHrh9-84g-vLW6` terminó `done`.
- Verificación pública: `https://estudios-digitales.solversai.cloud/empresa/casa-candela?v=de5aab8` HTTP 200; tema `resort`, hero con `Casa-Candela-Villa-Deluxe`, logo cargado, 3 imágenes de galería, 4 pasos, 2 contactos, sin overflow horizontal en 393x852 y 1440x900, fuente mínima 12px.

## Casa Candela contenido de valor
- [x] Reorganizar hero y microtextos para hablar de dolores de cabeza y solución.
- [x] Cambiar etiquetas genéricas del panel por `Dolor 01`, `Dolor 02`, `Solución 01`, `Solución 02`.
- [x] Reescribir recorrido, pérdidas, campañas y entregables con foco en reserva, WhatsApp filtrado y medición.
- [x] Desplegar y verificar producción.

## Review Casa Candela contenido de valor

- Se reescribió el hero para explicar el dolor específico: Casa Candela ya atrae deseo, pero la reserva se dispersa cuando la persona debe decidir entre habitaciones, villas, día de spa, Ubari, tarifas, fechas, políticas o cómo reservar.
- Se reemplazaron microtextos genéricos por cuatro bloques concretos: `Dolor 01` interés disperso, `Dolor 02` WhatsApp sin filtro, `Solución 01` ruta por intención y `Solución 02` reserva asistida.
- Se reforzaron pérdidas, recorrido, campañas y entregables con foco en dolores de cabeza y solución comercial.
- Producción final: commit `16f835a`, Dokploy deployment `GQSOal0Iz0ZNhj2Ne3H8O` terminó `done`.
- Verificación pública: `https://estudios-digitales.solversai.cloud/empresa/casa-candela?v=16f835a` sin overflow horizontal en móvil 393x852 y desktop 1440x900, fuente mínima 12px, 4 bloques dolor/solución, 3 imágenes de galería y 2 contactos visibles.

## Casa Candela banner móvil
- [x] Corregir hero móvil para que la imagen principal no se pierda detrás del texto.
- [x] Mantener desktop full-bleed con imagen de fondo.
- [x] Desplegar y verificar producción.

## Review Casa Candela banner móvil

- Se agregó una franja visual mobile dedicada (`mobile-hero-banner`) que usa la imagen principal de Casa Candela arriba del contenido del hero.
- En móvil, el hero deja de depender de la imagen como fondo detrás del texto; la foto queda visible como banner de 214px antes del título.
- En desktop, el banner mobile permanece oculto y la portada conserva la imagen full-bleed.
- Producción final: commit `b18b003`, Dokploy deployment `Wkmi1BoeXbW1mT3m4jUpN` terminó `done`.
- Verificación pública: `https://estudios-digitales.solversai.cloud/empresa/casa-candela?v=b18b003`; móvil 393x852 sin overflow, fuente mínima 12px, banner visible con imagen cargada; desktop 1440x900 sin overflow, hero full-bleed intacto.

## Casa Candela bot 24/7
- [x] Hacer visible dentro de la propuesta el bot de reservas 24/7.
- [x] Reforzar el dolor de atención fuera de horario y preguntas repetidas.
- [x] Verificar contenido local y producción.
- [x] Desplegar actualización.

## Review Casa Candela bot 24/7

- Se reforzó Casa Candela con el ángulo explícito de bot de reservas 24/7 sin humano conectado.
- El cambio quedó visible en el foco de solución, tile de diagnóstico, recorrido de experiencia, bloque de solución, campañas y entregables.
- Producción final: commit `9f72857`, Dokploy deployment `F6IaCIAU_Crf4IhF7oC7C` terminó `done`.
- Verificación pública: `https://estudios-digitales.solversai.cloud/empresa/casa-candela?v=9f72857` HTTP 200; DOM público contiene `Bot 24/7 de reservas`, `bot de reservas 24/7`, `sin un humano conectado` y `Bot comercial 24/7`.

## Tahiti Hotel mini-estudio
- [x] Analizar captura de Instagram y ruta digital pública.
- [x] Agregar prospecto `tahiti-hotel` con enfoque hotelero premium.
- [x] Verificar JSON, contenido local y render DOM móvil.
- [ ] Commit/push y desplegar en Dokploy.
- [ ] Verificar producción y enviar link a Valentina.

## Review Tahiti Hotel

- Datos usados: captura enviada el 13 de junio de 2026 con `@tahitihotel`, 345 publicaciones, 76,9 mil seguidores, hotel boutique en Puente Iglesias, a 2h de Medellín y 1h del Eje Cafetero; revisión pública de `tahitihotel.co`, habitaciones, experiencias, planes, motor de reserva Cloudbeds, RNT 149361 y WhatsApp de recepción/experiencias.
- Ángulo comercial: no falta web; el dolor es convertir comunidad, deseo visual, habitaciones, villas, planes, experiencias, Cloudbeds y WhatsApp en reservas directas más guiadas y medibles.
- Verificación local: `npm run check` OK con 10 prospectos; `/data/prospects.json` contiene `tahiti-hotel`, 3 imágenes, 4 tiles de diagnóstico y estado personalizado; Chromium DOM móvil contiene título, 76,9 mil seguidores, Cloudbeds, RNT y bot de reservas 24/7.
