export default class SensenColoring {
    /* Hex Manipulation - Begin */
    static HexToRGB(hex) {
        let r = 0, g = 0, b = 0;
        if (hex.length == 4) {
            r = `0x${hex[1] + hex[1]}`;
            g = `0x${hex[2] + hex[2]}`;
            b = `0x${hex[3] + hex[3]}`;
        }
        else if (hex.length == 7) {
            r = `0x${hex[1] + hex[2]}`;
            g = `0x${hex[3] + hex[4]}`;
            b = `0x${hex[5] + hex[6]}`;
        }
        return [+r, +g, +b];
    }
    static HexToCMYK(hex) {
        let C = 0, M = 0, Y = 0, K = 0;
        hex = (hex.charAt(0) == "#") ? hex.substring(1, 7) : hex;
        if (hex.length != 6) {
            return;
        }
        if (/[0-9a-f]{6}/i.test(hex) != true) {
            return;
        }
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        // BLACK
        if (r == 0 && g == 0 && b == 0) {
            K = 1;
            return [0, 0, 0, 1];
        }
        C = 1 - (r / 255);
        M = 1 - (g / 255);
        Y = 1 - (b / 255);
        var minCMY = Math.min(C, Math.min(M, Y));
        C = (C - minCMY) / (1 - minCMY);
        M = (M - minCMY) / (1 - minCMY);
        Y = (Y - minCMY) / (1 - minCMY);
        K = minCMY;
        return [C, M, Y, K];
    }
    /* Hex Manipulation - End */
    /* RGB Manipulation - Begin */
    static RGBtoHex({ red, green, blue }) {
        return `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;
    }
}
