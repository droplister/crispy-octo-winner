import { v4 } from 'uuid';

export default class ItemModel {
  constructor(x, y, bitcoin, spawnerId, name, frame, attackValue, defenseValue, healthValue) {
    this.id = `${spawnerId}-${v4()}`;
    this.spawnerId = spawnerId;
    this.x = x;
    this.y = y;
    this.name = name;
    this.frame = frame;
    this.attackBonus = attackValue;
    this.defenseBonus = defenseValue;
    this.healthBonus = healthValue;
  }
}
