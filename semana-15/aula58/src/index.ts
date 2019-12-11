import { ResidentialClient } from './residentialClient';
import { CommercialClient } from './commercialClient';
import { IndustrialClient } from './industrialClient';

const client1 = new ResidentialClient("Casa","12345678901","32340010","Ranger Vermelho",777,198);
const client2 = new ResidentialClient("Apto","12345678901".split('').reverse().join(''),"32340010","Ranger Preto",778,200);
console.log(client1,client2);

const trade1 = new CommercialClient("Loja Comercial","12345678901234","141010033","Seu João",22,514);
const trade2 = new CommercialClient("Prédio Comercial","12345678901234".split('').reverse().join(''),"141010033","Silvio",23,1000);
console.log(trade1,trade2);

const industry1 = new IndustrialClient("Planta 1","98756412354101","87458654","ACME",9999,5000);
const industry2 = new IndustrialClient("Planta 2","98756412354101".split('').reverse().join(''),"87458654","Black Mesa",10000,9000);
console.log(industry1,industry2);