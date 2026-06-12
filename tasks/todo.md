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
- [ ] Desplegar y verificar producción.

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
