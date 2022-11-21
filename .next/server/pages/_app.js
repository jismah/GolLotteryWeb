/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ProtectedRoute.tsx":
/*!***************************************!*\
  !*** ./components/ProtectedRoute.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst ProtectedRoute = ({ children  })=>{\n    const { user  } = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!user) {\n            router.push('/login');\n        }\n    }, [\n        router,\n        user\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: user ? children : null\n    }, void 0, false));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedRoute);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb3RlY3RlZFJvdXRlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDQztBQUNRO0FBRWhELEtBQUssQ0FBQ0ksY0FBYyxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxFQUFnQyxDQUFDLEdBQUssQ0FBQztJQUN2RSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUMsQ0FBQyxHQUFHSCw2REFBTztJQUN4QixLQUFLLENBQUNJLE1BQU0sR0FBR1Asc0RBQVM7SUFFeEJFLGdEQUFTLEtBQU8sQ0FBQztRQUNmLEVBQUUsR0FBR0ksSUFBSSxFQUFFLENBQUM7WUFDVkMsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBUTtRQUN0QixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUNEO1FBQUFBLE1BQU07UUFBRUQsSUFBSTtJQUFBLENBQUM7SUFFakIsTUFBTTtrQkFBSUEsSUFBSSxHQUFHRCxRQUFRLEdBQUcsSUFBSTs7QUFDbEMsQ0FBQztBQUVELGlFQUFlRCxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29sbG90dGVyeS8uL2NvbXBvbmVudHMvUHJvdGVjdGVkUm91dGUudHN4PzczMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL2NvbnRleHQvQXV0aENvbnRleHQnXHJcblxyXG5jb25zdCBQcm90ZWN0ZWRSb3V0ZSA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIsIHVzZXJdKVxyXG5cclxuICByZXR1cm4gPD57dXNlciA/IGNoaWxkcmVuIDogbnVsbH08Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvdGVjdGVkUm91dGVcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlQXV0aCIsIlByb3RlY3RlZFJvdXRlIiwiY2hpbGRyZW4iLCJ1c2VyIiwicm91dGVyIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProtectedRoute.tsx\n");

/***/ }),

/***/ "./config/firebase.ts":
/*!****************************!*\
  !*** ./config/firebase.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"database\": () => (/* binding */ database),\n/* harmony export */   \"auth\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCVzWbRBoqUS57O5a2_WHZ58b5ogNOefno\",\n    authDomain: \"gollottery.firebaseapp.com\",\n    projectId: \"gollottery\",\n    storageBucket: \"gollottery.appspot.com\",\n    messagingSenderId: \"776047002872\",\n    appId: \"1:776047002872:web:291149e5c88da7bfaa270d\",\n    measurementId: \"G-FGW9ZJQPRQ\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst database = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZmlyZWJhc2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ0w7QUFFVTtBQUVqRCxLQUFLLENBQUNHLGNBQWMsR0FBRyxDQUFDO0lBQ3RCQyxNQUFNLEVBQUUsQ0FBeUM7SUFDakRDLFVBQVUsRUFBRSxDQUE0QjtJQUN4Q0MsU0FBUyxFQUFFLENBQVk7SUFDdkJDLGFBQWEsRUFBRSxDQUF3QjtJQUN2Q0MsaUJBQWlCLEVBQUUsQ0FBYztJQUNqQ0MsS0FBSyxFQUFFLENBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsQ0FBYztBQUMvQixDQUFDO0FBRU0sS0FBSyxDQUFDQyxHQUFHLEdBQUdYLDJEQUFhLENBQUNHLGNBQWM7QUFDeEMsS0FBSyxDQUFDUyxRQUFRLEdBQUdWLGdFQUFZLENBQUNTLEdBQUc7QUFDakMsS0FBSyxDQUFDRSxJQUFJLEdBQUdaLHNEQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29sbG90dGVyeS8uL2NvbmZpZy9maXJlYmFzZS50cz9jOTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnXHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xyXG5pbXBvcnQgeyBnZXRBbmFseXRpY3MgfSBmcm9tIFwiZmlyZWJhc2UvYW5hbHl0aWNzXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lDVnpXYlJCb3FVUzU3TzVhMl9XSFo1OGI1b2dOT2Vmbm9cIixcclxuICBhdXRoRG9tYWluOiBcImdvbGxvdHRlcnkuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcImdvbGxvdHRlcnlcIixcclxuICBzdG9yYWdlQnVja2V0OiBcImdvbGxvdHRlcnkuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI3NzYwNDcwMDI4NzJcIixcclxuICBhcHBJZDogXCIxOjc3NjA0NzAwMjg3Mjp3ZWI6MjkxMTQ5ZTVjODhkYTdiZmFhMjcwZFwiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1GR1c5WkpRUFJRXCJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbmV4cG9ydCBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJkYXRhYmFzZSIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/firebase.ts\n");

/***/ }),

/***/ "./context/AuthContext.tsx":
/*!*********************************!*\
  !*** ./context/AuthContext.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth),\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _config_firebase__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _config_firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst useAuth = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext)\n;\nconst AuthContextProvider = ({ children  })=>{\n    const { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, (user)=>{\n            if (user) {\n                setUser({\n                    uid: user.uid,\n                    email: user.email,\n                    displayName: user.displayName\n                });\n            } else {\n                setUser(null);\n            }\n            setLoading(false);\n        });\n        return ()=>unsubscribe()\n        ;\n    }, []);\n    const signup = (email, password)=>{\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, email, password);\n    };\n    const login = (email, password)=>{\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth, email, password);\n    };\n    const logout = async ()=>{\n        setUser(null);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(_config_firebase__WEBPACK_IMPORTED_MODULE_3__.auth);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user: user1,\n            login,\n            signup,\n            logout\n        },\n        children: loading ? null : children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\developer\\\\Desktop\\\\Gol\\\\GolLotteryWeb\\\\context\\\\AuthContext.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined));\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0U7QUFNaEQ7QUFDbUI7QUFFekMsS0FBSyxDQUFDUyxXQUFXLGlCQUFHVCxvREFBYSxDQUFNLENBQUMsQ0FBQztBQUVsQyxLQUFLLENBQUNVLE9BQU8sT0FBU1QsaURBQVUsQ0FBQ1EsV0FBVzs7QUFFNUMsS0FBSyxDQUFDRSxtQkFBbUIsSUFBSSxDQUFDLENBQ25DQyxRQUFRLEVBR1YsQ0FBQyxHQUFLLENBQUM7SUFDTCxLQUFLLE1BQUVDLEtBQUksTUFBRUMsT0FBTyxNQUFJWCwrQ0FBUSxDQUFNLElBQUk7SUFDMUMsS0FBSyxNQUFFWSxPQUFPLE1BQUVDLFVBQVUsTUFBSWIsK0NBQVEsQ0FBQyxJQUFJO0lBRTNDRCxnREFBUyxLQUFPLENBQUM7UUFDZixLQUFLLENBQUNlLFdBQVcsR0FBR2IsaUVBQWtCLENBQUNJLGtEQUFJLEdBQUdLLElBQUksR0FBSyxDQUFDO1lBQ3RELEVBQUUsRUFBRUEsSUFBSSxFQUFFLENBQUM7Z0JBQ1RDLE9BQU8sQ0FBQyxDQUFDO29CQUNQSSxHQUFHLEVBQUVMLElBQUksQ0FBQ0ssR0FBRztvQkFDYkMsS0FBSyxFQUFFTixJQUFJLENBQUNNLEtBQUs7b0JBQ2pCQyxXQUFXLEVBQUVQLElBQUksQ0FBQ08sV0FBVztnQkFDL0IsQ0FBQztZQUNILENBQUMsTUFBTSxDQUFDO2dCQUNOTixPQUFPLENBQUMsSUFBSTtZQUNkLENBQUM7WUFDREUsVUFBVSxDQUFDLEtBQUs7UUFDbEIsQ0FBQztRQUVELE1BQU0sS0FBT0MsV0FBVzs7SUFDMUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEtBQUssQ0FBQ0ksTUFBTSxJQUFJRixLQUFhLEVBQUVHLFFBQWdCLEdBQUssQ0FBQztRQUNuRCxNQUFNLENBQUNqQiw2RUFBOEIsQ0FBQ0csa0RBQUksRUFBRVcsS0FBSyxFQUFFRyxRQUFRO0lBQzdELENBQUM7SUFFRCxLQUFLLENBQUNDLEtBQUssSUFBSUosS0FBYSxFQUFFRyxRQUFnQixHQUFLLENBQUM7UUFDbEQsTUFBTSxDQUFDaEIseUVBQTBCLENBQUNFLGtEQUFJLEVBQUVXLEtBQUssRUFBRUcsUUFBUTtJQUN6RCxDQUFDO0lBRUQsS0FBSyxDQUFDRSxNQUFNLGFBQWUsQ0FBQztRQUMxQlYsT0FBTyxDQUFDLElBQUk7UUFDWixLQUFLLENBQUNQLHNEQUFPLENBQUNDLGtEQUFJO0lBQ3BCLENBQUM7SUFFRCxNQUFNLDZFQUNIQyxXQUFXLENBQUNnQixRQUFRO1FBQUNDLEtBQUssRUFBRSxDQUFDO1lBQUNiLElBQUksRUFBSkEsS0FBSTtZQUFFVSxLQUFLO1lBQUVGLE1BQU07WUFBRUcsTUFBTTtRQUFDLENBQUM7a0JBQ3pEVCxPQUFPLEdBQUcsSUFBSSxHQUFHSCxRQUFROzs7Ozs7QUFHaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvbGxvdHRlcnkvLi9jb250ZXh0L0F1dGhDb250ZXh0LnRzeD9mZGZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIHNpZ25PdXQsXHJcbn0gZnJvbSAnZmlyZWJhc2UvYXV0aCdcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gJy4uL2NvbmZpZy9maXJlYmFzZSdcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxhbnk+KHt9KVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0UHJvdmlkZXIgPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG59OiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG59KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8YW55PihudWxsKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgICAgdWlkOiB1c2VyLnVpZCxcclxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgZGlzcGxheU5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRVc2VyKG51bGwpXHJcbiAgICAgIH1cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHVuc3Vic2NyaWJlKClcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3Qgc2lnbnVwID0gKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW1haWwsIHBhc3N3b3JkKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbG9naW4gPSAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZClcclxuICB9XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFVzZXIobnVsbClcclxuICAgIGF3YWl0IHNpZ25PdXQoYXV0aClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9naW4sIHNpZ251cCwgbG9nb3V0IH19PlxyXG4gICAgICB7bG9hZGluZyA/IG51bGwgOiBjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0IiwiYXV0aCIsIkF1dGhDb250ZXh0IiwidXNlQXV0aCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1bnN1YnNjcmliZSIsInVpZCIsImVtYWlsIiwiZGlzcGxheU5hbWUiLCJzaWdudXAiLCJwYXNzd29yZCIsImxvZ2luIiwibG9nb3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/header.css */ \"./styles/header.css\");\n/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_header_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_numbers_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/numbers.css */ \"./styles/numbers.css\");\n/* harmony import */ var _styles_numbers_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_numbers_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ProtectedRoute */ \"./components/ProtectedRoute.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__, _components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_7__]);\n([_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__, _components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst noAuthRequired = [\n    '/',\n    '/login',\n    '/signup',\n    '/404'\n];\nfunction MyApp({ Component , pageProps  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__.AuthContextProvider, {\n        children: noAuthRequired.includes(router.pathname) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\developer\\\\Desktop\\\\Gol\\\\GolLotteryWeb\\\\pages\\\\_app.tsx\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProtectedRoute__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\developer\\\\Desktop\\\\Gol\\\\GolLotteryWeb\\\\pages\\\\_app.tsx\",\n                lineNumber: 24,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\developer\\\\Desktop\\\\Gol\\\\GolLotteryWeb\\\\pages\\\\_app.tsx\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\developer\\\\Desktop\\\\Gol\\\\GolLotteryWeb\\\\pages\\\\_app.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTZDO0FBQ2hCO0FBQ0M7QUFDQTtBQUc4QjtBQUNyQjtBQUNrQjtBQUV6RCxLQUFLLENBQUNHLGNBQWMsR0FBRyxDQUFDO0lBQUEsQ0FBRztJQUFFLENBQVE7SUFBRSxDQUFTO0lBQUUsQ0FBTTtBQUFBLENBQUM7U0FFaERDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsRUFBRSxDQUFDO0lBQ2xELEtBQUssQ0FBQ0MsTUFBTSxHQUFHTixzREFBUztJQUV4QixNQUFNLDZFQUNIRCxxRUFBbUI7a0JBQ2pCRyxjQUFjLENBQUNLLFFBQVEsQ0FBQ0QsTUFBTSxDQUFDRSxRQUFRLGdGQUNyQ0osU0FBUztlQUFLQyxTQUFTOzs7OzsrRkFFdkJKLGtFQUFjO2tHQUNaRyxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvbGxvdHRlcnkvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9oZWFkZXIuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvbnVtYmVycy5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXHJcbmltcG9ydCB7IEF1dGhDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFByb3RlY3RlZFJvdXRlIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvdGVjdGVkUm91dGUnXHJcblxyXG5jb25zdCBub0F1dGhSZXF1aXJlZCA9IFsnLycsICcvbG9naW4nLCAnL3NpZ251cCcsICcvNDA0J11cclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgIHtub0F1dGhSZXF1aXJlZC5pbmNsdWRlcyhyb3V0ZXIucGF0aG5hbWUpID8gKFxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8UHJvdGVjdGVkUm91dGU+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9Qcm90ZWN0ZWRSb3V0ZT5cclxuICAgICAgKX1cclxuICAgIDwvQXV0aENvbnRleHRQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dFByb3ZpZGVyIiwidXNlUm91dGVyIiwiUHJvdGVjdGVkUm91dGUiLCJub0F1dGhSZXF1aXJlZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaW5jbHVkZXMiLCJwYXRobmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/header.css":
/*!***************************!*\
  !*** ./styles/header.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/numbers.css":
/*!****************************!*\
  !*** ./styles/numbers.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();