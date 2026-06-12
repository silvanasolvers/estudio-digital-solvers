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

## Review

- `npm run check` valida marcadores de plantilla y 3 demos.
- HTTP local verificado en `/empresa/la-casa-del-sabor`, `/empresa/ferreteria-la-70?edit=1` y `/data/prospects.json`.
- Chromium headless generó capturas desktop 1440x950 y móvil 390x844 sin pantalla en blanco ni quiebre visible en hero.
- Tulia Boots: se verificó `https://tuliaboots.com`, presencia Shopify, WhatsApp visible y ausencia de agente conversacional visible; se desplegó `/empresa/tulia-boots` en Dokploy con HTTP 200 y DOM personalizado.
- Tulia Boots: se agregaron fallas visibles de página, medición con mapa de calor y entregable de panel de oportunidades. Verificación local: `npm run check` OK, `/data/prospects.json` expone `siteIssues`, `heatmapData` y el entregable de mapa de calor.
- Se agregaron contactos de cierre: Valentina como frente comercial/cliente y Valentin como estrategia/arquitectura Solvers, ambos con enlace directo de WhatsApp.
- Deploy de contactos verificado: `/empresa/tulia-boots` HTTP 200, HTML público contiene ambos contactos, OpenClaw browser móvil confirmó 2 `.contact-card`, links de WhatsApp y sin overflow horizontal.
