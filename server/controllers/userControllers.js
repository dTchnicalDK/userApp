import { User } from "../models/userModels.js";

//writing function to save data from request.body; if not then send response "kindly fill data"
export const createUser = async (req, res) => {
  try {
    const userData = new User(req.body);
    if (!userData) {
      return res.status(404).json({ msg: "kindly fill all required data" });
    }
    const savedData = await userData.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//------------------------------controller to edit user data--------------
export const getAll = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      res.status(404).json({ msg: "no data found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(`getAll user Erro:-- ${error}`);
  }
};

//----------------controller for editing exiting users------------------------------
export const findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const exitUser = await User.findById(id);
    if (!exitUser) {
      return res.status(404).json({ msg: "no user found" });
    }
    res.status(200).json(exitUser);
  } catch (error) {
    res.status(500).json({ msg: "find one error", error: error });
  }
};

//--------------Edit user---------------------------------------
export const editUser = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(401).json({ msg: "user not found or updated" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(`edit user error:-- ${error}`);
    console.log(error);
  }
};

//-----------------delete user--------------
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExists = await User.findById(id);
    if (!userExists) {
      return res.status(404).json({ msg: "user does not exitsts" });
    }
    // const deletedUser = await User.findByIdAndDelete(id);
    const deletedUser = await User.deleteOne(userExists);

    res.status(200).json(`deleted user:-- ${deletedUser}`);
  } catch (error) {
    res.status(500).json(`delete user error:-${error}`);
  }
};
