/* Copyright © 2015 by Apparound Inc */

"use strict";

angular.module('appName').directive("dropdown", function() {
    return {
        restrict: "EA",
        replace: true,
        scope: {
            ngModel: "=", // the name of the variable where to put the CODE (value) of the list
            list: "=", // the list of values to show as option - should have this format [{'CODE': "", 'NAME': "", "LOV_ID": "", "disabled": false}, ..] - LOV_ID optional, disabled optional (need to disable single options)
            label: "=", // the name of the field - put the translation string
            fieldName: "@", // the name of the field of the select
            ngDisabled: "=?", // OPT: an expression or bool to disable the select - default: false
            visual: "=?", // OPT: the name of the variable where to put the NAME (label) of the list - default: ngModel (wil not be replaced with label if are the same)
            noValue: "=?", // OPT: an expression or bool to disable the "-" option - if true will not be display - default: false
            placeholder: "=?", // OPT: if noValue is false you can set a placeholder - default "-"
            req: "=?", // OPT: an expression or boll to make know if the select is required - default: false
            callback: "&?" // OPT: a function passed from the controller to call when there is a change in the select
        },
        templateUrl: "dropdown.html",
        link: function(scope, element, attrs, formController) {

            // Managing optional variables
            scope.ngDisabled = (scope.ngDisabled) ? scope.ngDisabled : false;
            scope.visual = (scope.visual) ? scope.visual : scope.ngModel;
            scope.noValue = (scope.noValue) ? scope.noValue : false;
            scope.req = (scope.req) ? scope.req : false;
            if (!scope.noValue) {
                scope.placeholder = scope.placeholder || "-";
            }

            //Function to take all object - called in change function
            var objFromList = function(val) {
                for (var i = 0; i < scope.list.length; i++) {
                    if (scope.list[i].CODE == val)
                        return i;
                }

                return -1;
            };

            // change function - on select of an element list trigger an event
            scope.change= function () {
                var id = objFromList(scope.ngModel);

                if (id >= 0) {
                    if (scope.visual != scope.ngModel) {
                        scope.visual = scope.list[id].NAME;
                    }
                    if (scope.callback)
                        scope.callback({index: id, value: scope.list[id].CODE, name: scope.list[id].NAME, lov: scope.list[id].LOV_ID});
                }
            };

        }
    };

});
