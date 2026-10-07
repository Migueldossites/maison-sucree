# Maison Sucrée — Atelier de Confeitaria

Site institucional e catálogo visual responsivo em português. HTML, CSS e JavaScript sem dependências de runtime.

## Executar

`python3 -m http.server 4173 --directory dist`

Abra http://localhost:4173. Para hospedar, publique a pasta `dist` em qualquer hospedagem estática.

## Personalizar

Edite `dist/config.js`: `WHATSAPP_NUMBER` é o único número usado por todos os botões; `BRAND` contém marca, endereço, horário, Instagram e indicadores; `PRODUCTS` reúne nome, imagem, descrição, categoria, sabores, preço, tamanhos e mensagem específica. Substitua `dist/assets/collection.jpg` pelas imagens reais e configure cada produto.

Os preços, produtos, depoimentos, história, indicadores, endereço e horários são demonstrativos. O WhatsApp precisa ser substituído antes de divulgação comercial. A imagem editorial é gerada por IA e ilustrativa; não representa os produtos individuais. Avatares são ilustrativos.

## Funcionalidades

- Bolo com geometria 3D projetada em Canvas, oito divisões, rotação 360° por mouse, toque e teclado.
- Catálogo com nove categorias e mensagens específicas no WhatsApp.
- Menu móvel, filtros, galeria com ampliação, carrossel manual de depoimentos e FAQ.
- Seções de personalizados, ocasiões, história, qualidade e contato.
- Respeita preferência por movimento reduzido; sem carrinho, pagamento, cadastro ou processamento de pedidos.

Fontes do Google Fonts exigem internet, com fallback local. Mapa é ilustrativo até configuração do endereço real. Nenhum dado do visitante é armazenado.
