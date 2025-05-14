
export function isMobile():boolean {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    if (typeof navigator !== 'undefined') return regex.test(navigator.userAgent);
    return false
}