import { Noto_Sans, Comfortaa, Mulish } from "next/font/google";
import localFont from "next/font/local";

export const proximaNovaSemibold = localFont({
    src: [
        { path: '../public/fonts/ProximaNova-Semibold.otf', weight: '500', style: 'normal' }
    ],
    variable: '--font-proxima-nova-semibold',
    display: 'swap'
});

export const proximaNovaMedium = localFont({
    src: [
        { path: '../public/fonts/ProximaNova-Medium.otf', weight: '500', style: 'normal' }
    ],
    variable: '--font-proxima-nova-medium',
    display: 'swap'
    
});

export const proximaNovaRegular = localFont({
    src: [
        { path: '../public/fonts/ProximaNova-Regular.otf', weight: '400', style: 'normal' }
    ],
    variable: '--font-proxima-nova-regular',
    display: 'swap'
});

export const proximaNovaLight = localFont({
    src: [
        { path: '../public/fonts/ProximaNova-Light.otf', weight: '300', style: 'normal' }
    ],
    variable: '--font-proxima-nova-light',
    display: 'swap'
});

export const proximaNovaThin = localFont({
    src: [
        { path: '../public/fonts/ProximaNova-Thin.otf', weight: '200', style: 'normal' }
    ],
    variable: '--font-proxima-nova-thin',
    display: 'swap'
});


export const notoSans = Noto_Sans({ 
    subsets: ["latin"] ,
    display: 'swap'
});

export const comfortaa = Comfortaa({ 
    subsets: ["latin"]  ,
    display: 'swap'
});

export const mulish = Mulish({ 
    subsets: ["latin"],
    display: 'swap'
});