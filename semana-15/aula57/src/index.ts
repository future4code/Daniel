import { Dish } from "./dish/dish";
import { Dessert } from './dish/dessert';
import { Chef } from "./employee/chef";

export const menu: Dish[] = [];
const brigadeiro = new Dessert("Brigadeiro",50, 14, ["leite"], 15, 1);
const chef = new Chef("Jaquin", 20000);
chef.addDishToMenu(brigadeiro);
chef.removeDishFromMenu("Brigadeiro");
console.log(menu);

