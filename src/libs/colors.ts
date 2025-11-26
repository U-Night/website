export function getLuminance(color: string): number {
  // Suppression du "#" si présent
  color = color.replace("#", "");

  // Conversion hex -> RGB
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  // Calcul de la luminance perçue
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance;
}

/**
 * Renvoie si oui ou non l'oeil perçoit la couleur donnée comme une couleur sombre
 * cf. W3C @ https://www.w3.org/WAI/GL/wiki/Relative_luminance
 * @param bgColor La couleur de fond
 * @returns la couleur du texte pour qu'il soit lisible sur le fond donné
*/
export function isDarkColor(color: string): boolean {
  return getLuminance(color) < 0.5
}

/**
 * Renvoie la couleur de premier plan (couleur de texte) qui devrait être appliquée sur une couleur de fond donnée
 * cf. W3C @ https://www.w3.org/WAI/GL/wiki/Relative_luminance
 * @param bgColor La couleur de fond
 * @returns la couleur du texte pour qu'il soit lisible sur le fond donné
*/
export function getTextColor(bgColor: string): string {
  // Si la couleur est "claire", on met du noir, sinon du blanc
  return isDarkColor(bgColor) ? "#FFFFFF" :  "#000000";
}

/**
 * Renvoie une couleur assombrie ou éclaircie de la couleur passée en paramètre par percent %
 * @param color La couleur à assombrir/éclaircir
 * @param percent Le pourcentage d'assombrissement/éclaircicement (percent < 0 => assombrissement; percent > 0 => eclaircicement) NB shadeColor(shadeColor(x, y), -y) = x
 * @returns La couleur assombrie/éclaircie
 */
export function shadeColor(color: string, percent: number): string {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;

  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 0 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
}
