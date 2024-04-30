"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    connectToDB();
    const user = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await user.save();
  } catch (error) {
    console.error("Error adding user: ", error);
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  console.log("this is the form data", formData);
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    console.log("this is the user id", id);
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.error("Error updating user: ", error);
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateProduct = async (formData) => {
  console.log("this is the form data", formData);
  const { id, title, price, color, size, desc, category, image, stock } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      title,
      price,
      color,
      size,
      desc,
      category,
      image,
      stock,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.error("Error updating user: ", error);
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const addProducts = async (formData) => {
  const { title, price, desc, category, image, stock } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const product = new Product({ title, price, desc, category, image, stock });
    await product.save();
  } catch (error) {
    console.error("Error adding product: ", error);
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.error("Error deleting user: ", error);
  }

  revalidatePath("/dashboard/users");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.error("Error deleting product: ", error);
  }

  revalidatePath("/dashboard/products");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  console.log("this is the form data", formData);
  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    return error.message;
  }
};
