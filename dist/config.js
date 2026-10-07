// Atualize os dados reais da confeitaria aqui.
const WHATSAPP_NUMBER = "5511999999999";
const BRAND = {name:"Maison Sucrée",instagram:"",address:"Endereço a confirmar · São Paulo, SP",hours:"Terça a sábado · 9h às 18h",region:"São Paulo e região — consulte disponibilidade",stats:["+5.000","+10 anos","+300","98%"]};
const FLAVORS = [
{name:"Pistache",filling:"Ganache de pistache & baunilha",color:"#9ba980"},
{name:"Chocolate",filling:"Brigadeiro de chocolate belga",color:"#684331"},
{name:"Ninho",filling:"Creme de leite em pó & baunilha",color:"#f3e1ba"},
{name:"Morango",filling:"Compota de morangos frescos",color:"#c6878d"},
{name:"Doce de leite",filling:"Doce de leite & flor de sal",color:"#bd8850"},
{name:"Red Velvet",filling:"Cream cheese & frutas vermelhas",color:"#994344"},
{name:"Brigadeiro",filling:"Brigadeiro intenso & crocante",color:"#815641"},
{name:"Limão",filling:"Curd de limão & merengue",color:"#d4cf8b"}];
const PRODUCTS = [
{name:"Pistache signature",description:"Massa de baunilha, ganache aveludada e pistaches selecionados.",category:"Bolos",flavors:["Pistache","Baunilha"],price:189,sizes:"15, 20 e 25 cm",image:"assets/collection.jpg",position:"12% 50%"},
{name:"Chocolate belga",description:"Camadas intensas de cacau com brigadeiro belga e acabamento artesanal.",category:"Bolos",flavors:["Chocolate","Brigadeiro"],price:169,sizes:"15, 20 e 25 cm",image:"assets/collection.jpg",position:"42% 50%"},
{name:"Jardim de morangos",description:"Morangos frescos, creme leve e delicadas notas de baunilha.",category:"Bolos",flavors:["Morango","Ninho"],price:179,sizes:"15, 20 e 25 cm",image:"assets/collection.jpg",position:"76% 50%"},
{name:"Ninho no pote",description:"Camadas de bolo macio e creme de leite em pó.",category:"Bolos no pote",flavors:["Ninho","Chocolate"],price:18,sizes:"220 ml",image:"assets/collection.jpg",position:"85% 75%"},
{name:"Brigadeiro de origem",description:"Chocolate selecionado, textura cremosa e finalização delicada.",category:"Brigadeiros",flavors:["Belga","Pistache","Ninho"],price:6,sizes:"25 g · unidade",image:"assets/collection.jpg",position:"100% 75%"},
{name:"Doces do atelier",description:"Pequenas criações com frutas, chocolate e muita delicadeza.",category:"Doces",flavors:["Morango","Doce de leite"],price:8,sizes:"Unidade",image:"assets/collection.jpg",position:"95% 85%"},
{name:"Brownie intenso",description:"Casquinha fina e coração úmido de chocolate.",category:"Brownies",flavors:["Chocolate","Caramelo"],price:15,sizes:"80 g",image:"assets/collection.jpg",position:"45% 75%"},
{name:"Cupcake jardim",description:"Massa de baunilha com cobertura e decoração artesanal.",category:"Cupcakes",flavors:["Baunilha","Red Velvet"],price:14,sizes:"Unidade",image:"assets/collection.jpg",position:"85% 60%"},
{name:"Torta de limão",description:"Base amanteigada, creme cítrico e merengue delicado.",category:"Tortas",flavors:["Limão"],price:119,sizes:"20 cm",image:"assets/collection.jpg",position:"12% 70%"},
{name:"Kit celebração",description:"Um bolo de 15 cm e 20 brigadeiros para compartilhar.",category:"Kits",flavors:["Chocolate","Ninho"],price:249,sizes:"Até 10 pessoas",image:"assets/collection.jpg",position:"50% 50%"},
{name:"Sua criação exclusiva",description:"Um bolo desenhado para a sua história, do sabor à decoração.",category:"Personalizados",flavors:["Todos os sabores"],price:null,sizes:"Sob medida",image:"assets/collection.jpg",position:"75% 50%"}
].map(p=>({...p,message:`Olá! Gostaria de encomendar ${p.name}. Poderiam informar tamanhos, valores e disponibilidade?`}));
