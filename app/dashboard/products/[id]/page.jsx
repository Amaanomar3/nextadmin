import Image from "next/image";
import styles from "../../../ui/dashboard/products/viewProduct/viewProduct.module.css";

const ViewProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" fill alt="Avatar" />
          Iphone
        </div>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="">Title</label>
          <input type="text" name="title" placeholder="John Doe" />
          <label htmlFor="">Price</label>
          <input type="number" name="price" placeholder="3000" />
          <label htmlFor="">Stock</label>
          <input type="number" name="stock" placeholder="John Doe" />
          <label htmlFor="">Color</label>
          <input type="text" name="color" placeholder="Red" />
          <label htmlFor="">Size</label>
          <textarea type="number" name="size" placeholder="7" />
          <label htmlFor="">Catagory</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
          </select>
          <label htmlFor="">IsActive</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default ViewProductPage;
