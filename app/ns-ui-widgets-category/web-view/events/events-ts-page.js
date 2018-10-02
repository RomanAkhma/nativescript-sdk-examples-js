"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var firstUrl = "https://google.com/";
var secondUrl = "https://www.nativescript.org/";
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("webViewSrc", secondUrl);
    vm.set("isItemVisible", true);
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onLoadStarted(args) {
    var page = args.object;
    var vm = page.bindingContext;
    vm.set("isItemVisible", true);
    var message;
    if (!args.error) {
        console.log("--------------------------------------");
        console.log("Load Start");
        console.log("EventName: " + args.eventName);
        console.log("NavigationType: " + args.navigationType);
        console.log("Url: " + args.url);
        console.log("--------------------------------------");
        message = "WebView started loading of " + args.url;
    }
    else {
        console.log("--------------------------------------");
        console.log("EventName: " + args.eventName);
        console.log("Error: " + args.error);
        console.log("--------------------------------------");
        message = "Error loading  " + args.url + " : " + args.error;
    }
    console.log(message);
}
exports.onLoadStarted = onLoadStarted;
function onLoadFinished(args) {
    var page = args.object;
    var vm = page.bindingContext;
    var message;
    if (!args.error) {
        console.log("--------------------------------------");
        console.log("Load Finished");
        console.log("EventName: " + args.eventName);
        console.log("NavigationType: " + args.navigationType);
        console.log("Url: " + args.url);
        console.log("--------------------------------------");
        message = "WebView finished loading of  " + args.url;
    }
    else {
        console.log("--------------------------------------");
        console.log("EventName: " + args.eventName);
        console.log("Error: " + args.error);
        console.log("--------------------------------------");
        message = "Error loading " + args.url + " : " + args.error;
    }
    console.log(message);
    setTimeout(function () {
        vm.set("isItemVisible", false);
    }, 500);
}
exports.onLoadFinished = onLoadFinished;
function loadFirst(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    vm.set("webViewSrc", firstUrl);
}
exports.loadFirst = loadFirst;
function loadSecond(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    vm.set("webViewSrc", secondUrl);
}
exports.loadSecond = loadSecond;
function onReload(args) {
    var page = args.object.page;
    var webview = page.getViewById("webview");
    webview.reload();
}
exports.onReload = onReload;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudHMtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUE4RDtBQUc5RCxJQUFNLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQztBQUN2QyxJQUFNLFNBQVMsR0FBRywrQkFBK0IsQ0FBQztBQUVsRCx3QkFBK0IsSUFBSTtJQUMvQixJQUFNLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JDLElBQU0sRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBQzVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzdCLENBQUM7QUFORCx3Q0FNQztBQUVELHVCQUE4QixJQUFJO0lBQzlCLElBQU0sSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckMsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixJQUFJLE9BQU8sQ0FBQztJQUNaLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFZCxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFjLElBQUksQ0FBQyxTQUFXLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFtQixJQUFJLENBQUMsY0FBZ0IsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENB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QyxDQUFDO0FBQ3BDLENBQUM7QUFKRCxnQ0FJQztBQUVELGtCQUF5QixJQUFJO0lBQ3pCLElBQU0sSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzFDLElBQU0sT0FBTyxHQUFxQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNyQixDQUFDO0FBSkQsNEJBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgV2ViVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3dlYi12aWV3L3dlYi12aWV3XCI7XG5jb25zdCBmaXJzdFVybCA9IFwiaHR0cHM6Ly9nb29nbGUuY29tL1wiO1xuY29uc3Qgc2Vjb25kVXJsID0gXCJodHRwczovL3d3dy5uYXRpdmVzY3JpcHQub3JnL1wiO1xuLy8gPj4gd2Vidmlldy10cy1ldmVudHNcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XG4gICAgY29uc3QgcGFnZTogUGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZtID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICB2bS5zZXQoXCJ3ZWJWaWV3U3JjXCIsIHNlY29uZFVybCk7XG4gICAgdm0uc2V0KFwiaXNJdGVtVmlzaWJsZVwiLCB0cnVlKTtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxvYWRTdGFydGVkKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3Qgdm0gPSBwYWdlLmJpbmRpbmdDb250ZXh0O1xuICAgIHZtLnNldChcImlzSXRlbVZpc2libGVcIiwgdHJ1ZSk7XG4gICAgbGV0IG1lc3NhZ2U7XG4gICAgaWYgKCFhcmdzLmVycm9yKSB7XG4gICAgICAgIC8vID4+IChoaWRlKVxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWQgU3RhcnRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFdmVudE5hbWU6ICR7YXJncy5ldmVudE5hbWV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBOYXZpZ2F0aW9uVHlwZTogJHthcmdzLm5hdmlnYXRpb25UeXBlfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgVXJsOiAke2FyZ3MudXJsfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICAvLyA8PCAoaGlkZSlcbiAgICAgICAgbWVzc2FnZSA9IGBXZWJWaWV3IHN0YXJ0ZWQgbG9hZGluZyBvZiAke2FyZ3MudXJsfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPj4gKGhpZGUpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFdmVudE5hbWU6ICR7YXJncy5ldmVudE5hbWV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHthcmdzLmVycm9yfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICAvLyA8PCAoaGlkZSlcbiAgICAgICAgbWVzc2FnZSA9IGBFcnJvciBsb2FkaW5nICAke2FyZ3MudXJsfSA6ICR7YXJncy5lcnJvcn1gO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcblxufVxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9hZEZpbmlzaGVkKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlID0gKDxQYWdlPmFyZ3Mub2JqZWN0KTtcbiAgICBjb25zdCB2bSA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XG4gICAgbGV0IG1lc3NhZ2U7XG4gICAgaWYgKCFhcmdzLmVycm9yKSB7XG4gICAgICAgIC8vID4+IChoaWRlKVxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWQgRmluaXNoZWRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGBFdmVudE5hbWU6ICR7YXJncy5ldmVudE5hbWV9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBOYXZpZ2F0aW9uVHlwZTogJHthcmdzLm5hdmlnYXRpb25UeXBlfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgVXJsOiAke2FyZ3MudXJsfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICAvLyA8PCAoaGlkZSlcbiAgICAgICAgbWVzc2FnZSA9IGBXZWJWaWV3IGZpbmlzaGVkIGxvYWRpbmcgb2YgICR7YXJncy51cmx9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyA+PiAoaGlkZSlcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coYEV2ZW50TmFtZTogJHthcmdzLmV2ZW50TmFtZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYEVycm9yOiAke2FyZ3MuZXJyb3J9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgIC8vIDw8IChoaWRlKVxuICAgICAgICBtZXNzYWdlID0gYEVycm9yIGxvYWRpbmcgJHthcmdzLnVybH0gOiAke2FyZ3MuZXJyb3J9YDtcbiAgICB9XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgLy8gPj4gKGhpZGUpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHZtLnNldChcImlzSXRlbVZpc2libGVcIiwgZmFsc2UpO1xuICAgIH0sIDUwMCk7XG4gICAgLy8gPDwgKGhpZGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlyc3QoYXJncykge1xuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdC5wYWdlO1xuICAgIGNvbnN0IHZtID0gcGFnZS5iaW5kaW5nQ29udGV4dDtcbiAgICB2bS5zZXQoXCJ3ZWJWaWV3U3JjXCIsIGZpcnN0VXJsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTZWNvbmQoYXJncykge1xuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdC5wYWdlO1xuICAgIGNvbnN0IHZtID0gcGFnZS5iaW5kaW5nQ29udGV4dDtcbiAgICB2bS5zZXQoXCJ3ZWJWaWV3U3JjXCIsIHNlY29uZFVybCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJlbG9hZChhcmdzKSB7XG4gICAgY29uc3QgcGFnZTogUGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0LnBhZ2U7XG4gICAgY29uc3Qgd2VidmlldzogV2ViVmlldyA9IDxXZWJWaWV3PnBhZ2UuZ2V0Vmlld0J5SWQoXCJ3ZWJ2aWV3XCIpO1xuICAgIHdlYnZpZXcucmVsb2FkKCk7XG59XG4vLyA8PCB3ZWJ2aWV3LXRzLWV2ZW50c1xuIl19