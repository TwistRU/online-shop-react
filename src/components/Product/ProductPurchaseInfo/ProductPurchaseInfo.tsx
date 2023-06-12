import {ProductCartType, ProductInfo} from "../../../types";
import s from "./ProductPurchaseInfo.module.scss"
import {Button} from "../../ui/Button/Button";
import React from "react";
import {useCartState} from "../../../context/shopping-cart/Context";

interface ProductPurchaseInfoProps {
	productInfo: ProductInfo
}

export const ProductPurchaseInfo = ({productInfo}: ProductPurchaseInfoProps) => {
	const {article, name, brand, price, images } = productInfo;
	const {
		state: { cart },
		addItem,
		removeItem
	} = useCartState();

	const isItemInCart = () => {
		return cart.some((item: any) => item.article === article);
	}

	const handleCartChange = () => {
		const params: ProductCartType = {name, price, article, image: images[0].url};
		isItemInCart() ? removeItem(params) : addItem(params)
	}

	return (
		<div className={"container"}>
			<div className={s.contentContainer}>
				<span>
					{name}
				</span>
				<span>
					{article}
				</span>
				<span>
					Цена: {price.toFixed(2)} /rub
				</span>
				<span className={s.brand}>{brand.name}</span>
				<Button
					onClick={handleCartChange}
					text={isItemInCart() ? 'Удалить' : 'В корзину'}
					className={s.btn}
				/>
			</div>
		</div>
	)
}