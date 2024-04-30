import Image from "next/image";
import styles from "../../../ui/dashboard/products/viewProduct/viewProduct.module.css";
import { fetchProduct } from "../../../lib/data";
import { updateProduct } from "../../../lib/actions";

const ViewProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" fill alt="Avatar" />
          {product.title}
        </div>
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label htmlFor="">Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label htmlFor="">Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label htmlFor="">Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label htmlFor="">Color</label>
          <input type="text" name="color" placeholder={product.color} />
          <label htmlFor="">Size</label>
          <input type="number" name="size" placeholder={product.size} />
          <label htmlFor="">Catagory</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
          </select>
          <label htmlFor="">Description</label>
          <textarea
            name="desc"
            id=""
            cols="30"
            rows="10"
            placeholder={product.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default ViewProductPage;
