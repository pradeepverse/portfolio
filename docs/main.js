(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/academic-details/academic-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/academic-details/academic-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n    padding: 10px 0;\r\n    background: #0b85cc;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.experience{\r\n    display: flex;\r\n    padding: 15px;\r\n    color: #ececec;\r\n}\r\n\r\n.line{\r\n    width: 25px;\r\n    height: 100%;\r\n    background: #05446a;\r\n    border-radius: 15px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 10px 0;\r\n}\r\n\r\n.circle{\r\n    cursor: pointer;\r\n    width: 13px;\r\n    height: 13px;\r\n    background: #ffffff;\r\n    border-radius: 10px;\r\n    border: 2px solid #00a0ff;\r\n}\r\n\r\n.content{\r\n    padding: 10px 0 0 30px;\r\n}\r\n\r\n.title{\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n}\r\n\r\n.period{\r\n    font-size: 20px;\r\n}\r\n\r\n.description{\r\n    font-size: 18px;\r\n    line-height: 25px;\r\n}\r\n\r\n.anchor-style{\r\n    color: white;\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n}"

/***/ }),

/***/ "./src/app/academic-details/academic-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/academic-details/academic-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"experience\">\n    <div class=\"graphic\">\n      <div class=\"line\">\n        <div class=\"circle\" title=\"May 2015\">\n\n        </div>\n        <div class=\"circle\" title=\"July 2011\">\n\n        </div>\n      </div>\n    </div>\n    <div class=\"content\">\n      <div class=\"title\">Bachelor of Engineering - Electrical and Electronics</div>\n      <div class=\"period\">\n        <fa-icon [icon]=\"faCalendar\"></fa-icon> July 2011 - May 2015\n      </div> <br>\n      <div class=\"description\">\n        Graduated at Mepco Schlenk Engineering College, Sivakasi (Affliated to Anna University, Chennai) with <b>CGPA 8 out of 10</b>. <br>\n        During my college days, I was acting as a Training and Placement Representative for my Department and involved in various recruitment related activities with college's placement cell and companies. <br>\n        Our final year project - <a class=\"anchor-style\" href=\"https://www.youtube.com/watch?v=QQOn-M5dcEY\">Intelligent Freight System</a> has selected for the Best Project nomination.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"experience\">\n    <div class=\"graphic\">\n      <div class=\"line\">\n        <div class=\"circle\" title=\"March 2011\">\n\n        </div>\n        <div class=\"circle\" title=\"June 2010\">\n\n        </div>\n      </div>\n    </div>\n    <div class=\"content\">\n      <div class=\"title\">Higher Secondary Education - 12th Grade</div>\n      <div class=\"period\">\n        <fa-icon [icon]=\"faCalendar\"></fa-icon> June 2010 - March 2011\n      </div> <br>\n      <div class=\"description\">\n        Completed schooling at Sri Vidya Mandir Matriculation Higher Secondary School, Uthangarai - with <b>94.3%</b>.\n      </div>\n    </div>\n  </div>\n\n\n</section>"

/***/ }),

/***/ "./src/app/academic-details/academic-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/academic-details/academic-details.component.ts ***!
  \****************************************************************/
/*! exports provided: AcademicDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicDetailsComponent", function() { return AcademicDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AcademicDetailsComponent = /** @class */ (function () {
    function AcademicDetailsComponent() {
        this.faCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCalendarAlt"];
    }
    AcademicDetailsComponent.prototype.ngOnInit = function () {
    };
    AcademicDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'academic-details',
            template: __webpack_require__(/*! ./academic-details.component.html */ "./src/app/academic-details/academic-details.component.html"),
            styles: [__webpack_require__(/*! ./academic-details.component.css */ "./src/app/academic-details/academic-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AcademicDetailsComponent);
    return AcademicDetailsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<personal-info></personal-info>\n<professional-exp id=\"professional-exp\"></professional-exp>\n<academic-details id=\"academic-details\"></academic-details>\n<skills id=\"my-skills\"></skills>\n<projects id=\"personal-projects\"></projects>\n<social id=\"social-profile\"></social>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./personal-info/personal-info.component */ "./src/app/personal-info/personal-info.component.ts");
/* harmony import */ var _professional_exp_professional_exp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./professional-exp/professional-exp.component */ "./src/app/professional-exp/professional-exp.component.ts");
/* harmony import */ var _academic_details_academic_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./academic-details/academic-details.component */ "./src/app/academic-details/academic-details.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./social/social.component */ "./src/app/social/social.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_7__["PersonalInfoComponent"],
                _professional_exp_professional_exp_component__WEBPACK_IMPORTED_MODULE_8__["ProfessionalExpComponent"],
                _academic_details_academic_details_component__WEBPACK_IMPORTED_MODULE_9__["AcademicDetailsComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"],
                _social_social_component__WEBPACK_IMPORTED_MODULE_12__["SocialComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/personal-info/personal-info.component.css":
/*!***********************************************************!*\
  !*** ./src/app/personal-info/personal-info.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n    background: #e64f09;\r\n    min-height: 100vh;\r\n}\r\n\r\n.row-1{\r\n    display: flex;\r\n    justify-content: center;\r\n    height: 70vh;\r\n}\r\n\r\n.image-container{\r\n    height: 100%;\r\n}\r\n\r\n.down-arrow{\r\n    -webkit-animation-name: toandfro;\r\n            animation-name: toandfro;\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n}\r\n\r\n@-webkit-keyframes toandfro{\r\n    from{\r\n        -webkit-transform: translate3d(0, 0, 0);\r\n                transform: translate3d(0, 0, 0);\r\n    }\r\n    to{\r\n        -webkit-transform: translate3d(0, 15px, 0);\r\n                transform: translate3d(0, 15px, 0);\r\n    }\r\n}\r\n\r\n@keyframes toandfro{\r\n    from{\r\n        -webkit-transform: translate3d(0, 0, 0);\r\n                transform: translate3d(0, 0, 0);\r\n    }\r\n    to{\r\n        -webkit-transform: translate3d(0, 15px, 0);\r\n                transform: translate3d(0, 15px, 0);\r\n    }\r\n}\r\n\r\n.image-container img{\r\n    height: 80%;\r\n    padding: 8px;\r\n    background: #ffffff;\r\n    -webkit-transform: rotate(2deg);\r\n            transform: rotate(2deg);\r\n     margin: 30px 42px; \r\n    box-shadow: rgba(0,0,0,0.25) 8px 8px 25px 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.details{\r\n    padding-top: 10vh;\r\n    margin: auto 0;\r\n}\r\n\r\n.name{\r\n    padding: 12px 32px;\r\n    background: white;\r\n    border-radius: 60px;\r\n    font-size: 55px;\r\n    font-weight: bolder;\r\n    color: #e64e08;\r\n    display: inline-block;\r\n}\r\n\r\n.skill{\r\n    padding: 12px 16px;\r\n    background: white;\r\n    border-radius: 60px;\r\n    font-size: 26px;\r\n    color: #e64e08;\r\n    margin: 10px;\r\n    display: inline-block;\r\n}\r\n\r\n.divider{\r\n    width: 90%;\r\n    margin-left: 5%;\r\n    height: 1px;\r\n    border: none;\r\n    border-top: 2px solid white;\r\n    border-style: dashed;\r\n    border-bottom: none;\r\n    background: none;\r\n    border-right: none;\r\n    border-left: none;\r\n}\r\n\r\n.row-2{\r\n    display: flex;\r\n    height: 25vh;\r\n    align-items: flex-end;\r\n    justify-content: center;\r\n}\r\n\r\n.row-2 .icon{\r\n    font-size: 50px;\r\n    background: white;\r\n    padding: 15px;\r\n    margin: 10px;\r\n    border-radius: 100%;\r\n    cursor: pointer;\r\n    color: #e64e08;\r\n    width: 68px;\r\n    height: 68px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}"

/***/ }),

/***/ "./src/app/personal-info/personal-info.component.html":
/*!************************************************************!*\
  !*** ./src/app/personal-info/personal-info.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"row-1\">\r\n    <div class=\"image-container\">\r\n      <img src=\"assets/images/profile.jpg\" alt=\"\">\r\n    </div>\r\n    <div class=\"details\">\r\n      <div class=\"name\">Pradeep Raj</div> <br>\r\n      <span class=\"skill\">Web Developer</span> <span class=\"skill\">Graphics Designer</span> <br>\r\n      <span class=\"skill\"><b>DOB:</b> 21-Aug-1993</span> <span class=\"skill\"><b>Work Experience:</b> 3 Years</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"divider\"></div>\r\n\r\n  <div class=\"row-2\">\r\n    <a href=\"#professional-exp\">\r\n      <div matTooltip=\"Scroll down\" class=\"icon down-arrow\">\r\n        <fa-icon [icon]=\"faAngleDoubleDown\"></fa-icon>\r\n      </div>\r\n    </a>\r\n    <a href=\"#professional-exp\">\r\n      <div matTooltip=\"Professional Experience\" class=\"icon\">\r\n        <fa-icon [icon]=\"faBriefcase\"></fa-icon>\r\n      </div>\r\n    </a>\r\n    <a href=\"#academic-details\">\r\n      <div matTooltip=\"Academic Details\" class=\"icon\">\r\n        <fa-icon [icon]=\"faGraduationCap\"></fa-icon>\r\n      </div>\r\n    </a>\r\n    <a href=\"#my-skills\">\r\n      <div matTooltip=\"Skills and Tools\" class=\"icon\">\r\n        <fa-icon [icon]=\"faGem\"></fa-icon>\r\n      </div>\r\n    </a>\r\n    <a href=\"#personal-projects\">\r\n      <div matTooltip=\"Personal Projects\" class=\"icon\">\r\n        <fa-icon [icon]=\"faClipboardList\"></fa-icon>\r\n      </div>\r\n    </a>\r\n    <a href=\"#social-profile\">\r\n      <div matTooltip=\"Social Media\" class=\"icon\">\r\n        <fa-icon [icon]=\"faGithub\"></fa-icon>\r\n      </div>\r\n    </a>\r\n  </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/personal-info/personal-info.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/personal-info/personal-info.component.ts ***!
  \**********************************************************/
/*! exports provided: PersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function() { return PersonalInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonalInfoComponent = /** @class */ (function () {
    function PersonalInfoComponent() {
        this.faBriefcase = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBriefcase"];
        this.faGraduationCap = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGraduationCap"];
        this.faAngleDoubleDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleDoubleDown"];
        this.faGem = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGem"];
        this.faClipboardList = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faClipboardList"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"];
    }
    PersonalInfoComponent.prototype.ngOnInit = function () {
    };
    PersonalInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'personal-info',
            template: __webpack_require__(/*! ./personal-info.component.html */ "./src/app/personal-info/personal-info.component.html"),
            styles: [__webpack_require__(/*! ./personal-info.component.css */ "./src/app/personal-info/personal-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonalInfoComponent);
    return PersonalInfoComponent;
}());



/***/ }),

/***/ "./src/app/professional-exp/professional-exp.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/professional-exp/professional-exp.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n    padding: 10px 0;\r\n    background: #09e694;\r\n    min-height: 100vh;\r\n}\r\n\r\n.experience{\r\n    display: flex;\r\n    padding: 15px;\r\n}\r\n\r\n.line{\r\n    width: 25px;\r\n    height: 100%;\r\n    background: #097950;\r\n    border-radius: 15px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 10px 0;\r\n}\r\n\r\n.circle{\r\n    cursor: pointer;\r\n    width: 13px;\r\n    height: 13px;\r\n    background: #ffffff;\r\n    border-radius: 10px;\r\n    border: 2px solid #79e0cd;\r\n}\r\n\r\n.content{\r\n    padding: 10px 0 0 30px;\r\n}\r\n\r\n.title{\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    color: #003622;\r\n}\r\n\r\n.period{\r\n    color: #013623;\r\n    font-size: 20px;\r\n}\r\n\r\n.period fa-icon{\r\n    /* color: white; */\r\n}\r\n\r\n.description{\r\n    font-size: 18px;\r\n    line-height: 25px;\r\n}"

/***/ }),

/***/ "./src/app/professional-exp/professional-exp.component.html":
/*!******************************************************************!*\
  !*** ./src/app/professional-exp/professional-exp.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"experience\">\n    <div class=\"graphic\">\n      <div class=\"line\">\n        <div class=\"circle\" title=\"Present\">\n\n        </div>\n        <div class=\"circle\" title=\"February 2016\">\n\n        </div>\n      </div>\n    </div>\n    <div class=\"content\">\n      <div class=\"title\">Motion Graphics Designer</div>\n      <div class=\"period\">\n        <fa-icon [icon]=\"faBuilding\"></fa-icon> Infosys Ltd\n      </div>\n      <div class=\"period\">\n        <fa-icon [icon]=\"faCalendar\"></fa-icon> February 2016 - Present\n      </div> <br>\n      <div class=\"description\">\n        Designed good number of <b>Explainer and Motion Graphic videos</b> for various use cases in banking, travel and shopping\n        domains. <br> Provided with the script, my duty is to come up with attractive visuals for the complete script and\n        get it approved by the team before animating the visuals. <br> Videos will strictly follow the brand guidelines,\n        color scheme and styles based on the client requirement. <br> Primary tool will be <b>Adobe Creative Cloud Suite.</b>        <br> Visuals are crafted using <b>Adobe Illustrator and Photoshop</b>. Animation will happen inside <b>Adobe After Effects</b>.\n        <br> In this time, I've also got a chance to lead a team of 3 designers and help them when they are stuck.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"experience\">\n    <div class=\"graphic\">\n      <div class=\"line\">\n        <div class=\"circle\" title=\"April 2018\">\n\n        </div>\n        <div class=\"circle\" title=\"December 2016\">\n\n        </div>\n      </div>\n    </div>\n    <div class=\"content\">\n      <div class=\"title\">Web Developer</div>\n      <div class=\"period\">\n        <fa-icon [icon]=\"faBuilding\"></fa-icon> Infosys Ltd\n      </div>\n      <div class=\"period\">\n        <fa-icon [icon]=\"faCalendar\"></fa-icon> December 2016 - April 2018\n      </div> <br>\n      <div class=\"description\">\n        Designed and Developed attractive User Interface for Portals and various POCs using <b>Java 8, Angular 6 and node JS.</b> <br>\n        Developed a robust media player for browsers with new features like adaptive streaming, encryption and much more features. <br>\n        During my tenure, I've been awarded <b>Exceeded Expectations</b> in appraisal.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"experience\">\n    <div class=\"graphic\">\n      <div class=\"line\">\n        <div class=\"circle\" title=\"February 2016\">\n\n        </div>\n        <div class=\"circle\" title=\"September 2015\">\n\n        </div>\n      </div>\n    </div>\n    <div class=\"content\">\n      <div class=\"title\">Systems Engineer Trainee</div>\n      <div class=\"period\">\n        <fa-icon [icon]=\"faBuilding\"></fa-icon> Infosys Ltd\n      </div>\n      <div class=\"period\">\n        <fa-icon [icon]=\"faCalendar\"></fa-icon> September 2015 - February 2016\n      </div> <br>\n      <div class=\"description\">\n        Undergone 6 months training at <b>Infosys Global Training Center, Mysore.</b> <br>\n        Trained in various technologies like Python, Java, TIBCO and Web Technologies. <br>\n        Also, completed the training with <b> High Performer </b> badge. \n      </div>\n    </div>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/professional-exp/professional-exp.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/professional-exp/professional-exp.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfessionalExpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalExpComponent", function() { return ProfessionalExpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfessionalExpComponent = /** @class */ (function () {
    function ProfessionalExpComponent() {
        this.faCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCalendarAlt"];
        this.faBuilding = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBuilding"];
    }
    ProfessionalExpComponent.prototype.ngOnInit = function () {
    };
    ProfessionalExpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'professional-exp',
            template: __webpack_require__(/*! ./professional-exp.component.html */ "./src/app/professional-exp/professional-exp.component.html"),
            styles: [__webpack_require__(/*! ./professional-exp.component.css */ "./src/app/professional-exp/professional-exp.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfessionalExpComponent);
    return ProfessionalExpComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n    padding: 10px 0;\r\n    background: #d9dfed;\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.heading{\r\n    display: flex;\r\n}\r\n\r\n.title{\r\n    padding: 20px;\r\n    cursor: pointer;\r\n    border: 3px solid #0052ff;\r\n    width: 150px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.title.active{\r\n    background: #0052ff;\r\n    color: white;\r\n    font-weight: bolder;\r\n}\r\n\r\n.title fa-icon{\r\n    padding-right: 15px;\r\n}\r\n\r\n.project-container{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    height: 80%;\r\n    align-items: center;\r\n    overflow-x: scroll;\r\n    width: calc(100% - 30px);\r\n}\r\n\r\n.img-container{\r\n    position: relative;\r\n    top: -20px;\r\n    padding: 0 30px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.img-container img.flip{\r\n    -webkit-transform: scale(-1,1);\r\n            transform: scale(-1,1);\r\n}\r\n\r\n.img-container img.shrink{\r\n    width: 370px;\r\n}\r\n\r\n.img-title{\r\n    font-size: 30px;\r\n    text-align: center;\r\n    margin-bottom: 45px;\r\n    font-weight: bold;\r\n    color: #224ca7;\r\n    background: white;\r\n    width: 370px;\r\n    border-radius: 42px;\r\n    padding: 6px;\r\n    box-shadow: rgba(0,0,0,0.2) 2px 2px 9px 0px;\r\n}\r\n\r\n.project{\r\n    height: 100%;\r\n    position: relative;\r\n    background: #265aa5;\r\n    color: white;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    width: 260px;\r\n    box-shadow: rgba(0,0,0,0.5) 2px 2px 15px 0px;\r\n    overflow: hidden;\r\n    margin: 0 35px;\r\n    transition: box-shadow 0.5s ease, -webkit-transform 0.5s ease;\r\n    transition: box-shadow 0.5s ease, transform 0.5s ease;\r\n    transition: box-shadow 0.5s ease, transform 0.5s ease, -webkit-transform 0.5s ease;\r\n    will-change: transform;\r\n}\r\n\r\n.project:hover{\r\n    box-shadow: rgba(0,0,0,0.25) 2px 2px 30px 0px;\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n}\r\n\r\n.project .img-holder{\r\n    height: 50%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.project .img-holder img{\r\n    height: 100%;\r\n}\r\n\r\n.project .heading{\r\n    padding-top: 5px;\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    height: 10%;\r\n}\r\n\r\n.project .sub-heading{\r\n    min-height: 30%;\r\n    font-size: 14px;\r\n    color: aliceblue;\r\n}\r\n\r\n.project .tags{\r\n    height: 20%;\r\n}\r\n\r\n.project .tags .tag{\r\n    background: white;\r\n    color: #265aa5;\r\n    padding: 5px;\r\n    border-radius: 20px;\r\n    font-weight: bold;\r\n    font-size: 12px;\r\n    margin-right: 10px;\r\n    position: relative;\r\n    top: 5px;\r\n}\r\n\r\n.no-style-anchor{\r\n    text-decoration: none;\r\n    display: block;\r\n    height: 370px;\r\n}\r\n\r\n.src{\r\n    width: 100px;\r\n    height: 100px;\r\n    background: white;\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: -50px;\r\n    right: -50px;\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n}\r\n\r\n.src fa-icon{\r\n    color: #265aa5;\r\n    -webkit-transform: rotate(-45deg);\r\n            transform: rotate(-45deg);\r\n    position: absolute;\r\n    left: 9px;\r\n    bottom: 34px;\r\n    font-size: 24px;\r\n}\r\n\r\n.project a{\r\n    text-decoration: none;\r\n}\r\n\r\n.video-holder{\r\n    border: 4px solid #0051ff;\r\n    display: flex;\r\n    margin: 0 15px;\r\n    background: url('loading.jpg');\r\n}\r\n\r\n.project-container::-webkit-scrollbar {\r\n    width: 1em;\r\n}\r\n\r\n.project-container::-webkit-scrollbar-track {\r\n    border: 2px solid #0540bd;\r\n    margin: 49px;\r\n    border-radius: 17px;\r\n    background: white;\r\n}\r\n\r\n.project-container::-webkit-scrollbar-thumb {\r\n    background-color: #0051ff;\r\n    outline: 35px solid #0051ff;\r\n    border-radius: 17px;\r\n}"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"heading\">\n    <div class=\"title\" (click)=\"activeState='dev'\" [ngClass]=\"{active: activeState === 'dev'}\">\n      <fa-icon [icon]=\"faCode\"></fa-icon>\n      Development\n    </div>\n    <div class=\"title\" (click)=\"activeState='design'\" [ngClass]=\"{active: activeState === 'design'}\">\n      <fa-icon [icon]=\"faPencilAlt\"></fa-icon>\n      Design\n    </div>\n  </div>\n\n  <div class=\"project-container\" *ngIf=\"activeState === 'dev'\">\n\n    <div class=\"img-container\">\n      <div class=\"img-title\">\n        Personal Dev Projects\n      </div>\n      <img class=\"flip\" src=\"assets/images/sitting-dev.png\" alt=\"Developer Image\">\n    </div>\n\n    <a class=\"no-style-anchor\" href=\"https://pradeeprajr93.github.io/crypto-ticker/\" target=\"_blank\">\n      <div class=\"project\">\n        <div class=\"img-holder\">\n          <img src=\"assets/images/crypto.jpg\" alt=\"Crypto Currencies\">\n        </div>\n        <div class=\"heading\">\n          Crypto Ticker\n        </div>\n        <div class=\"sub-heading\">\n          Real-time Crypto Currency Ticker, provides current market price of top 10 crypto currencies. <br> This is a Progressive\n          Web Application (PWA), add it to your mobile home screen.\n        </div>\n        <div class=\"tags\">\n          <span class=\"tag\">\n            Angular 4\n          </span>\n          <span class=\"tag\">\n            PWA\n          </span>\n        </div>\n        <a href=\"https://github.com/pradeeprajr93/crypto-ticker\" target=\"_blank\">\n          <div class=\"src\">\n            <fa-icon [icon]=\"faGithub\"></fa-icon>\n          </div>\n        </a>\n      </div>\n    </a>\n\n    <a class=\"no-style-anchor\" href=\"https://pradeeprajr93.github.io/quizzer/home\" target=\"_blank\">\n      <div class=\"project\">\n        <div class=\"img-holder\">\n          <img src=\"assets/images/quizzer.png\" alt=\"Crypto Currencies\">\n        </div>\n        <div class=\"heading\">\n          Quizzer\n        </div>\n        <div class=\"sub-heading\">\n          Simple Quiz Application. Allows you to create and take quiz, and share it among your friends. <br>\n          It's completely responsive and works fine with all devices.\n        </div>\n        <div class=\"tags\">\n          <span class=\"tag\">\n            Angular 6\n          </span>\n          <span class=\"tag\">\n            Firebase Database\n          </span>\n        </div>\n        <a href=\"https://github.com/pradeeprajr93/quizzer\" target=\"_blank\">\n          <div class=\"src\">\n            <fa-icon [icon]=\"faGithub\"></fa-icon>\n          </div>\n        </a>\n      </div>\n    </a>\n\n    <a class=\"no-style-anchor\" href=\"https://pradeeprajr93.github.io/YTDownloader/\" target=\"_blank\">\n      <div class=\"project\">\n        <div class=\"img-holder\">\n          <img src=\"assets/images/ytd.png\" alt=\"Crypto Currencies\">\n        </div>\n        <div class=\"heading\">\n          YouTube Downloader\n        </div>\n        <div class=\"sub-heading\">\n          A purely front end based YouTube video downloading application. <br>\n          Works completely fine with all your devices.\n        </div>\n        <div class=\"tags\">\n          <span class=\"tag\">\n            Angular 6\n          </span>\n          <span class=\"tag\">\n            PWA\n          </span>\n        </div>\n        <a href=\"https://github.com/pradeeprajr93/YTDownloader\" target=\"_blank\">\n          <div class=\"src\">\n            <fa-icon [icon]=\"faGithub\"></fa-icon>\n          </div>\n        </a>\n      </div>\n    </a>\n    \n    <a class=\"no-style-anchor\" href=\"https://github.com/pradeeprajr93/video-proof-reader\" target=\"_blank\">\n      <div class=\"project\">\n        <div class=\"img-holder\">\n          <img style=\"border-radius: 5px;\" src=\"assets/images/proofread.jpg\" alt=\"Crypto Currencies\">\n        </div>\n        <div class=\"heading\">\n          Video Proof Reader\n        </div>\n        <div class=\"sub-heading\">\n          This Web Application uses Google's Cloud Vision API. <br> \n          It scans frames in your video and point out misspelt words if any.\n        </div>\n        <div class=\"tags\">\n          <span class=\"tag\">\n            Google Cloud Vision\n          </span>\n          <span class=\"tag\">\n            JavaScript\n          </span>\n        </div>\n        <a href=\"https://github.com/pradeeprajr93/video-proof-reader\" target=\"_blank\">\n          <div class=\"src\">\n            <fa-icon [icon]=\"faGithub\"></fa-icon>\n          </div>\n        </a>\n      </div>\n    </a>    \n\n  </div>\n  \n  <div class=\"project-container\" *ngIf=\"activeState === 'design'\">\n    <div class=\"img-container\">\n      <div class=\"img-title\">\n        Personal Design Works\n      </div>\n      <img class=\"shrink\" src=\"assets/images/designer.png\" alt=\"Developer Image\">\n    </div>\n\n    <a class=\"no-style-anchor\" href=\"https://drive.google.com/open?id=12dzu6vpPwOlw-m851AyECbfIDkyy67Ll\" target=\"_blank\">\n      <div class=\"project\">\n        <div class=\"img-holder\">\n          <img style=\"border-radius: 5px;\" src=\"assets/images/uxresearch.jpg\" alt=\"Crypto Currencies\">\n        </div>\n        <div class=\"heading\">\n          User Research\n        </div>\n        <div class=\"sub-heading\">\n          Report Documentation for Research conducted at Amazon.com's site for shopping home products and groceries. <br>\n          I've also compared existing and future state customer journey.\n        </div>\n        <div class=\"tags\">\n          <span class=\"tag\">\n            Personas\n          </span>\n          <span class=\"tag\">\n            Customer Journey\n          </span>\n        </div>\n        <a href=\"https://drive.google.com/open?id=12dzu6vpPwOlw-m851AyECbfIDkyy67Ll\" target=\"_blank\">\n          <div class=\"src\">\n            <fa-icon [icon]=\"faReadme\"></fa-icon>\n          </div>\n        </a>\n      </div>\n    </a>    \n\n    <div class=\"video-holder\">\n      <iframe id=\"video-4\" class=\"videos\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/lJ71bwSkKbs\" frameborder=\"0\" \n      allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n\n    <div class=\"video-holder\">\n      <iframe id=\"video-1\" class=\"videos\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/GYtTVh5hw4M\" frameborder=\"0\"\n      allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n\n    <div class=\"video-holder\">\n      <iframe id=\"video-2\" class=\"videos\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/CFDypp0xkm4\" frameborder=\"0\"\n      allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n\n    <div class=\"video-holder\">\n      <iframe id=\"video-3\" class=\"videos\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/k-HTmZKRAXM\" frameborder=\"0\"\n      allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n    </div>\n\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.faCode = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCode"];
        this.faPencilAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPencilAlt"];
        this.faReadme = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faReadme"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"];
        this.activeState = "dev";
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Cabin+Sketch|Quantico');\r\n\r\nsection{\r\n    padding: 10px 0;\r\n    background: #09e694;\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.divider{\r\n    width: 6px;\r\n    height: 60%;\r\n    background: white;\r\n    border-radius: 5px;\r\n    -webkit-transform: rotate(7deg);\r\n            transform: rotate(7deg);\r\n    position: relative;\r\n}\r\n\r\n.divider #title{\r\n    position: absolute;\r\n    -webkit-transform: rotate(-7deg);\r\n            transform: rotate(-7deg);\r\n    white-space: nowrap;\r\n    font-size: 30px;\r\n    top: -80px;\r\n    left: -135px;\r\n    font-weight: bold;\r\n    background: white;\r\n    color: #0ce694;\r\n    padding: 15px 27px;\r\n    border-radius: 36px;\r\n}\r\n\r\n.design{\r\n    height: 100%;\r\n    width: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.design .content{\r\n    font-family: 'Cabin Sketch', cursive;\r\n    font-size: 60px;\r\n    color: white;\r\n    text-shadow: rgba(0,0,0,0.25) 5px 4px 15px;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.development .content{\r\n    font-family: 'Quantico', sans-serif;\r\n    font-size: 50px;\r\n    color: white;\r\n    position: relative;\r\n    z-index: 1;\r\n    text-shadow: rgba(0,0,0,0.25) 5px 4px 15px;\r\n}\r\n\r\n.development{\r\n    width: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    height: 100%;\r\n}\r\n\r\n.skill-dev{\r\n    position: absolute;\r\n}\r\n\r\n.skill-dev img{\r\n    width: 100%;\r\n}\r\n\r\n#angular{\r\n    width: 90px;\r\n    top: 109px;\r\n    right: 240px;\r\n}\r\n\r\n#css{\r\n    width: 78px;\r\n    bottom: 45px;\r\n    left: 48%;\r\n}\r\n\r\n#firebase{\r\n    width: 90px;\r\n    top: 232px;\r\n    left: 72px;\r\n}\r\n\r\n#html{\r\n    width: 65px;\r\n    top: 198px;\r\n    right: 98px;\r\n}\r\n\r\n#js{\r\n    width: 90px;\r\n    bottom: 151px;\r\n    left: 132px;\r\n}\r\n\r\n#node{\r\n    width: 90px;\r\n    top: 137px;\r\n    left: 182px;\r\n}\r\n\r\n#pwa{\r\n    width: 90px;\r\n    bottom: 183px;\r\n    right: 120px;\r\n}\r\n\r\n.skill-design{\r\n    position: absolute;\r\n}\r\n\r\n.skill-design img{\r\n    width: 100%;\r\n}\r\n\r\n#ai{\r\n    width: 93px;\r\n    top: 24%;\r\n    left: 40%;\r\n}\r\n\r\n#ae{\r\n    width: 93px;\r\n    bottom: 24%;\r\n    left: 40%;\r\n}\r\n\r\n#ps{\r\n    width: 93px;\r\n    top: 43%;\r\n    left: 10%;\r\n}\r\n\r\n#c4d{\r\n    width: 93px;\r\n    top: 43%;\r\n    right: 12%;\r\n}"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"development\">\n    <a href=\"https://angular.io/\" target=\"_blank\">\n      <div class=\"skill-dev\" title=\"Angular 6\" id=\"angular\">\n        <img src=\"assets/images/angular.png\" alt=\"Angular 6\">\n      </div>\n    </a>\n    <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3\" target=\"_blank\">\n      <div class=\"skill-dev\" title=\"CSS 3\" id=\"css\">\n        <img src=\"assets/images/css.png\" alt=\"CSS 3\">\n      </div>\n    </a>\n    <a href=\"https://firebase.google.com/\" target=\"_blank\">\n      <div class=\"skill-dev\" title=\"Firebase\" id=\"firebase\">\n        <img src=\"assets/images/firebase.png\" alt=\"Firebase\">\n      </div>\n    </a>\n    <a href=\"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5\" target=\"_blank\">\n      <div class=\"skill-dev\" title=\"HTML5\" id=\"html\">\n        <img src=\"assets/images/html.png\" alt=\"HTML5\">\n      </div>\n    </a>\n    <a href=\"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics\" target=\"_blank\">\n      <div class=\"skill-dev\" title=\"Javascript\" id=\"js\">\n        <img src=\"assets/images/js.png\" alt=\"Javascript\">\n      </div>\n    </a>\n    <a href=\"https://nodejs.org/en/\" target=\"_blank\">\n      <div class=\"skill-dev\" title=\"Node JS\" id=\"node\">\n        <img src=\"assets/images/node.png\" alt=\"Node JS\">\n      </div>\n    </a>\n    <a href=\"https://developers.google.com/web/progressive-web-apps/\" target=\"_blank\">\n      <div class=\"skill-dev\" title=\"Progressive Web Application\" id=\"pwa\">\n        <img src=\"assets/images/pwa.png\" alt=\"Progressive Web Application\">\n      </div>\n    </a>\n    <div class=\"content\">\n      Development\n    </div>\n  </div>\n  <div class=\"divider\">\n    <div id=\"title\">\n      Skills and Tools\n    </div>\n  </div>\n  <div class=\"design\">\n\n    <a href=\"https://www.adobe.com/in/products/illustrator.html\" target=\"_blank\">\n      <div class=\"skill-design\" title=\"Adobe Illustrator\" id=\"ai\">\n        <img src=\"assets/images/ai.png\" alt=\"Adobe Illustrator\">\n      </div>\n    </a>\n\n    <a href=\"https://www.adobe.com/in/products/aftereffects.html\" target=\"_blank\">\n      <div class=\"skill-design\" title=\"Adobe After Effects\" id=\"ae\">\n        <img src=\"assets/images/ae.png\" alt=\"Adobe After Effects\">\n      </div>\n    </a>\n\n    <a href=\"https://www.adobe.com/in/products/photoshop.html\" target=\"_blank\">\n      <div class=\"skill-design\" title=\"Adobe Photoshop\" id=\"ps\">\n        <img src=\"assets/images/ps.png\" alt=\"Adobe Photoshop\">\n      </div>\n    </a>\n\n    <a href=\"https://www.maxon.net/en/products/cineware-for-after-effects/\" target=\"_blank\">\n      <div class=\"skill-design\" title=\"Cinema 4D Lite\" id=\"c4d\">\n        <img src=\"assets/images/c4d.png\" alt=\"Cinema 4D Lite\">\n      </div>\n    </a>\n\n    <div class=\"content\">\n      Design\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/social/social.component.css":
/*!*********************************************!*\
  !*** ./src/app/social/social.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section{\r\n    padding: 10px 0;\r\n    background: #65cdaa;\r\n    min-height: 100vh;\r\n    height: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.my-pic{\r\n    position: relative;\r\n}\r\n\r\n.my-pic img{\r\n    width: 160px;\r\n    border-radius: 100px;\r\n    box-shadow: rgba(0,0,0,0.25) 1px 1px 10px 1px;\r\n}\r\n\r\n.icon-holder{\r\n    position: absolute;\r\n    width: 100px;\r\n    height: 100px;\r\n    font-size: 60px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 100px;\r\n    box-shadow: rgba(0,0,0,0.25) 1px 1px 10px 1px;\r\n    transition: -webkit-transform 0.5s ease;\r\n    transition: transform 0.5s ease;\r\n    transition: transform 0.5s ease, -webkit-transform 0.5s ease;\r\n    will-change: transform; \r\n    -webkit-animation-name: beat; \r\n            animation-name: beat;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate;\r\n}\r\n\r\n@-webkit-keyframes beat{\r\n    from{\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1)\r\n    }\r\n    to{\r\n        -webkit-transform: scale(1.05);\r\n                transform: scale(1.05);\r\n    }\r\n}\r\n\r\n@keyframes beat{\r\n    from{\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1)\r\n    }\r\n    to{\r\n        -webkit-transform: scale(1.05);\r\n                transform: scale(1.05);\r\n    }\r\n}\r\n\r\n.icon-holder:hover{\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n}\r\n\r\n.icon-holder.github{\r\n    background: #212121;\r\n    color: white;\r\n    top: -145px;\r\n    left: 35px;\r\n}\r\n\r\n.icon-holder.dribbble{\r\n    background: #ea4c89;\r\n    color: white;\r\n    top: 120px;\r\n    left: 193px;\r\n    width: 120px;\r\n    height: 120px;\r\n    font-size: 70px;\r\n}\r\n\r\n.icon-holder.twitter{\r\n    background: #1da1f2;\r\n    color: white;\r\n    top: -84px;\r\n    left: -161px;\r\n    width: 120px;\r\n    height: 120px;\r\n    font-size: 70px;\r\n}\r\n\r\n.icon-holder.medium{\r\n    background: #303030;\r\n    color: white;\r\n    top: 120px;\r\n    left: -130px;\r\n    width: 75px;\r\n    height: 75px;\r\n    font-size: 45px;\r\n}\r\n\r\n.icon-holder.youtube{\r\n    background: #ff1011;\r\n    color: white;\r\n    top: 215px;\r\n    left: 35px;\r\n}\r\n\r\n.icon-holder.linkedin{\r\n    background: #0077B5;\r\n    color: white;\r\n    top: -45px;\r\n    left: 200px;\r\n    width: 75px;\r\n    height: 75px;\r\n    font-size: 45px;\r\n}\r\n\r\n.no-style{\r\n    text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/social/social.component.html":
/*!**********************************************!*\
  !*** ./src/app/social/social.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"my-pic\">\n\n    <a class=\"no-style\" title=\"GitHub\" target=\"_blank\" href=\"https://github.com/pradeeprajr93\">\n      <div class=\"icon-holder github\">\n        <fa-icon [icon]=\"faGithub\"></fa-icon>\n      </div>\n    </a>\n\n    <a class=\"no-style\" title=\"Dribbble\" target=\"_blank\" href=\"https://dribbble.com/PradeepRaj\">\n      <div class=\"icon-holder dribbble\">\n        <fa-icon [icon]=\"faDribbble\"></fa-icon>\n      </div>\n    </a>\n\n    <a class=\"no-style\" title=\"Twitter\" target=\"_blank\" href=\"https://twitter.com/knowinmins\">\n      <div class=\"icon-holder twitter\">\n        <fa-icon [icon]=\"faTwitter\"></fa-icon>\n      </div>\n    </a>\n\n    <a class=\"no-style\" title=\"LinkedIn\" target=\"_blank\" href=\"https://www.linkedin.com/in/pradeeprajr93/\">\n      <div class=\"icon-holder linkedin\">\n        <fa-icon [icon]=\"faLinkedin\"></fa-icon>\n      </div>\n    </a>\n\n    <a class=\"no-style\" title=\"YouTube\" target=\"_blank\" href=\"https://www.youtube.com/user/knowinminutes\">\n      <div class=\"icon-holder youtube\">\n        <fa-icon [icon]=\"faYoutube\"></fa-icon>\n      </div>\n    </a>\n\n    <a class=\"no-style\" title=\"Medium\" target=\"_blank\" href=\"https://medium.com/@pradeeprajr93\">\n      <div class=\"icon-holder medium\">\n        <fa-icon [icon]=\"faMedium\"></fa-icon>\n      </div>\n    </a>\n\n    <img src=\"assets/images/profile-square.jpg\" alt=\"\">\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
        this.faTwitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitter"];
        this.faDribbble = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faDribbble"];
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedin"];
        this.faYoutube = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faYoutube"];
        this.faMedium = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMedium"];
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/social/social.component.html"),
            styles: [__webpack_require__(/*! ./social.component.css */ "./src/app/social/social.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\CODE\Projects\Portfolio\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map