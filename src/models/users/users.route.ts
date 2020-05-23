import * as UserService from "./users.service.ts"
import * as UserInterface from "./users.interface.ts"

// Get a user details
const getUser = async (ctx: any) => {
  try {
    let user = await UserService.getById(12);

    // Send back the retreive user
    ctx.response.body = user
  } catch (err){
    throw err
  }
}

// Create a user
const createUser = async (ctx: any) => {
  try {
    // Fill the user form from ctx.reqbody
    let user: UserInterface.IUserRegister = {
      email: 'test@email.com',
      password: 'password@',
      phone: 0o0475750000,
      username: 'username@'
    }

    // Attempt to create the user
    let create = await UserService.create(user);

    if (create.success) {
      console.log("Create as been successful! " + create.id);
      ctx.response.status = 200
      ctx.response.type = "application/json"
      ctx.response.body = create
    } else {
      ctx.response.body = "The user wasn't create... try again later";
    }

    console.log(ctx);
  } catch (err) {
    throw err
  }
}

export { getUser, createUser }