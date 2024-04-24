import Image from "next/image";
import styles from "../../../ui/dashboard/users/viewUser/viewUser.module.css";

const ViewUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" fill alt="Avatar" />
          John Doe
        </div>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="">Username</label>
          <input type="text" name="username" placeholder="John Doe" />
          <label htmlFor="">Email</label>
          <input type="text" name="email" placeholder="JohnDoe@gmail.com" />
          <label htmlFor="">Password</label>
          <input type="text" name="password" placeholder="John Doe" />
          <label htmlFor="">Phone</label>
          <input type="text" name="phone" placeholder="+27 81 923 0910" />
          <label htmlFor="">Address</label>
          <textarea type="text" name="address" placeholder="Cape Town" />
          <label htmlFor="">Is Admin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
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

export default ViewUserPage;
