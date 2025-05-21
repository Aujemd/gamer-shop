import { Archivo } from "next/font/google";
import localFont from "next/font/local";

export const archivo = Archivo({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-archivo",
    fallback: ["system-ui", "arial"],

});

export const area = localFont({
    src: "../../assets/fonts/area/area.otf",
    display: "swap",
    variable: "--font-area",
    fallback: ["system-ui", "arial"],
});
