import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#2C3E50',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './logomate2.png',
    fullDecal: './logomate2.png'
});

export default state;