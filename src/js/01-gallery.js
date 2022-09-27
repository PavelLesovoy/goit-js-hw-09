import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryList = document.querySelector(".gallery");

const galleryLinks = galleryItems.map(({ preview, original, description}) => {
    return `<a class = "gallery__item" href = "${original}">
    <img class = "gallery__image" src = "${preview}" alt = "${description}"/>
    </a>`;
})
.join(" ");

galleryList.insertAdjacentHTML("beforeend", galleryLinks);

let galleryLightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDeley: 250,
});
