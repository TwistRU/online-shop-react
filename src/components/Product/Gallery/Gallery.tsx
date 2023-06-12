import {ImageType} from "../../../types";
import s from './Gallery.module.scss'
interface GalleryProps {
	images: ImageType[]
}

export const Gallery = ({images}: GalleryProps) => {
	return (
		<section className={s.gallery}>
			{images.map((value, index, array)=>{
				return (
					<div className={s.gallery__item}>
						<input className={s.gallery__selector} type={"radio"} id={value.id.toString()} name={"gallery"}/>
						<img className={s.gallery__img} src={value.url} alt={""}/>
						<label htmlFor={value.id.toString()} className={s.gallery__thumb}>
							<img className={s.gallery__img_thumb} src={value.url} alt={""}/>
						</label>
					</div>
				)
			})}
		</section>
	)
}