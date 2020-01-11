
interface FsDocument extends HTMLDocument {
    mozFullScreenElement?: Element;
    msFullscreenElement?: Element;
    webkitFullscreenElement?: Element;
    webkitExitFullscreen?: ()=> void;
    msExitFullscreen?: () => void;
    mozCancelFullScreen?: () => void;
}

interface FsElement extends HTMLElement {
    msRequestFullscreen?: () => void;
    mozRequestFullScreen?: () => void;
    webkitRequestFullScreen?: () => void;
}

export function isFullScreen(): boolean {
    const fsDoc = document as FsDocument
    return !!(fsDoc.fullscreenElement || fsDoc.mozFullScreenElement || 
        fsDoc.webkitFullscreenElement || fsDoc.msFullscreenElement);
}

export function toggleFullScreen (): void {
    const fsDoc = document as FsDocument
    const element = document.documentElement as FsElement
    if (!isFullScreen()) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
            } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
            } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
            } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    } 
    else if (fsDoc.exitFullscreen) {
        fsDoc.exitFullscreen();
    }
    else if (fsDoc.msExitFullscreen) {
        fsDoc.msExitFullscreen();
    }
    else if (fsDoc.mozCancelFullScreen) {
        fsDoc.mozCancelFullScreen();
    }
    else if (fsDoc.webkitExitFullscreen){
        fsDoc.webkitExitFullscreen();
    }
}
export function setFullScreen (full: boolean): void {
    if (full !== isFullScreen()) {
        toggleFullScreen()
    }
}