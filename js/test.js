const atTheOldToad = {
  potions: [
    { name: "Зелье скорости", price: 460 },
    { name: "Дыхание дракона", price: 780 },
    { name: "Каменная кожа", price: 520 },
  ],
  updatePotionName(oldName, newName) {
    const { potions } = this;

    // potions.forEach((el) => {
    //   if (el.name === oldName) {
    //     el.name = newName;
    //     console.log("ЕСТЬ!!!");
    //     return potions;
    //   }
    // });
    // return `Зелья ${oldName} нет в инвентаре!`;

    for (let i = 0; i < potions.length; i += 1) {
      if (potions[i].name === oldName) {
        potions[i].name = newName;
        return potions;
      }
    }
    return `Зелья ${oldName} нет в инвентаре!`;

    // for (let i = 0; i < potions.length; i += 1) {
    //   if (potions[i].name === oldName) {
    //     potions.splice(i, 1, { name: newName, price: potions[i].price });
    //     return potions;
    //   }
    // }
    // return `Зелья ${oldName} нет в инвентаре!`;
  },
};
console.log(atTheOldToad.updatePotionName("Дыхание дракона", "Полиморф"));
