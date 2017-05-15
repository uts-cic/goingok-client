/**
 * Created by andrew on 29/3/17.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var actions_1 = require("../actions");
var ReflectionEffects = (function () {
    function ReflectionEffects(update$, reflectionsActions, reflectionsService) {
        var _this = this;
        this.update$ = update$;
        this.reflectionsActions = reflectionsActions;
        this.reflectionsService = reflectionsService;
        this.getReflections$ = this.update$
            .ofType(actions_1.ReflectionsActions.GET_REFLECTIONS)
            .map(function (action) { return action.payload; })
            .switchMap(function (id) { return _this.reflectionsActions.getReflections(id); })
            .map(function (reflections) { return _this.reflectionsActions.getReflectionsSuccess(reflections); });
    }
    return ReflectionEffects;
}());
__decorate([
    effects_1.Effect()
], ReflectionEffects.prototype, "getReflections$", void 0);
ReflectionEffects = __decorate([
    core_1.Injectable()
], ReflectionEffects);
exports.ReflectionEffects = ReflectionEffects;
