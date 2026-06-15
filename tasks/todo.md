# Estudio Digital Solvers

## Colombia House Inmobiliaria mini-estudio

- [x] Verificar chat ID y permisos de Valentina.
- [x] Recuperar el prospecto 9 de la lista diaria: `@colombiahouseinmobiliaria`.
- [x] Investigar senales publicas de Instagram, web oficial, Facebook/snippets y catalogo.
- [x] Confirmar que si tiene web activa y enfocar el estudio en mejoras de conversion.
- [x] Descargar assets oficiales a rutas locales para evitar imagenes rotas.
- [x] Agregar prospecto `colombia-house-inmobiliaria` con diagnostico personalizado y bot demo.
- [x] Verificar local, DOM renderizado y assets.
- [x] Publicar directo segun instruccion de Valentina.
- [x] Validar produccion y enviar link final.

### Criterios

- Como si tiene web, no ofrecer web desde cero; proponer mejorar puntos clave: fichas, filtros, CTA conversacional, WhatsApp, propietarios, seguimiento y pauta.
- No mezclar telefonos/dominios sin aclarar fuente; priorizar `colombiahouseinmobiliaria.com.co` por coincidir con Instagram oficial y schema RealEstateAgent.
- Usar logo e inmuebles del catalogo publico como assets locales.

### Revision

- Datos usados: Instagram/snippets publicos de `@colombiahouseinmobiliaria`, web `colombiahouseinmobiliaria.com.co`, Facebook/snippets y catalogo publico.
- Senales verificadas: 1.6K+ seguidores, 45 publicaciones, agenda de asesoria al +573107485989 segun snippet de Instagram, web activa con ventas, alquileres, permutar, servicios, blog, agentes, categorias de inmuebles, ubicacion CRA 6 #25-16 Piso 2 Pereira, movil +573103740080, telefono +576063515128, email `colombiahousecomercial@gmail.com`, ciudades Pereira, Dosquebradas, Santa Rosa de Cabal, Viterbo y Armenia.
- Assets locales oficiales: `/assets/colombia-house-logo.png`, `/assets/colombia-house-inmueble-1.jpg`, `/assets/colombia-house-inmueble-2.jpg`, `/assets/colombia-house-inmueble-3.jpg`.
- Verificacion local: `npm run check` OK con 29 prospectos; HTTP 200 en `/empresa/colombia-house-inmobiliaria`; los 4 assets responden HTTP 200 con tipos correctos; Chromium `--dump-dom` confirma titulo, hook, logo, collage y bot renderizados.
- Publicacion: commit `b2a5dcf` (`Add Colombia House digital study`) pusheado a `main`.
- Produccion verificada: `https://estudios-digitales.solversai.cloud/empresa/colombia-house-inmobiliaria` HTTP 200; JSON publico contiene slug, hook "El inmueble interesa, pero el lead llega sin contexto", bot "Asesor Colombia House demo", logo y 3 imagenes; los 4 assets responden HTTP 200 con tipos correctos; navegador publico desktop/movil confirma sin overflow horizontal, logo y galeria cargados. Se ajusto el encabezado del bot para que nombres largos no se corten en movil.

## Luna Romero Odontologia mini-estudio

- [x] Verificar chat ID y permisos de Valentina.
- [x] Recuperar el prospecto 8 de la lista diaria: `@od.lunaromero`.
- [x] Investigar senales publicas de Instagram/snippets.
- [x] Decidir no inventar logo ni usar imagenes fragiles de Instagram/CDN.
- [x] Agregar prospecto `luna-romero-odontologia` con diagnostico personalizado y bot demo.
- [x] Verificar local, DOM renderizado y assets.
- [x] Publicar directo segun instruccion de Valentina.
- [x] Validar produccion y enviar link final.

### Criterios

- No diagnosticar ni prometer resultados odontologicos por chat.
- No inventar logo ni usar imagenes no oficiales; dejar identidad textual limpia si no hay asset oficial confiable.
- El dolor debe centrarse en filtrar dudas de salud oral/estetica, fotos, expectativas, disponibilidad y WhatsApp antes de la valoracion odontologica.

### Revision

- Datos usados: busqueda publica de Instagram/snippets de `@od.lunaromero`.
- Senales verificadas: DRA LUNA ROMERO | ODONTOLOGIA, odontologia general y estetica, Cucuta Colombia, WhatsApp 316 692 3440, diseno de sonrisa, carillas dentales, agregados en resina, promesa de sonrisa mas armonica/sana/natural, confianza y seguridad del paciente.
- Assets: no se agregan logo ni galeria porque no se encontro fuente oficial estable fuera de Instagram; se evita publicar placeholder de marca.
- Verificacion local: `npm run check` OK con 28 prospectos; HTTP 200 en `/empresa/luna-romero-odontologia`; Chromium `--dump-dom` confirma titulo, hook, marca textual, `no-collage` y bot renderizados.
- Publicacion: commit `89c5e0b` (`Add Luna Romero Odontologia digital study`) pusheado a `main`.
- Produccion verificada: `https://estudios-digitales.solversai.cloud/empresa/luna-romero-odontologia` HTTP 200; JSON publico contiene slug, hook "La sonrisa gusta, pero la duda frena la cita", bot "Asistente Luna Romero demo", `logoImage` vacio y galeria vacia; navegador publico movil/desktop confirma sin overflow horizontal, H1/hook/bot sin corte y `no-collage` activo sin collage visible.

## Medicina Estetica Medellin mini-estudio

- [x] Verificar chat ID y permisos de Valentina.
- [x] Recuperar el prospecto 7 de la lista diaria: `@medicinaesteticamedellin`.
- [x] Investigar senales publicas de Instagram, web oficial, Nosotros y Contacto.
- [x] Descargar assets oficiales a rutas locales para evitar imagenes rotas.
- [x] Agregar prospecto `medicina-estetica-medellin` con diagnostico personalizado y bot demo.
- [x] Verificar local, DOM renderizado y assets.
- [x] Publicar directo segun instruccion de Valentina.
- [x] Validar produccion y enviar link final.

### Criterios

- No prometer resultados medicos ni reemplazar valoracion medica.
- Usar solo logo/fotos oficiales del sitio de Medicina Estetica Medellin.
- El dolor debe centrarse en filtrar responsablemente dudas, motivo de consulta, procedimiento, seguridad, agenda y WhatsApp antes de la valoracion.

### Revision

- Datos usados: Instagram/snippets publicos de `@medicinaesteticamedellin`, web oficial `medicinaesteticamedellin.com`, paginas Nosotros y Contacto.
- Senales verificadas: Dra. Adriana Munera, medicina antienvejecimiento consciente, valoracion medica personalizada, tratamientos faciales/corporales, WhatsApp 3104033514, correo `medicinaesteticamedellin@gmail.com`, direccion Cra 30 #8B-25 Cons. 605 Edificio San Esteban, procedimientos como acido hialuronico, Sculptra, Dermapen, hidrolipoclasia, PDRN, hilos, PRP, exosomas, toxina botulinica, reduccion de peso, alopecia, celulitis y sueroterapia.
- Assets locales oficiales: `/assets/medicina-estetica-medellin-logo.png`, `/assets/medicina-estetica-medellin-hero.jpg`, `/assets/medicina-estetica-medellin-dra-adriana.jpg`, `/assets/medicina-estetica-medellin-valoracion.jpg`, `/assets/medicina-estetica-medellin-procedimiento.png`.
- Verificacion local: `npm run check` OK con 27 prospectos; HTTP 200 en `/empresa/medicina-estetica-medellin`; los 5 assets responden HTTP 200 con tipos correctos; Chromium `--dump-dom` confirma titulo, hook, logo, collage y bot renderizados.
- Publicacion: commit `dff6b5b` (`Add Medicina Estetica Medellin digital study`) pusheado a `main`.
- Produccion verificada: `https://estudios-digitales.solversai.cloud/empresa/medicina-estetica-medellin` HTTP 200; JSON publico contiene slug, hook "Quieren verse mejor, pero llegan con dudas medicas", bot "Asistente Medicina Estetica Medellin demo", logo y 3 imagenes; los 5 assets responden HTTP 200 con tipos correctos; navegador publico desktop 1440x900 confirma sin overflow horizontal, H1/hook/bot sin corte, y galeria cargada con dimensiones reales.

## MELT bakery & cafe mini-estudio

- [x] Verificar chat ID y permisos de Valentina.
- [x] Recuperar el prospecto 6 de la lista diaria: `@somos.melt`.
- [x] Investigar senales publicas de Instagram, web oficial, Linktree y Rappi.
- [x] Descargar assets oficiales a rutas locales para evitar imagenes rotas.
- [x] Agregar prospecto `somos-melt-cartagena` con diagnostico personalizado y bot demo.
- [x] Verificar local, DOM renderizado y assets.
- [x] Publicar directo segun instruccion de Valentina.
- [x] Validar produccion y enviar link final.

### Criterios

- No inventar datos fuera de fuentes publicas verificables.
- Usar solo logo, sedes y productos oficiales del sitio de MELT.
- El dolor debe centrarse en convertir antojo social en pedido claro: producto, sede, Rappi, WhatsApp, domicilio, fidelidad y canal correcto.

### Revision

- Datos usados: Instagram/snippets publicos de `@somos.melt`, web oficial `somosmelt.com`, Linktree publico y Rappi.
- Senales verificadas: MELT bakery & cafe en Cartagena, 92K seguidores, mas de 760 publicaciones, RNT 215489, "Melt to be yours! Tus antojos favoritos", sedes Bocagrande y Centro Comercial Caribe Plaza, menu publico, Rappi, WhatsApp por sede, programa de fidelidad QR y productos como meltos de arequipe/chocolate/pistacho/Dubai, tarta vasca, croissant, helado y temporada.
- Assets locales oficiales: `/assets/somos-melt-logo.png`, `/assets/somos-melt-bocagrande.jpg`, `/assets/somos-melt-caribe-plaza.jpg`, `/assets/somos-melt-melto-arequipe.jpg`, `/assets/somos-melt-melto-chocolate.jpg`, `/assets/somos-melt-melto-pistacho.jpg`.
- Verificacion local: `npm run check` OK con 26 prospectos; HTTP 200 en `/empresa/somos-melt-cartagena`; los 6 assets MELT responden HTTP 200 con tipos correctos; Chromium `--dump-dom` confirma titulo, hook, logo, collage y bot renderizados. El navegador administrado bloqueo `localhost`, asi que la revision visual completa se hara en produccion despues del deploy.
- Publicacion: commit `439d0a0` (`Add Somos Melt digital study`) pusheado a `main`.
- Produccion verificada: `https://estudios-digitales.solversai.cloud/empresa/somos-melt-cartagena` HTTP 200; JSON publico contiene slug, hook "El antojo se derrite si no sabe como pedir", bot "Asistente MELT demo", logo y 3 imagenes; los 6 assets responden HTTP 200 con tipos correctos; navegador publico desktop 1440x900 confirma sin overflow horizontal, H1/hook/bot sin corte, y galeria cargada con dimensiones reales.

## Adriana Castellanos Reposteria mini-estudio

- [x] Verificar chat ID y permisos de Valentina.
- [x] Recuperar el prospecto 5 de la lista diaria: `@adrianacastellanosreposteria`.
- [x] Investigar senales publicas de Instagram, Bio Site, Facebook y snippets.
- [x] Descargar assets oficiales a rutas locales y crear recortes derivados del cover oficial.
- [x] Agregar prospecto `adriana-castellanos-reposteria` con diagnostico personalizado y bot demo.
- [x] Verificar local, DOM renderizado y assets.
- [x] Publicar directo segun instruccion de Valentina.
- [x] Validar produccion y enviar link final.

### Criterios

- No inventar seguidores ni metricas si no hay dato confiable actual.
- Usar solo assets oficiales del Bio Site o recortes derivados de esos assets.
- El dolor debe centrarse en cotizaciones de tortas personalizadas incompletas: fecha, porciones, tematica, referencia, sabor, presupuesto, entrega, cupos y anticipo.

### Revision

- Datos usados: Bio Site publico de Adriana Castellanos Reposteria, Instagram/snippets publicos, Facebook y Threads/snippets.
- Senales verificadas: disenadora de pasteles modernos en buttercream, pedidos por WhatsApp, Colina Campestre Bogota-Colombia, cupos limitados por fecha, WhatsApp 3153813426 en Bio Site, Instagram/Facebook oficiales, cotizacion/agendamiento por WhatsApp, pedidos personalizados y entregas en Bogota segun publicaciones/snippets.
- Assets locales oficiales: `/assets/adriana-castellanos-logo.png`, `/assets/adriana-castellanos-cover.png`; recortes derivados: `/assets/adriana-castellanos-brand-square.jpg`, `/assets/adriana-castellanos-floral-detail.jpg`, `/assets/adriana-castellanos-portrait.jpg`.
- Verificacion local: `npm run check` OK con 25 prospectos; HTTP 200 en `/empresa/adriana-castellanos-reposteria`; 5 assets Adriana responden HTTP 200 con tipos correctos; Chromium `--dump-dom` confirma titulo, hook, logo, hero, collage y bot renderizados.
- Publicacion: commit `b0af228` (`Add Adriana Castellanos digital study`) pusheado a `main`.
- Produccion verificada: `https://estudios-digitales.solversai.cloud/empresa/adriana-castellanos-reposteria` HTTP 200; JSON publico contiene slug, hook "La torta enamora, pero el pedido llega incompleto", bot "Asistente Adriana Castellanos demo", logo y 3 imagenes; los 5 assets responden HTTP 200 con tipos correctos; navegador publico desktop 1440x900 confirma sin overflow horizontal, H1/hook sin corte, bot correcto y galeria cargada con dimensiones reales.

## Loft Concept Barranquilla mini-estudio

- [x] Verificar chat ID y permisos de Valentina.
- [x] Recuperar el prospecto 4 de la lista diaria: `@loft_conceptbq`.
- [x] Investigar senales publicas de Instagram, web oficial y fuentes publicas.
- [x] Descargar assets oficiales a rutas locales para evitar imagenes rotas.
- [x] Agregar prospecto `loft-concept-barranquilla` con diagnostico personalizado y bot demo.
- [x] Verificar local, DOM renderizado y assets.
- [x] Enviar link local a Valentina.
- [x] Publicar solo si Valentina confirma deploy.

### Criterios

- No inventar seguidores ni metricas de Instagram si no aparecen verificadas.
- No inventar logo ni imagenes: usar solo assets oficiales de `loftconcept.com.co`.
- El dolor debe centrarse en cotizaciones premium incompletas: espacio, medidas, estilo, presupuesto, fotos, cita, entrega y WhatsApp con contexto.

### Revision

- Datos usados: lista diaria del cron, Instagram/snippets publicos de `@loft_conceptbq`, web oficial `loftconcept.com.co`, Facebook y TodoServy.
- Web verificada: catalogo/tienda, carrito de cotizacion, solicitud de cita, categorias sofas/sillas/poltronas/mesas/camas/consolas, sede principal Cra 62 #76-170 y showroom Cra 51b #79-118 Barranquilla.
- Assets locales oficiales agregados: `/assets/loft-concept-logo.png`, `/assets/loft-concept-showroom.jpg`, `/assets/loft-concept-sofas.jpg`, `/assets/loft-concept-comedores.jpg`, `/assets/loft-concept-sillas.jpg`.
- Verificacion local: `npm run check` OK con 24 prospectos; HTTP 200 en `/empresa/loft-concept-barranquilla`; JSON publico local contiene hook, bot, logo y hero; 5 assets Loft responden HTTP 200 con tipos correctos; Chromium `--dump-dom` confirma titulo, hook, logo, hero, collage y bot renderizados. Capturas no se guardaron por permisos del snap de Chromium y el navegador administrado bloquea `localhost`.
- Publicacion: Valentina aprobo con "dale". Commit `3a30214` (`Add Loft Concept digital study`) pusheado a `main`.
- Produccion: `https://estudios-digitales.solversai.cloud/empresa/loft-concept-barranquilla` HTTP 200; JSON publico contiene slug, hook, bot, logo y 3 imagenes; los 5 assets Loft responden HTTP 200 con tipos correctos; navegador publico validado en desktop 1440x900 sin overflow horizontal, H1/hook sin corte, bot correcto y galeria cargada con dimensiones reales.

## Maria Bonita Womenswear mini-estudio

- [x] Verificar chat ID y permisos de Valentina.
- [x] Investigar senales publicas de Instagram y ecommerce.
- [x] Agregar prospecto `eres-maria-bonita` con diagnostico personalizado.
- [x] Verificar contenido local, responsive y bot demo.
- [x] Enviar captura a Valentina antes de publicar.
- [x] Publicar con aprobacion de Valentina.

### Criterios

- No decir que les falta web: ya tienen ecommerce, carrito, wishlist, categorias, pagos y WhatsApp.
- No inventar logo: usar solo isotipo/logo oficial verificado desde su web o dejar marca textual.
- El dolor debe centrarse en talla, color, stock, mayoristas, carrito, envio y WhatsApp con contexto.

### Revision

- Datos usados: Instagram publico con 54K seguidores, 1.351 publicaciones, 50 seguidos, mas de 12 anos, fabricantes, Medellin Los Colores, WhatsApp 3104337572, web `eresmariabonita.com` y envios nacionales/internacionales.
- Web verificada: WooCommerce con categorias, carrito, favoritos, filtros por color/precio, guia de tallas, mayoristas, WhatsApp, envios gratis desde COP $300.000 y direccion Calle 54 #77B-66.
- Ajuste de marca: se uso logo horizontal oficial de su web porque el isotipo blanco oficial se perdia sobre fondo claro.
- Verificacion local: `npm run check` OK con 23 prospectos; HTTP 200 en `/empresa/eres-maria-bonita`; CDP movil 393x852 y desktop 1440x900 sin overflow, logo cargado, hook visible, bot con 5 prompts y fuente minima 12px.
- Publicacion: commit `807dc46` (`Add Maria Bonita digital study`) pusheado a `main`.
- Produccion: `https://estudios-digitales.solversai.cloud/empresa/eres-maria-bonita` HTTP 200; JSON publico contiene el slug, hook, bot, logo oficial y badge `54K seguidores`; DOM renderizado contiene titulo, hook, bot y slug. Captura de produccion no se pudo guardar por permisos del snap de Chromium despues de dos intentos.
- Correccion logo: Valentina reporto que en produccion salia imagen rota en el logo. Se bajo el PNG horizontal oficial desde la web de Maria Bonita a `/assets/maria-bonita-logo.png` y se cambio `logoImage` para servirlo desde nuestro dominio.
- Correccion imagenes: Valentina reporto que las tarjetas visuales tambien salian rotas. Se bajaron las tres fotos oficiales a assets locales (`maria-bonita-talla-plus.jpg`, `maria-bonita-rotacion-prendas.jpg`, `maria-bonita-conjuntos-colores.jpg`) y se cambiaron `heroImage`/`galleryImages` para servirlas desde nuestro dominio.

## Casa Antonia ajuste bloque universo

- [x] Verificar chat ID y permisos de Valentina.
- [x] Identificar el bloque recortado en captura.
- [x] Acortar el titulo del bloque universo para Casa Antonia.
- [x] Dar mas aire al bloque claro en la plantilla Texuno.
- [x] Verificar movil/desktop sin texto mordido.
- [x] Publicar solo si Valentina confirma deploy.

### Criterios

- El bloque "Universo de marca" no debe arrancar con texto visualmente mordido.
- El titulo debe leerse completo sin depender de una captura exacta del scroll.
- El ajuste debe mantenerse aislado a Casa Antonia y respiracion general de Texuno.

### Revision

- Causa real: la capa oscura/sticky del hero Texuno quedaba por encima del bloque claro y mordia visualmente el H2.
- Ajuste: `brand-world` en Texuno queda con `position: relative` y `z-index: 4`, mas aire superior y H2 menos alto en desktop.
- Casa Antonia: titulo acortado a "Convertir cada motivo de salida en reserva" y parrafo mas directo.
- Verificacion local: `npm run check` OK; CDP movil 393x852 y ancho 2048x457 sin overflow horizontal y con el H2 por encima de la capa oscura.

## Texuno ajuste banner responsive y lectura

- [x] Verificar chat ID y permisos de Valentina.
- [x] Reproducir el problema del scroll que no deja leer completo el hook.
- [x] Ajustar compuertas para que la apertura no corte textos.
- [x] Mover el diagnostico hacia abajo para que no entre apenas termina la apertura.
- [x] Agregar salida del banner antes de la entrada del diagnostico para evitar capas montadas.
- [x] Eliminar espacio blanco causado por collage oculto en el bloque claro.
- [x] Verificar responsive movil/desktop sin overflow ni capas montadas.
- [ ] Publicar en GitHub/Dokploy y validar produccion.
- [ ] Enviar link actualizado a Valentina.

### Criterios

- El hook debe poder leerse completo antes de que el efecto visual se robe la atencion.
- El banner debe sentirse Solvers, pero no bloquear el contenido ni apurar el scroll.
- En movil, la composicion debe apilarse clara: hook primero, sistema despues.
- Mantener el cambio aislado a `brandMode="texuno"`.

### Revision

- Se ajusto el banner Texuno para que en movil abra por defecto y no dependa del gesto de scroll para poder leer el hook.
- Se compacto el hook, badges y tarjetas del sistema en 393px: banner publico queda dentro del primer pantallazo y sin overflow horizontal.
- Se desacelero la apertura por scroll en desktop para que no se robe la lectura de inmediato.
- Se agrego proteccion responsive al demo del bot: consola, mensajes y formulario ya no empujan ancho en movil.
- Verificacion local: `npm run check` OK, Chrome/CDP movil 393x852 sin overflow y desktop sin solapes.
- Produccion: commit `8092632` (`Fix Texuno hero readability`), Dokploy deployment `zfDPh96_zh_PAZ6HTyUDz` termino `done`.
- URL publica verificada: `https://estudios-digitales.solversai.cloud/empresa/texuno-multimarca?v=8092632`; HTML contiene `openStart`, ajuste movil `min-height: 96px` y boton del bot responsive; JSON mantiene `brandMode: texuno`, `heroImage: ""` y hook correcto.

## Texuno Multimarca mini-estudio + bot

- [x] Investigar señales públicas de Instagram, ecommerce y canales visibles.
- [x] Agregar prospecto `texuno-multimarca` con diagnóstico profundo.
- [x] Crear experiencia de bot demo dentro del mini-estudio para preguntas del cliente.
- [x] Verificar JSON, contenido, responsive y bot localmente.
- [x] Commit/push, desplegar en Dokploy y verificar producción.
- [x] Enviar link limpio y mensaje sugerido a Valentina.

## Review Texuno Multimarca

- Datos usados: Instagram público `@texunomultimarca` con 152K seguidores, 723 publicaciones, 162 seguidos, bio de fabricantes, nuevas prendas todas las semanas y envíos nacionales; revisión pública de `texunomultimarca.com` con ecommerce, búsqueda, favoritos, bolsa, categorías, súper ofertas, top trends, envío gratis desde $200.000, pago seguro, devoluciones hasta 15 días y soporte por WhatsApp.
- Se agregó `texuno-multimarca` a `public/data/prospects.json` con enfoque: ecommerce activo + comunidad grande + catálogo de alta rotación, pero fuga probable en talla, color, disponibilidad, envíos, cambios, mayoristas, carrito, favoritos, WhatsApp y seguimiento.
- Se agregó sección global de bot demo en `public/index.html`, con prompts y respuestas por prospecto. Para Texuno responde sobre carritos, mayoristas, talla/color, WhatsApp, pauta/datos y envíos/cambios.
- Verificación local: `npm run check` OK, HTTP 200, DOM contiene bot, prompts y respuestas; Chrome DevTools local probó pregunta "¿Sirve para mayoristas?" y respondió correctamente.
- Producción final: commits `049dc7d` y `6305fae`, push a `main`, Dokploy deployment `VvCd6XlBB9wYGdSka6bjs` terminó `done`.
- URL pública verificada: `https://estudios-digitales.solversai.cloud/empresa/texuno-multimarca` HTTP 200; JSON público contiene Texuno, 6 respuestas del bot y título `Bot Texuno: preguntas de compra respondidas al instante`; navegador público móvil confirmó sin overflow, bot presente y fuente mínima 12px.

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
- [x] Commit/push y desplegar en Dokploy.
- [x] Verificar producción y enviar link a Valentina.

## Review Tahiti Hotel

- Datos usados: captura enviada el 13 de junio de 2026 con `@tahitihotel`, 345 publicaciones, 76,9 mil seguidores, hotel boutique en Puente Iglesias, a 2h de Medellín y 1h del Eje Cafetero; revisión pública de `tahitihotel.co`, habitaciones, experiencias, planes, motor de reserva Cloudbeds, RNT 149361 y WhatsApp de recepción/experiencias.
- Ángulo comercial: no falta web; el dolor es convertir comunidad, deseo visual, habitaciones, villas, planes, experiencias, Cloudbeds y WhatsApp en reservas directas más guiadas y medibles.
- Verificación local: `npm run check` OK con 10 prospectos; `/data/prospects.json` contiene `tahiti-hotel`, 3 imágenes, 4 tiles de diagnóstico y estado personalizado; Chromium DOM móvil contiene título, 76,9 mil seguidores, Cloudbeds, RNT y bot de reservas 24/7.
- Producción: commit `5dcbfce`, Dokploy deployment `5EEi9abGxvhjN4xrf8SIu` terminó `done`; `https://estudios-digitales.solversai.cloud/empresa/tahiti-hotel?v=5dcbfce` HTTP 200 y JSON público contiene Tahiti con estado y CTA correctos.
- Verificación pública: Chromium DOM móvil confirmó 76,9 mil seguidores, Cloudbeds, RNT 149361 y `Bot de reservas 24/7`.

## Manantiales del Campo mini-estudio
- [x] Analizar captura de Instagram y fuentes públicas.
- [x] Agregar prospecto `manantiales-del-campo` con enfoque hotelero/naturaleza.
- [x] Verificar JSON, contenido local y render DOM móvil/desktop.
- [x] Commit/push y desplegar en Dokploy.
- [x] Verificar producción y enviar link a Valentina.

## Review Manantiales del Campo

- Datos usados: captura enviada el 13 de junio de 2026 con `@hotelmanantialesdelcampo`, 1.434 publicaciones, 183 mil seguidores, RNT 32620, ubicación a 30 minutos de Guatapé y link de reservas `engine.lobbypms.com`; revisión pública de Instagram, Hotels.com, Caoba Hotels y Preferred Card Club.
- Ángulo comercial: no falta visibilidad ni motor de reserva; el dolor es convertir comunidad masiva, naturaleza, suites, spa, celebraciones, eventos y LobbyPMS en reservas directas más guiadas y medibles.
- Verificación local: `npm run check` OK con 11 prospectos; `/data/prospects.json` contiene `manantiales-del-campo`, 3 imágenes, 4 tiles de diagnóstico y 4 pasos de recorrido; Chromium DOM móvil contiene título, 183 mil seguidores, LobbyPMS y bot/reserva guiada 24/7.
- Producción: commit `3d77c5e`, Dokploy deployment `dt4vSriqSh89e2wCaiLLD` terminó `done`; `https://estudios-digitales.solversai.cloud/empresa/manantiales-del-campo?v=3d77c5e` HTTP 200 y JSON público contiene Manantiales con estado, CTA e imágenes correctas.
- Verificación pública: Chromium DOM confirmó Manantiales del Campo, 183 mil seguidores, LobbyPMS, `Reserva guiada 24/7` y `Bot de reservas 24/7`.

## La Casa de Naty mini-estudio
- [x] Analizar captura de Instagram, WhatsApp y fuentes públicas.
- [x] Crear assets de identidad desde la captura enviada.
- [x] Agregar prospecto `la-casa-de-naty` con enfoque moda/diseños propios.
- [x] Verificar JSON, contenido local y render móvil/desktop.
- [x] Commit/push, desplegar en Dokploy y verificar producción.
- [x] Enviar link final a Valentina.

## Review La Casa de Naty

- Datos usados: captura enviada el 13 de junio de 2026 con `@lacasadenaty`, 763 publicaciones, 101 mil seguidores, 7.192 seguidos, bio "Ropa y Vestidos | Diseños Propios", envíos nacionales y enlace `wa.link/suuftg`; búsqueda pública de Instagram con 102K seguidores aproximados y publicaciones sobre vestidos, damas de honor, novia civil, enterizos y diseños versátiles; `wa.link/suuftg` resuelve a WhatsApp Business La Casa De Naty con teléfono `+57 317 558 8572`.
- Se crearon assets desde la captura: `public/assets/la-casa-de-naty-logo.jpg` y `public/assets/la-casa-de-naty-hero.jpg`.
- Se agregó `brandMode: "fashion"` en `public/index.html` con tratamiento visual de atelier/moda, hero editorial, logo circular, sello de diseños propios y responsive específico.
- Se agregó prospecto `la-casa-de-naty` a `public/data/prospects.json` con ángulo: comunidad masiva + diseños propios + venta concentrada en Instagram/enlace/WhatsApp; solución con catálogo inteligente, asesor 24/7, pixel, mapa de calor, recuperación y campañas por ocasión/talla/color.
- Verificación local: `npm run check` OK con 14 prospectos; `/empresa/la-casa-de-naty` HTTP 200; `/data/prospects.json` contiene La Casa de Naty, teléfono, 4 tiles, 4 etapas y 3 imágenes.
- Producción: commit `1aae2b8`, push a `main`, Dokploy deployment `yKUrbq-0gPxB4qssXfHQh` terminó `done`.
- URL pública verificada: `https://estudios-digitales.solversai.cloud/empresa/la-casa-de-naty` HTTP 200; JSON público contiene La Casa de Naty; assets logo/hero HTTP 200; browser público móvil 393px sin overflow horizontal, fuente mínima 12px, 4 etapas y 2 contactos visibles.

## Texuno text clipping
- [x] Reducir y acotar títulos Texuno para evitar cortes laterales en hero y scroll didáctico.
- [x] Acortar el titular del scroll didáctico para que quepa sin perder intención comercial.
- [x] Verificar localmente que no exista overflow horizontal en desktop y móvil antes de desplegar.

## Texuno plan section cleanup
- [x] Retirar el mockup oscuro de la sección `La jugada` en Texuno porque se veía como un bloque vacío/cortado.
- [x] Dejar la sección en una columna clara con estrategia y tarjetas legibles.
- [x] Verificar localmente desktop y móvil sin overflow horizontal.
