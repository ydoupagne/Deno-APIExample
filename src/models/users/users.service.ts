import { DATA_TYPES, Model } from 'https://deno.land/x/denodb/mod.ts';

import { db } from "../../../middlewares/database.ts";
import * as UserInterface from "./users.interface.ts"

class User extends Model {
  static table = 'users';
  static timestamps = true;

  static fields = {
    id: {
      primaryKey: true,
      autoIncrement: true
    },
    username: DATA_TYPES.STRING,
    password: DATA_TYPES.STRING,
    email: DATA_TYPES.STRING,
    phone: DATA_TYPES.INTEGER,
    premium: DATA_TYPES.BOOLEAN
  }

  static defaults = {
    premium: false
  }
}

db.link([User]);

const getById = async (id: number) => {
  /**
   * SQL Response
   * 
   */
  let select: any = await User.select('id', 'username', 'email').find(id);

  /**
   * SQL Response
   * 
   */
  let unknow: any = await User.select('id', 'username', 'email').find(990);

  console.log(select);
  console.log(unknow);
  return select;
}

const create = async (user: UserInterface.IUserRegister) => {
  /**
   * SQL Response
   * { affectedRows: 1, lastInsertId: 1 }
   */
  let create: any = await User.create({
    username: user.username,
    password: user.password,
    email: user.email,
    phone: user.phone,
    premium: true
  });

  return {
    success: create.affectedRows == 1 ? true : false,
    id: create.lastInsertId
  }
}

export { getById, create }