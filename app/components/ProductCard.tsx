import React from 'react';
import AddToCart from './AddToCart';
import styles from './ProductCard.module.css';

function ProductCard() {
	return (
		<div className={styles.card}>
			<h1>ProductCard</h1>
			<AddToCart />
		</div>
	);
}

export default ProductCard;
