"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Ng2AppComponent = (function () {
    function Ng2AppComponent() {
        this.title = 'ng2 works!';
    }
    Ng2AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ng2-app',
            templateUrl: 'ng2.component.html',
            styleUrls: ['ng2.component.css']
        })
    ], Ng2AppComponent);
    return Ng2AppComponent;
}());
exports.Ng2AppComponent = Ng2AppComponent;
