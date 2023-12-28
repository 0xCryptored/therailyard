import localFont from 'next/font/local'
import { Raleway } from 'next/font/google'


export const titleFont = localFont({
    src: '../styles/static-fonts/Triumph.ttf',
    display: 'swap',
    variable: '--title-font'
})

export const contentFont = localFont({
    src: '../styles/static-fonts/Verve.ttf',
    display: 'swap',
})

export const raleway = Raleway({ 
    subsets: ['latin'], 
    weight: ['500'],
    display: 'swap', 
})