import styles from "../../../ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="Title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Catagory</option>
          <option value="kitchen">Kitchen</option>
          <option value="kitchen">Phone</option>
          <option value="kitchen">Computer</option>
        </select>
        <input type="number" placeholder="Price" name="price" />
        <input type="number" placeholder="Stock" name="stock" />
        <input type="text" placeholder="Color" name="color" />
        <input type="text" placeholder="Size" name="size" />
        <textarea name="desc" id="desc" rows="16"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
