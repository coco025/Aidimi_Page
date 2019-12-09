import QrScanner from "./qr-scanner.min.js";

QrScanner.WORKER_PATH = './qr-scanner-worker.min.js';

const video = document.getElementById('qr-video');
const camHasCamera = document.getElementById('cam-has-camera');
const camQrResult = document.getElementById('cam-qr-result');

function setResult(label, result) {
	label.textContent = result;
	label.style.color = 'teal';
	clearTimeout(label.highlightTimeout);
	label.highlightTimeout = setTimeout(() => label.style.color = 'inherit', 100);
}
// ####### Web Cam Scanning #######
QrScanner.hasCamera().then(hasCamera => camHasCamera.textContent = hasCamera);
const scanner = new QrScanner(video, result => setResult(camQrResult, result));
scanner.start();

document.getElementById('inversion-mode-select').addEventListener('change', event => {
	scanner.setInversionMode(event.target.value);
});