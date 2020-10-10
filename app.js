//task a-b
// function loadImage(success,error){
//     let a = document.createElement("img");
//     a.src = 'back.jpg';
//     document.body.appendChild(a);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//     a.onload = success;
//     a.onerror = error;
// }
// loadImage(() => {
//     console.log('image loaded')},
//      ()=>{
//         console.log('load failed');
//     });
// ;
//task c
// function success1(){
//     console.log("Loaded");
// }
// function error1(){
//     console.log("Failed");
// }
// async function loadImage(){
//     let a = document.createElement("img");
//     a.src = 'back.jpg';
//     //@ts-ignore 
//     await new Promise( (resolve, reject)=>{
//         setTimeout(resolve, 12000);
//         a.onerror = () => reject(new Error("error while loading"));
//     });
//     document.body.appendChild(a);
//     return a;
// }
// let promise:any = loadImage();
// promise.then(success1, error1);
// promise.then(success1).then(success1).catch(error1);
// promise.finally(()=>console.log("done"));
//task d
// function loadImage(success,error){
//     let a = document.createElement("img");
//     a.src = 'back.jpg';
//     document.body.appendChild(a);
//     a.onload = success;
//     a.onerror = error;
// }
// loadImage(() => {
//     console.log('image loaded')},
//      ()=>{
//         console.log('load failed');
//     });
// ;
//task e
function success1() {
    console.log("Loaded");
}
function error1() {
    console.log("Failed");
}
function loadImage() {
    return __awaiter(this, void 0, void 0, function () {
        var a, b, c, array;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    a = document.createElement("img");
                    b = document.createElement("img");
                    c = document.createElement("img");
                    a.src = 'back.jpg';
                    b.src = '007gNgEOly1gihvnjucqlj31sg1sghdt.jpg';
                    c.src = '118385103_114625810361587_8571102593084231161_n.jpg';
                    array = [a, b, c];
                    //@ts-ignore 
                    return [4 /*yield*/, new Promise(function (resolve, reject) {
                            setTimeout(resolve, 5000);
                            a.onerror = function () { return reject(new Error("error while loading")); };
                            b.onerror = function () { return reject(new Error("error while loading")); };
                            c.onerror = function () { return reject(new Error("error while loading")); };
                        })];
                case 1:
                    //@ts-ignore 
                    _a.sent();
                    document.body.appendChild(a);
                    document.body.appendChild(b);
                    document.body.appendChild(c);
                    return [2 /*return*/, array];
            }
        });
    });
}
var promise = loadImage();
promise.then(success1, error1);
//promise.then(success1).then(success1).catch(error1);
promise["finally"](function () { return console.log("done"); });
