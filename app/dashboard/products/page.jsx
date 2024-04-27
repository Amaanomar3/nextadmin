import Image from "next/image";
import Link from "next/link";
import styles from "../../ui/dashboard/products/products.module.css";
import Search from "../../ui/dashboard/search/search";
import Pagination from "../../ui/dashboard/pagination/pagination";
import { fetchProducts } from "../../lib/data";

const Products = async (searchParams) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product" />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>
                  <div className={styles.product}>
                    <Image
                      src="/noproduct.jpg"
                      alt="User Image"
                      width={40}
                      height={40}
                      className={styles.productImage}
                    />
                    Iphone 8
                  </div>
                </td>
                <td>Pretty mid phone ngl</td>
                <td>$1500</td>
                <td>12.10.2023</td>
                <td>98</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href="/dashboard/products/test">
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Products;
