import { NearestFilter, TextureLoader, RepeatWrapping } from 'three';

import {
    dirtImg,
    grassImg,
    glassImg,
    woodImg,
    logImg,
    stoneImg
} from './images';

const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const stoneTexture = new TextureLoader().load(stoneImg);
const groundTexture = new TextureLoader().load(grassImg);

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
stoneTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;


export {
    dirtTexture,
    logTexture,
    grassTexture,
    glassTexture,
    woodTexture,
    stoneTexture,
    groundTexture,

};