(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}\n.cdk-overlay-container{position:fixed;z-index:1000}\n.cdk-overlay-container:empty{display:none}\n.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}\n.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}\n.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);opacity:0}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}\n@media screen and (-ms-high-contrast: active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}\n.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}\n.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}\n.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}\n.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n:root {\n  --color-primary-0: #9491a6;\n  /* Main Primary color */\n  --color-primary-1: #636078;\n  --color-primary-2: #514e64;\n  --color-primary-3: #3c3a4a;\n  --color-primary-4: #22212b;\n  --color-secondary-1-0: #886892;\n  /* Main Secondary color (1) */\n  --color-secondary-1-1: #6d5973;\n  --color-secondary-1-2: #5a485f;\n  --color-secondary-1-3: #433546;\n  --color-secondary-1-4: #261e29;\n  --color-secondary-2-0: #54676c;\n  /* Main Secondary color (2) */\n  --color-secondary-2-1: #445559;\n  --color-secondary-2-2: #323f42;\n  --color-secondary-2-3: #1c2426;\n  --color-secondary-2-4: #152024;\n  --growth-color: #65ea4b;\n  --production-color: #ffb42c;\n  --culture-color: #d883ff;\n  --public-works-color: #e4d1b8;\n  --color-secondary-text: #5f5f5f;\n  --color-danger-text: #ff2424;\n}\nbody {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  overflow: hidden;\n}\nh2 {\n  margin-top: 0;\n  text-align: center;\n  font-weight: normal;\n}\nh3 {\n  font-weight: 300;\n  text-align: center;\n  margin: 0;\n  margin-top: 15px;\n}\nh4 {\n  margin: 0;\n  margin-bottom: 10px;\n}\nbutton {\n  border: 0;\n  padding: 5px 15px;\n  cursor: pointer;\n  border-radius: 4px;\n  background-color: var(--color-primary-3);\n  color: white;\n  outline: none;\n}\nbutton:hover {\n  background-color: var(--color-primary-4);\n}\nbutton.btn-primary {\n  padding: 8px 35px;\n  font-size: 18px;\n}\nbutton.btn-danger {\n  background-color: var(--color-danger-text);\n}\nbutton.disabled {\n  color: var(--color-secondary-text);\n  background-color: var(--color-primary-3);\n}\n.small {\n  font-size: 14px;\n}\n.actions {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n}\n.growth-color {\n  color: var(--growth-color);\n}\n.production-color {\n  color: var(--production-color);\n}\n.culture-color {\n  color: var(--culture-color);\n}\n.public-works-color {\n  color: var(--public-works-color);\n}\n.panel {\n  --border-radius: 20px;\n  background-color: var(--color-primary-1);\n  color: white;\n  border-radius: var(--border-radius);\n  overflow: hidden;\n  box-shadow: inset 0 0 30px 0 var(--color-primary-3), 0 0 30px 5px var(--color-primary-4);\n  border-style: solid;\n  border-color: var(--color-primary-0);\n  border-width: 3px;\n  z-index: 1;\n}\n.panel.panel-bottom-right-corner {\n  border-radius: 0 0 var(--border-radius) 0;\n  border-width: 0 3px 3px 0;\n}\n.panel.panel-bottom-left-corner {\n  border-radius: 0 0 0 var(--border-radius);\n  border-width: 0 0 3px 3px;\n}\n.panel.panel-top-right-corner {\n  border-radius: 0 var(--border-radius) 0 0;\n  border-width: 3px 3px 0 0;\n}\n.panel.panel-top-left-corner {\n  border-radius: var(--border-radius) 0 0 0;\n  border-width: 3px 0 0 3px;\n}\n.center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3R1bC9Qcm9qZWN0cy9jaXYvc3JjL3N0eWxlcy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Nkay9vdmVybGF5LXByZWJ1aWx0LmNzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQ0FBLG1EQUFtRCxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO0FBQUMsdUJBQXVCLGNBQWMsQ0FBQyxZQUFZO0FBQUMsNkJBQTZCLFlBQVk7QUFBQyw0QkFBNEIsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFlBQVk7QUFBQyxrQkFBa0IsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsZUFBZTtBQUFDLHNCQUFzQixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDLHlEQUF5RCxDQUFDLFNBQVM7QUFBQyxtREFBbUQsU0FBUztBQUFDLDhDQUE4QyxtREFBbUQsVUFBVSxDQUFDO0FBQUMsMkJBQTJCLDBCQUEwQjtBQUFDLGlHQUFpRyxTQUFTO0FBQUMsNkNBQTZDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLGNBQWM7QUFBQyx3QkFBd0IsY0FBYyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUI7QURJcG9DO0VBQ0UsMEJBQUE7RUFBNEIsdUJBQUE7RUFDNUIsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFFQSw4QkFBQTtFQUFnQyw2QkFBQTtFQUNoQyw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUVBLDhCQUFBO0VBQWdDLDZCQUFBO0VBQ2hDLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBRUEsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFFQSwrQkFBQTtFQUNBLDRCQUFBO0FFRkY7QUZLQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FFRkY7QUZLQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FFRkY7QUZLQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUVGRjtBRktBO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0FFRkY7QUZLQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUVGRjtBRkdFO0VBQ0Usd0NBQUE7QUVESjtBRkdFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FFREo7QUZHRTtFQUNFLDBDQUFBO0FFREo7QUZHRTtFQUVFLGtDQUFBO0VBQ0Esd0NBQUE7QUVGSjtBRk1BO0VBQ0UsZUFBQTtBRUhGO0FGTUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBRUhGO0FGTUE7RUFDRSwwQkFBQTtBRUhGO0FGTUE7RUFDRSw4QkFBQTtBRUhGO0FGTUE7RUFDRSwyQkFBQTtBRUhGO0FGTUE7RUFDRSxnQ0FBQTtBRUhGO0FGTUE7RUFDRSxxQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3RkFBQTtFQUVBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUVKRjtBRktFO0VBQ0UseUNBQUE7RUFDQSx5QkFBQTtBRUhKO0FGS0U7RUFDRSx5Q0FBQTtFQUNBLHlCQUFBO0FFSEo7QUZLRTtFQUNFLHlDQUFBO0VBQ0EseUJBQUE7QUVISjtBRktFO0VBQ0UseUNBQUE7RUFDQSx5QkFBQTtBRUhKO0FGT0E7RUFDRSxrQkFBQTtBRUpGIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCBcIn5AYW5ndWxhci9jZGsvb3ZlcmxheS1wcmVidWlsdC5jc3NcIjtcblxuOnJvb3Qge1xuICAtLWNvbG9yLXByaW1hcnktMDogIzk0OTFhNjsgLyogTWFpbiBQcmltYXJ5IGNvbG9yICovXG4gIC0tY29sb3ItcHJpbWFyeS0xOiAjNjM2MDc4O1xuICAtLWNvbG9yLXByaW1hcnktMjogIzUxNGU2NDtcbiAgLS1jb2xvci1wcmltYXJ5LTM6ICMzYzNhNGE7XG4gIC0tY29sb3ItcHJpbWFyeS00OiAjMjIyMTJiO1xuXG4gIC0tY29sb3Itc2Vjb25kYXJ5LTEtMDogIzg4Njg5MjsgLyogTWFpbiBTZWNvbmRhcnkgY29sb3IgKDEpICovXG4gIC0tY29sb3Itc2Vjb25kYXJ5LTEtMTogIzZkNTk3MztcbiAgLS1jb2xvci1zZWNvbmRhcnktMS0yOiAjNWE0ODVmO1xuICAtLWNvbG9yLXNlY29uZGFyeS0xLTM6ICM0MzM1NDY7XG4gIC0tY29sb3Itc2Vjb25kYXJ5LTEtNDogIzI2MWUyOTtcblxuICAtLWNvbG9yLXNlY29uZGFyeS0yLTA6ICM1NDY3NmM7IC8qIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgyKSAqL1xuICAtLWNvbG9yLXNlY29uZGFyeS0yLTE6ICM0NDU1NTk7XG4gIC0tY29sb3Itc2Vjb25kYXJ5LTItMjogIzMyM2Y0MjtcbiAgLS1jb2xvci1zZWNvbmRhcnktMi0zOiAjMWMyNDI2O1xuICAtLWNvbG9yLXNlY29uZGFyeS0yLTQ6ICMxNTIwMjQ7XG5cbiAgLS1ncm93dGgtY29sb3I6ICM2NWVhNGI7XG4gIC0tcHJvZHVjdGlvbi1jb2xvcjogI2ZmYjQyYztcbiAgLS1jdWx0dXJlLWNvbG9yOiAjZDg4M2ZmO1xuICAtLXB1YmxpYy13b3Jrcy1jb2xvcjogI2U0ZDFiODtcblxuICAtLWNvbG9yLXNlY29uZGFyeS10ZXh0OiAjNWY1ZjVmO1xuICAtLWNvbG9yLWRhbmdlci10ZXh0OiAjZmYyNDI0O1xufVxuXG5ib2R5IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmgyIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5oMyB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5oNCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktMyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS00KTtcbiAgfVxuICAmLmJ0bi1wcmltYXJ5IHtcbiAgICBwYWRkaW5nOiA4cHggMzVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgJi5idG4tZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXItdGV4dCk7XG4gIH1cbiAgJi5kaXNhYmxlZCB7XG4gICAgLy8gdXNpbmcgY2xhc3MgaW5zdGVhZCBvZiBhdHRyaWJ1dGUgdG8gY2F0Y2ggZXZlbnRzIGFuZCBkaXNwbGF5IHRvb2x0aXBzXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTMpO1xuICB9XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ncm93dGgtY29sb3Ige1xuICBjb2xvcjogdmFyKC0tZ3Jvd3RoLWNvbG9yKTtcbn1cblxuLnByb2R1Y3Rpb24tY29sb3Ige1xuICBjb2xvcjogdmFyKC0tcHJvZHVjdGlvbi1jb2xvcik7XG59XG5cbi5jdWx0dXJlLWNvbG9yIHtcbiAgY29sb3I6IHZhcigtLWN1bHR1cmUtY29sb3IpO1xufVxuXG4ucHVibGljLXdvcmtzLWNvbG9yIHtcbiAgY29sb3I6IHZhcigtLXB1YmxpYy13b3Jrcy1jb2xvcik7XG59XG5cbi5wYW5lbCB7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS0xKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDMwcHggMCB2YXIoLS1jb2xvci1wcmltYXJ5LTMpLFxuICAgIDAgMCAzMHB4IDVweCB2YXIoLS1jb2xvci1wcmltYXJ5LTQpO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktMCk7XG4gIGJvcmRlci13aWR0aDogM3B4O1xuICB6LWluZGV4OiAxO1xuICAmLnBhbmVsLWJvdHRvbS1yaWdodC1jb3JuZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1ib3JkZXItcmFkaXVzKSAwO1xuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG4gIH1cbiAgJi5wYW5lbC1ib3R0b20tbGVmdC1jb3JuZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJvcmRlci13aWR0aDogMCAwIDNweCAzcHg7XG4gIH1cbiAgJi5wYW5lbC10b3AtcmlnaHQtY29ybmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAwIHZhcigtLWJvcmRlci1yYWRpdXMpIDAgMDtcbiAgICBib3JkZXItd2lkdGg6IDNweCAzcHggMCAwO1xuICB9XG4gICYucGFuZWwtdG9wLWxlZnQtY29ybmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKSAwIDAgMDtcbiAgICBib3JkZXItd2lkdGg6IDNweCAwIDAgM3B4O1xuICB9XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIuY2RrLW92ZXJsYXktY29udGFpbmVyLC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntwb2ludGVyLWV2ZW50czpub25lO3RvcDowO2xlZnQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1jb250YWluZXI6ZW1wdHl7ZGlzcGxheTpub25lfS5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1wYW5le3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlfS5jZGstb3ZlcmxheS1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjEwMDA7cG9pbnRlci1ldmVudHM6YXV0bzstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjpvcGFjaXR5IDQwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO29wYWNpdHk6MH0uY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjF9QG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpey5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6LjZ9fS5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9we2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMzIpfS5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCwuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjB9LmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3h7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWluLXdpZHRoOjFweDttaW4taGVpZ2h0OjFweH0uY2RrLWdsb2JhbC1zY3JvbGxibG9ja3twb3NpdGlvbjpmaXhlZDt3aWR0aDoxMDAlO292ZXJmbG93LXk6c2Nyb2xsfVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCBcIn5AYW5ndWxhci9jZGsvb3ZlcmxheS1wcmVidWlsdC5jc3NcIjtcbjpyb290IHtcbiAgLS1jb2xvci1wcmltYXJ5LTA6ICM5NDkxYTY7XG4gIC8qIE1haW4gUHJpbWFyeSBjb2xvciAqL1xuICAtLWNvbG9yLXByaW1hcnktMTogIzYzNjA3ODtcbiAgLS1jb2xvci1wcmltYXJ5LTI6ICM1MTRlNjQ7XG4gIC0tY29sb3ItcHJpbWFyeS0zOiAjM2MzYTRhO1xuICAtLWNvbG9yLXByaW1hcnktNDogIzIyMjEyYjtcbiAgLS1jb2xvci1zZWNvbmRhcnktMS0wOiAjODg2ODkyO1xuICAvKiBNYWluIFNlY29uZGFyeSBjb2xvciAoMSkgKi9cbiAgLS1jb2xvci1zZWNvbmRhcnktMS0xOiAjNmQ1OTczO1xuICAtLWNvbG9yLXNlY29uZGFyeS0xLTI6ICM1YTQ4NWY7XG4gIC0tY29sb3Itc2Vjb25kYXJ5LTEtMzogIzQzMzU0NjtcbiAgLS1jb2xvci1zZWNvbmRhcnktMS00OiAjMjYxZTI5O1xuICAtLWNvbG9yLXNlY29uZGFyeS0yLTA6ICM1NDY3NmM7XG4gIC8qIE1haW4gU2Vjb25kYXJ5IGNvbG9yICgyKSAqL1xuICAtLWNvbG9yLXNlY29uZGFyeS0yLTE6ICM0NDU1NTk7XG4gIC0tY29sb3Itc2Vjb25kYXJ5LTItMjogIzMyM2Y0MjtcbiAgLS1jb2xvci1zZWNvbmRhcnktMi0zOiAjMWMyNDI2O1xuICAtLWNvbG9yLXNlY29uZGFyeS0yLTQ6ICMxNTIwMjQ7XG4gIC0tZ3Jvd3RoLWNvbG9yOiAjNjVlYTRiO1xuICAtLXByb2R1Y3Rpb24tY29sb3I6ICNmZmI0MmM7XG4gIC0tY3VsdHVyZS1jb2xvcjogI2Q4ODNmZjtcbiAgLS1wdWJsaWMtd29ya3MtY29sb3I6ICNlNGQxYjg7XG4gIC0tY29sb3Itc2Vjb25kYXJ5LXRleHQ6ICM1ZjVmNWY7XG4gIC0tY29sb3ItZGFuZ2VyLXRleHQ6ICNmZjI0MjQ7XG59XG5cbmJvZHkge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaDIge1xuICBtYXJnaW4tdG9wOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmgzIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbmg0IHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS0zKTtcbiAgY29sb3I6IHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS00KTtcbn1cbmJ1dHRvbi5idG4tcHJpbWFyeSB7XG4gIHBhZGRpbmc6IDhweCAzNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5idXR0b24uYnRuLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlci10ZXh0KTtcbn1cbmJ1dHRvbi5kaXNhYmxlZCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktdGV4dCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktMyk7XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ncm93dGgtY29sb3Ige1xuICBjb2xvcjogdmFyKC0tZ3Jvd3RoLWNvbG9yKTtcbn1cblxuLnByb2R1Y3Rpb24tY29sb3Ige1xuICBjb2xvcjogdmFyKC0tcHJvZHVjdGlvbi1jb2xvcik7XG59XG5cbi5jdWx0dXJlLWNvbG9yIHtcbiAgY29sb3I6IHZhcigtLWN1bHR1cmUtY29sb3IpO1xufVxuXG4ucHVibGljLXdvcmtzLWNvbG9yIHtcbiAgY29sb3I6IHZhcigtLXB1YmxpYy13b3Jrcy1jb2xvcik7XG59XG5cbi5wYW5lbCB7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS0xKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDMwcHggMCB2YXIoLS1jb2xvci1wcmltYXJ5LTMpLCAwIDAgMzBweCA1cHggdmFyKC0tY29sb3ItcHJpbWFyeS00KTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LTApO1xuICBib3JkZXItd2lkdGg6IDNweDtcbiAgei1pbmRleDogMTtcbn1cbi5wYW5lbC5wYW5lbC1ib3R0b20tcmlnaHQtY29ybmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLWJvcmRlci1yYWRpdXMpIDA7XG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG59XG4ucGFuZWwucGFuZWwtYm90dG9tLWxlZnQtY29ybmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlci13aWR0aDogMCAwIDNweCAzcHg7XG59XG4ucGFuZWwucGFuZWwtdG9wLXJpZ2h0LWNvcm5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDAgdmFyKC0tYm9yZGVyLXJhZGl1cykgMCAwO1xuICBib3JkZXItd2lkdGg6IDNweCAzcHggMCAwO1xufVxuLnBhbmVsLnBhbmVsLXRvcC1sZWZ0LWNvcm5lciB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpIDAgMCAwO1xuICBib3JkZXItd2lkdGg6IDNweCAwIDAgM3B4O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tul/Projects/civ/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map