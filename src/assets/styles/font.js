/**
 * 字体定义文件
 *
 * 设备的像素密度，例如：
 * 	PixelRatio.get() === 1          mdpi Android 设备 (160 dpi)
 * 	PixelRatio.get() === 1.5        hdpi Android 设备 (240 dpi)
 * 	PixelRatio.get() === 2          iPhone 4, 4S,iPhone 5, 5c, 5s,iPhone 6/7/8,xhdpi Android 设备 (320 dpi)
 * 	PixelRatio.get() === 3          iPhone 6/7/8 plus , xxhdpi Android 设备 (480 dpi)
 * 	PixelRatio.get() === 3.5        Nexus 6
 */

import {
	Dimensions,
	PixelRatio,
	Platform
} from 'react-native';

import layout from './layout';

let pixelRatio = PixelRatio.get(); // 当前设备的像素密度
let fontScale = PixelRatio.getFontScale(); // 字体大小缩放比例

const defaultPixel = 2; // iphone678的像素密度

// px转成dp
const w2 = 750 / defaultPixel;
const h2 = 1334 / defaultPixel;
const scale = Math.min(layout.deviceHeight / h2, layout.deviceWidth / w2); // 获取缩放比例

// 获取比例缩放字体大小
const fontSize = size => Math.round((size * scale + 0.5)) * pixelRatio / fontScale / defaultPixel;

// 获取比例缩放尺寸
const scaleSize = size => Math.round(size * scale + 0.5) / defaultPixel;

let base = fontSize(14),
	fontInterval = 0.15;
base = base < 11 ? 11 : base;
base = base > 16 ? 16 : base;

let fonts = {
	base: base,
	small: base * 0.8,
	h5: base,
	fontSize: fontSize,
	scaleSize: scaleSize
};

for (let i = 1; i < 10; i++) {
	fonts[`h${i}`] = base + base * (( 5 - i ) * fontInterval);
}

export default fonts;