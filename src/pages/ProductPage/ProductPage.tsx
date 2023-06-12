import {Header} from "../../components/Header/Header";
import s from './ProductPage.module.scss'
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {Footer} from "../../components/Footer/Footer";
import {getData} from "../../requets";
import {Gallery} from "../../components/Product/Gallery/Gallery";
import {ProductPurchaseInfo} from "../../components/Product/ProductPurchaseInfo/ProductPurchaseInfo";
import {ProductInfo} from "../../types";


export const ProductPage = ():JSX.Element => {

	const [productInfo, setProductInfo] = useState<ProductInfo>();

	const { id= "1" } = useParams();

	useEffect(() => {
		getData("Products/"+id.toString()).then(response => setProductInfo(response))
	}, [])
	if (productInfo === undefined){
		return <div>NOT FOUND</div>
	}

	return (
		<div>
			<Header styled />
			<main className={'container'}>
				<div className={s.contentContainer}>
					<div className={s.topContainer}>
						<Gallery images={productInfo.images}/>
						<ProductPurchaseInfo productInfo={productInfo}/>
					</div>
					<div>
						{productInfo.description}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}