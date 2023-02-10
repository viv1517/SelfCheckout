// import { Component } from '@angular/core';
// import { BarcodeFormat } from '@zxing/library';

// @Component({
//   selector: 'app-scanner',
//   templateUrl: './scanner.component.html',
//   styleUrls: ['./scanner.component.scss']
// })
// export class ScannerComponent {
//   availableDevices!: MediaDeviceInfo[];
//   currentDevice: MediaDeviceInfo = null;

//   formatsEnabled: BarcodeFormat[] = [
//     BarcodeFormat.CODE_128,
//     BarcodeFormat.DATA_MATRIX,
//     BarcodeFormat.EAN_13,
//     BarcodeFormat.QR_CODE,
//   ];

//   hasDevices: boolean;
//   hasPermission: boolean;

//   codesRead: string[] = [];

//   constructor() {}

//   onCamerasFound(devices: MediaDeviceInfo[]): void {
//     this.availableDevices = devices;
//     this.hasDevices = Boolean(devices && devices.length);
//   }

//   onCodeResult(resultString: string) {
//     this.codesRead.push(resultString);
//   }

//   onDeviceSelectChange(selected: string) {
//     const device = this.availableDevices.find((x) => x.deviceId === selected);
//     this.currentDevice = device || null;
//   }

//   onHasPermission(has: boolean) {
//     this.hasPermission = has;
//   }
// }
