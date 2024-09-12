import React from 'react'
import styles from "./Items.module.css"
function Items() {
  return (
    <>
    <div className="side-padding my-[40px] py-6 pb-2">
        <h1 className="head_text text-center">Items That Can Be Shipped</h1>
        <div className={`${styles.grid_items}`}>
            <div className={`flex gap-2 items-center ${styles.grid_container}`}>
                <img src="/images/cloth.jpg" alt="" className={`${styles.grid_image}`} />
                <span className='text-[18px] font-bold'>Cloths</span>
            </div>
            <div className={`flex gap-2 items-center ${styles.grid_container}`}>
                <img src="/images/electronics.jpg" alt="" className={`${styles.grid_image}`} />
                <span className='text-[18px] font-bold'>Electronics</span>
            </div>
            <div className={`flex gap-2 items-center ${styles.grid_container}`}>
                <img src="/images/house.jpg" alt="" className={`${styles.grid_image}`} />
                <span className='text-[18px] font-bold'>House Old Goods</span>
            </div>
            <div className={`flex gap-2 items-center ${styles.grid_container}`}>
                <img src="/images/food.jpg" alt="" className={`${styles.grid_image}`} />
                <span className='text-[18px] font-bold'>Food Items</span>
            </div>
            <div className={`flex gap-2 items-center ${styles.grid_container}`}>
                <img src="/images/costmetic.jpg" alt="" className={`${styles.grid_image}`} />
                <span className='text-[18px] font-bold'>Cusmetics</span>
            </div>
            <div className={`flex gap-2 items-center ${styles.grid_container}`}>
                <img src="/images/general.jpg" alt="" className={`${styles.grid_image}`} />
                <span className='text-[18px] font-bold'>General Item etc</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Items