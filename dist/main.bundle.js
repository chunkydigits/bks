webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" href=\"#\">Auth0 - Angular</a>\r\n  \r\n        <button\r\n          class=\"btn btn-primary btn-margin\"\r\n          routerLink=\"/\">\r\n            Home\r\n        </button>\r\n\r\n        <button\r\n          class=\"btn btn-primary btn-margin\"\r\n          routerLink=\"/feedbacks\"\r\n          *ngIf=\"auth.isAuthenticated()\">\r\n            Feedback\r\n        </button>\r\n  \r\n        <button\r\n          class=\"btn btn-primary btn-margin\"\r\n          *ngIf=\"!auth.isAuthenticated()\"\r\n          (click)=\"auth.login()\">\r\n            Log In\r\n        </button>\r\n  \r\n        <button\r\n          class=\"btn btn-primary btn-margin\"\r\n          *ngIf=\"auth.isAuthenticated()\"\r\n          (click)=\"auth.logout()\">\r\n            Log Out\r\n        </button>\r\n  \r\n      </div>\r\n    </div>\r\n  </nav>\r\n  \r\n  <main class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n  "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'BKS Management Suite';
        auth.handleAuthentication();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_userIsLoggedIn_guard__ = __webpack_require__("../../../../../src/app/guards/userIsLoggedIn.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__callback_callback_component__ = __webpack_require__("../../../../../src/app/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__feedback_feedback_component__ = __webpack_require__("../../../../../src/app/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__feedback_detail_feedback_detail_component__ = __webpack_require__("../../../../../src/app/feedback-detail/feedback-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__feedback_create_feedback_create_component__ = __webpack_require__("../../../../../src/app/feedback-create/feedback-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__feedback_edit_feedback_edit_component__ = __webpack_require__("../../../../../src/app/feedback-edit/feedback-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__callback_callback_component__["a" /* CallbackComponent */],
                __WEBPACK_IMPORTED_MODULE_11__feedback_feedback_component__["a" /* FeedbackComponent */],
                __WEBPACK_IMPORTED_MODULE_12__feedback_detail_feedback_detail_component__["a" /* FeedbackDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__feedback_create_feedback_create_component__["a" /* FeedbackCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_14__feedback_edit_feedback_edit_component__["a" /* FeedbackEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                //HttpClientModule,
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* ROUTES */], { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__guards_userIsLoggedIn_guard__["a" /* IsUserLoggedInGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__callback_callback_component__ = __webpack_require__("../../../../../src/app/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback_feedback_component__ = __webpack_require__("../../../../../src/app/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feedback_detail_feedback_detail_component__ = __webpack_require__("../../../../../src/app/feedback-detail/feedback-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feedback_create_feedback_create_component__ = __webpack_require__("../../../../../src/app/feedback-create/feedback-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feedback_edit_feedback_edit_component__ = __webpack_require__("../../../../../src/app/feedback-edit/feedback-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_userIsLoggedIn_guard__ = __webpack_require__("../../../../../src/app/guards/userIsLoggedIn.guard.ts");







var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    {
        path: 'feedbacks',
        component: __WEBPACK_IMPORTED_MODULE_2__feedback_feedback_component__["a" /* FeedbackComponent */],
        data: { title: 'Feedback List' },
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_userIsLoggedIn_guard__["a" /* IsUserLoggedInGuard */]]
    },
    {
        path: 'feedback-details/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__feedback_detail_feedback_detail_component__["a" /* FeedbackDetailComponent */],
        data: { title: 'Feedback Details' },
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_userIsLoggedIn_guard__["a" /* IsUserLoggedInGuard */]]
    },
    {
        path: 'feedback-create',
        component: __WEBPACK_IMPORTED_MODULE_4__feedback_create_feedback_create_component__["a" /* FeedbackCreateComponent */],
        data: { title: 'Create Feedback' },
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_userIsLoggedIn_guard__["a" /* IsUserLoggedInGuard */]]
    },
    {
        path: 'feedback-edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__feedback_edit_feedback_edit_component__["a" /* FeedbackEditComponent */],
        data: { title: 'Edit Feedback' },
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_userIsLoggedIn_guard__["a" /* IsUserLoggedInGuard */]]
    },
    {
        path: 'callback', component: __WEBPACK_IMPORTED_MODULE_1__callback_callback_component__["a" /* CallbackComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_userIsLoggedIn_guard__["a" /* IsUserLoggedInGuard */]]
    },
    { path: '**', redirectTo: '' }
];


/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth0_variables__ = __webpack_require__("../../../../../src/app/auth/auth0-variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"]({
            clientID: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].clientID,
            domain: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].domain,
            responseType: 'token id_token',
            audience: "https://" + __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].domain + "/userinfo",
            redirectUri: 'http://localhost:4200/callback',
            scope: 'openid'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/home']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
                alert("Error: " + err.error + ". Check the console for further details.");
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth0-variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
var AUTH_CONFIG = {
    clientID: '6MQUpb0rrQJYSjdFmlZm4pi4IfKd1f7Y',
    domain: 'chains.eu.auth0.com',
    callbackURL: 'http://localhost:4200/callback'
};


/***/ }),

/***/ "../../../../../src/app/callback/callback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"assets/loading.svg\" alt=\"loading\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CallbackComponent = (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    CallbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-callback',
            template: __webpack_require__("../../../../../src/app/callback/callback.component.html"),
            styles: [__webpack_require__("../../../../../src/app/callback/callback.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/feedback-create/feedback-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feedback-create/feedback-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Add Feedback</h1>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <form (ngSubmit)=\"saveFeedback()\" #feedbackForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.name\" name=\"name\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Date</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.date\" name=\"date\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Department</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.department\" name=\"department\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Theme</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.theme\" name=\"theme\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Sub Theme</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.subTheme\" name=\"subTheme\" required>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Feedback</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.feedback\" name=\"feedback\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Status</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.status\" name=\"status\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Point Of Contact</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.pointOfContact\" name=\"pointOfContact\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Outstanding Actions</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.outstandingActions\" name=\"outstandingActions\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Strategic Review Link</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.strategicReviewLink\" name=\"strategicReviewLink\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!feedback.form.valid\">Save</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/feedback-create/feedback-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackCreateComponent = (function () {
    function FeedbackCreateComponent(http, router) {
        this.http = http;
        this.router = router;
        this.feedback = {};
    }
    FeedbackCreateComponent.prototype.ngOnInit = function () {
    };
    FeedbackCreateComponent.prototype.saveFeedback = function () {
        var _this = this;
        this.http.post('/feedback', this.feedback)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/feedback-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    FeedbackCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feedback-create',
            template: __webpack_require__("../../../../../src/app/feedback-create/feedback-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feedback-create/feedback-create.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], FeedbackCreateComponent);
    return FeedbackCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/feedback-detail/feedback-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feedback-detail/feedback-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>{{feedback.name}}</h1>\r\n  <dl class=\"list\">\r\n    <dt>Name</dt>\r\n    <dd>{{feedback.name}}</dd>\r\n    <dt>Date</dt>\r\n    <dd>{{feedback.date | date: medium }}</dd>\r\n    <dt>Department</dt>\r\n    <dd>{{feedback.department}}</dd>\r\n    <dt>Theme</dt>\r\n    <dd>{{feedback.theme}}</dd>\r\n    <dt>Sub Theme</dt>\r\n    <dd>{{feedback.subTheme}}</dd>\r\n    <dt>Feedback</dt>\r\n    <dd>{{feedback.feedback}}</dd>\r\n    <dt>Status</dt>\r\n    <dd>{{feedback.status}}</dd>\r\n    <dt>Point Of Contact</dt>\r\n    <dd>{{feedback.pointOfContact}}</dd>\r\n    <dt>Outstanding Actions</dt>\r\n    <dd>{{feedback.outstandingActions}}</dd>\r\n    <dt>Strategic Review Link</dt>\r\n    <dd>{{feedback.strategicReviewLink}}</dd>\r\n    <dt>Update Date</dt>\r\n    <dd>{{feedback.updated_date}}</dd>\r\n  </dl>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <a [routerLink]=\"['/feedback-edit', feedback._id]\" class=\"btn btn-success\">EDIT</a>\r\n    <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteFeedback(feedback._id)\">DELETE</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/feedback-detail/feedback-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackDetailComponent = (function () {
    function FeedbackDetailComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.feedback = {};
    }
    FeedbackDetailComponent.prototype.ngOnInit = function () {
        this.getFeedbackDetail(this.route.snapshot.params['id']);
    };
    FeedbackDetailComponent.prototype.getFeedbackDetail = function (id) {
        var _this = this;
        this.http.get('/feedback/' + id).subscribe(function (data) {
            _this.feedback = data;
        });
    };
    FeedbackDetailComponent.prototype.deleteFeedback = function (id) {
        var _this = this;
        this.http.delete('/feedback/' + id)
            .subscribe(function (res) {
            _this.router.navigate(['/feedbacks']);
        }, function (err) {
            console.log(err);
        });
    };
    FeedbackDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feedback-detail',
            template: __webpack_require__("../../../../../src/app/feedback-detail/feedback-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feedback-detail/feedback-detail.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FeedbackDetailComponent);
    return FeedbackDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/feedback-edit/feedback-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feedback-edit/feedback-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Edit Feedback</h1>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <form (ngSubmit)=\"updateFeedback(feedback._id)\" #feedbackForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.name\" name=\"name\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Date</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.date\" name=\"date\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Department</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.department\" name=\"department\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Theme</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.theme\" name=\"theme\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Sub Theme</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.subTheme\" name=\"subTheme\" required>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Feedback</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.feedback\" name=\"feedback\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Status</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.status\" name=\"status\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Point Of Contact</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.pointOfContact\" name=\"pointOfContact\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Outstanding Actions</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.outstandingActions\" name=\"outstandingActions\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Strategic Review Link</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"feedback.strategicReviewLink\" name=\"strategicReviewLink\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!feedbackForm.form.valid\">Update</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/feedback-edit/feedback-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackEditComponent = (function () {
    function FeedbackEditComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.feedback = {};
    }
    FeedbackEditComponent.prototype.ngOnInit = function () {
        this.getFeedback(this.route.snapshot.params['id']);
    };
    FeedbackEditComponent.prototype.getFeedback = function (id) {
        var _this = this;
        this.http.get('/feedback/' + id).subscribe(function (data) {
            _this.feedback = data;
        });
    };
    FeedbackEditComponent.prototype.updateFeedback = function (id, data) {
        var _this = this;
        this.http.put('/feedback/' + id, data)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/feedback-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    FeedbackEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feedback-edit',
            template: __webpack_require__("../../../../../src/app/feedback-edit/feedback-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feedback-edit/feedback-edit.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], FeedbackEditComponent);
    return FeedbackEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/feedback/feedback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feedback/feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>List of Feedback</h1>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>Name</th>\r\n        <th>Date</th>\r\n        <th>Theme</th>\r\n        <th>Status</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let feedback of feedbacks\">\r\n        <td>{{ feedback.name }}</td>\r\n        <td>{{ feedback.date | date: medium }}</td>\r\n        <td>{{ feedback.theme }}</td>\r\n        <td>{{ feedback.status }}</td>\r\n        <td>\r\n          <a [routerLink]=\"['/feedback-details/' + feedback._id]\" class=\"btn btn-default btn-sm\">\r\n            Show Detail\r\n          </a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <h1>Feedback List\r\n    <a [routerLink]=\"['/feedback-create']\" class=\"btn btn-default btn-lg\">\r\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\r\n    </a>\r\n  </h1>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/feedback/feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackComponent = (function () {
    function FeedbackComponent(http) {
        this.http = http;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/feedback').subscribe(function (data) {
            _this.feedbacks = data;
        });
    };
    FeedbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feedback',
            template: __webpack_require__("../../../../../src/app/feedback/feedback.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feedback/feedback.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/userIsLoggedIn.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsUserLoggedInGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IsUserLoggedInGuard = (function () {
    function IsUserLoggedInGuard(authService) {
        this.authService = authService;
    }
    IsUserLoggedInGuard.prototype.canActivate = function () {
        return this.authService.isAuthenticated();
    };
    IsUserLoggedInGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], IsUserLoggedInGuard);
    return IsUserLoggedInGuard;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 *ngIf=\"auth.isAuthenticated()\">\n  You are logged in!\n</h4>\n<h4 *ngIf=\"!auth.isAuthenticated()\">\n  You are not logged in! Please <a (click)=\"auth.login()\">Log In</a> to continue.\n</h4>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map