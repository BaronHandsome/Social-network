import React from 'react';
import styles from './ProfileInfo.module.css'

import img from '../../assets/img.jpeg';

export function ProfileInfo() {
    return (
        <div className={styles.content}>
            <img src={img} className={styles.mainImg} />
            <p className={styles.personDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quos enim minima temporibus consectetur tenetur eligendi. Asperiores, odit consequatur est, consectetur dolore officiis beatae at harum consequuntur itaque illum rerum?
            Eos fugit, veritatis, harum ullam, cum aliquam dolor vero magnam illo commodi quae! Nesciunt praesentium illo consectetur? Obcaecati unde nam eligendi quia possimus delectus, iste sit quisquam quidem officia. Perspiciatis!
            Rerum, sunt laborum nemo odit inventore voluptatem unde esse vero, placeat quasi molestiae debitis nostrum ipsam modi beatae! Repellendus possimus beatae perspiciatis dicta ea consequuntur obcaecati, voluptatibus expedita cum saepe.
            Sequi voluptatibus eum repellat eaque quod explicabo asperiores recusandae cumque aut voluptates quam, vero ea? Porro rerum magni obcaecati repellendus commodi. Eos quibusdam maxime labore quia nulla saepe harum necessitatibus! </p>
            <p className={styles.personDescription}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla fugiat accusamus assumenda sunt quas impedit non minima excepturi, neque totam nesciunt accusantium, et dolor voluptatibus distinctio? Maiores vel laboriosam dolore?At, ratione facere. Asperiores animi tenetur iure fugit sequi autem? Consectetur numquam ex architecto deserunt ullam amet cupiditate ipsam eaque laudantium fugit, dolores dolorum aut facilis tempore eveniet saepe temporibus.</p>


        </div>
    );
};