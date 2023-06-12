import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import {Footer} from "../components/Footer/Footer";
import {CatalogPage} from "../pages/CatalogPage/CatalogPage";
import {ProductPage} from "../pages/ProductPage/ProductPage";
import {CatalogProductCard} from "../components/Catalog/ProductCard/CatalogProductCard";
import App from "../App";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews/>
            </ComponentPreview>
            <ComponentPreview path="/Footer">
                <Footer/>
            </ComponentPreview>
            <ComponentPreview path="/CatalogPage">
                <CatalogPage/>
            </ComponentPreview>
            <ComponentPreview path="/ProductPage/1">
                <ProductPage/>
            </ComponentPreview>
            <ComponentPreview path="/CatalogProductCard">
                <CatalogProductCard article={"Preview"} brand={"1"} id={1} img={"1"} price={1} title={"preview"}/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;