(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: start, __wbindgen_string_new, __wbindgen_object_drop_ref, __widl_f_get_element_by_id_Document, __widl_instanceof_HTMLCanvasElement, __widl_f_get_context_HTMLCanvasElement, __widl_instanceof_WebGLRenderingContext, __widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext, __widl_f_attach_shader_WebGLRenderingContext, __widl_f_bind_buffer_WebGLRenderingContext, __widl_f_clear_WebGLRenderingContext, __widl_f_clear_color_WebGLRenderingContext, __widl_f_compile_shader_WebGLRenderingContext, __widl_f_create_buffer_WebGLRenderingContext, __widl_f_create_program_WebGLRenderingContext, __widl_f_create_shader_WebGLRenderingContext, __widl_f_draw_arrays_WebGLRenderingContext, __widl_f_enable_vertex_attrib_array_WebGLRenderingContext, __widl_f_get_program_info_log_WebGLRenderingContext, __widl_f_get_program_parameter_WebGLRenderingContext, __widl_f_get_shader_info_log_WebGLRenderingContext, __widl_f_get_shader_parameter_WebGLRenderingContext, __widl_f_link_program_WebGLRenderingContext, __widl_f_shader_source_WebGLRenderingContext, __widl_f_use_program_WebGLRenderingContext, __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext, __widl_instanceof_Window, __widl_f_document_Window, __wbindgen_is_undefined, __wbindgen_object_clone_ref, __wbg_buffer_d31feadf69cb45fc, __wbg_newnoargs_6ad69a50998c5acb, __wbg_call_4499dca0c553c196, __wbg_globalThis_36c1f2e85948e420, __wbg_self_73c7a601ff857345, __wbg_window_ca735e04cb2b0566, __wbg_global_99312a595fd2e761, __wbg_newwithbyteoffsetandlength_a5176866b4bc401c, __wbindgen_boolean_get, __wbindgen_throw, __wbindgen_rethrow, __wbindgen_memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, TextEncoder, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_element_by_id_Document\", function() { return __widl_f_get_element_by_id_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_HTMLCanvasElement\", function() { return __widl_instanceof_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_context_HTMLCanvasElement\", function() { return __widl_f_get_context_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_WebGLRenderingContext\", function() { return __widl_instanceof_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext\", function() { return __widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_attach_shader_WebGLRenderingContext\", function() { return __widl_f_attach_shader_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_bind_buffer_WebGLRenderingContext\", function() { return __widl_f_bind_buffer_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_clear_WebGLRenderingContext\", function() { return __widl_f_clear_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_clear_color_WebGLRenderingContext\", function() { return __widl_f_clear_color_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_compile_shader_WebGLRenderingContext\", function() { return __widl_f_compile_shader_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_create_buffer_WebGLRenderingContext\", function() { return __widl_f_create_buffer_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_create_program_WebGLRenderingContext\", function() { return __widl_f_create_program_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_create_shader_WebGLRenderingContext\", function() { return __widl_f_create_shader_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_draw_arrays_WebGLRenderingContext\", function() { return __widl_f_draw_arrays_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_enable_vertex_attrib_array_WebGLRenderingContext\", function() { return __widl_f_enable_vertex_attrib_array_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_program_info_log_WebGLRenderingContext\", function() { return __widl_f_get_program_info_log_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_program_parameter_WebGLRenderingContext\", function() { return __widl_f_get_program_parameter_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_shader_info_log_WebGLRenderingContext\", function() { return __widl_f_get_shader_info_log_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_shader_parameter_WebGLRenderingContext\", function() { return __widl_f_get_shader_parameter_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_link_program_WebGLRenderingContext\", function() { return __widl_f_link_program_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_shader_source_WebGLRenderingContext\", function() { return __widl_f_shader_source_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_use_program_WebGLRenderingContext\", function() { return __widl_f_use_program_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext\", function() { return __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Window\", function() { return __widl_instanceof_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_document_Window\", function() { return __widl_f_document_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_d31feadf69cb45fc\", function() { return __wbg_buffer_d31feadf69cb45fc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_6ad69a50998c5acb\", function() { return __wbg_newnoargs_6ad69a50998c5acb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_4499dca0c553c196\", function() { return __wbg_call_4499dca0c553c196; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_36c1f2e85948e420\", function() { return __wbg_globalThis_36c1f2e85948e420; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_73c7a601ff857345\", function() { return __wbg_self_73c7a601ff857345; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_ca735e04cb2b0566\", function() { return __wbg_window_ca735e04cb2b0566; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_99312a595fd2e761\", function() { return __wbg_global_99312a595fd2e761; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithbyteoffsetandlength_a5176866b4bc401c\", function() { return __wbg_newwithbyteoffsetandlength_a5176866b4bc401c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_boolean_get\", function() { return __wbindgen_boolean_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return __wbindgen_memory; });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n\n\nfunction logError(e) {\n    let error = (function () {\n        try {\n            return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n/**\n*/\nfunction start() {\n    try {\n        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"start\"]();\n    } catch (e) {\n        logError(e)\n    }\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction _assertBoolean(n) {\n    if (typeof(n) !== 'boolean') {\n        throw new Error('expected a boolean argument');\n    }\n}\n\nfunction handleError(e) {\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm(arg) {\n\n    if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n    let len = arg.length;\n    let ptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](len);\n\n    const mem = getUint8Memory();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n        if (ret.read != arg.length) throw new Error('failed to pass whole string');\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory = null;\nfunction getInt32Memory() {\n    if (cachegetInt32Memory === null || cachegetInt32Memory.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory;\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    try {\n        const ret = getStringFromWasm(arg0, arg1);\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    try {\n        takeObject(arg0);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_get_element_by_id_Document = function(arg0, arg1, arg2) {\n    try {\n        const ret = getObject(arg0).getElementById(getStringFromWasm(arg1, arg2));\n        return isLikeNone(ret) ? 0 : addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_instanceof_HTMLCanvasElement = function(arg0) {\n    try {\n        const ret = getObject(arg0) instanceof HTMLCanvasElement;\n        _assertBoolean(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_get_context_HTMLCanvasElement = function(arg0, arg1, arg2) {\n    try {\n        try {\n            const ret = getObject(arg0).getContext(getStringFromWasm(arg1, arg2));\n            return isLikeNone(ret) ? 0 : addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_instanceof_WebGLRenderingContext = function(arg0) {\n    try {\n        const ret = getObject(arg0) instanceof WebGLRenderingContext;\n        _assertBoolean(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext = function(arg0, arg1, arg2, arg3) {\n    try {\n        getObject(arg0).bufferData(arg1 >>> 0, getObject(arg2), arg3 >>> 0);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_attach_shader_WebGLRenderingContext = function(arg0, arg1, arg2) {\n    try {\n        getObject(arg0).attachShader(getObject(arg1), getObject(arg2));\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_bind_buffer_WebGLRenderingContext = function(arg0, arg1, arg2) {\n    try {\n        getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_clear_WebGLRenderingContext = function(arg0, arg1) {\n    try {\n        getObject(arg0).clear(arg1 >>> 0);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_clear_color_WebGLRenderingContext = function(arg0, arg1, arg2, arg3, arg4) {\n    try {\n        getObject(arg0).clearColor(arg1, arg2, arg3, arg4);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_compile_shader_WebGLRenderingContext = function(arg0, arg1) {\n    try {\n        getObject(arg0).compileShader(getObject(arg1));\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_create_buffer_WebGLRenderingContext = function(arg0) {\n    try {\n        const ret = getObject(arg0).createBuffer();\n        return isLikeNone(ret) ? 0 : addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_create_program_WebGLRenderingContext = function(arg0) {\n    try {\n        const ret = getObject(arg0).createProgram();\n        return isLikeNone(ret) ? 0 : addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_create_shader_WebGLRenderingContext = function(arg0, arg1) {\n    try {\n        const ret = getObject(arg0).createShader(arg1 >>> 0);\n        return isLikeNone(ret) ? 0 : addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_draw_arrays_WebGLRenderingContext = function(arg0, arg1, arg2, arg3) {\n    try {\n        getObject(arg0).drawArrays(arg1 >>> 0, arg2, arg3);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_enable_vertex_attrib_array_WebGLRenderingContext = function(arg0, arg1) {\n    try {\n        getObject(arg0).enableVertexAttribArray(arg1 >>> 0);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_get_program_info_log_WebGLRenderingContext = function(arg0, arg1, arg2) {\n    try {\n        const ret = getObject(arg1).getProgramInfoLog(getObject(arg2));\n        const ptr0 = isLikeNone(ret) ? 0 : passStringToWasm(ret);\n        const len0 = WASM_VECTOR_LEN;\n        const ret0 = ptr0;\n        const ret1 = len0;\n        getInt32Memory()[arg0 / 4 + 0] = ret0;\n        getInt32Memory()[arg0 / 4 + 1] = ret1;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_get_program_parameter_WebGLRenderingContext = function(arg0, arg1, arg2) {\n    try {\n        const ret = getObject(arg0).getProgramParameter(getObject(arg1), arg2 >>> 0);\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_get_shader_info_log_WebGLRenderingContext = function(arg0, arg1, arg2) {\n    try {\n        const ret = getObject(arg1).getShaderInfoLog(getObject(arg2));\n        const ptr0 = isLikeNone(ret) ? 0 : passStringToWasm(ret);\n        const len0 = WASM_VECTOR_LEN;\n        const ret0 = ptr0;\n        const ret1 = len0;\n        getInt32Memory()[arg0 / 4 + 0] = ret0;\n        getInt32Memory()[arg0 / 4 + 1] = ret1;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_get_shader_parameter_WebGLRenderingContext = function(arg0, arg1, arg2) {\n    try {\n        const ret = getObject(arg0).getShaderParameter(getObject(arg1), arg2 >>> 0);\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_link_program_WebGLRenderingContext = function(arg0, arg1) {\n    try {\n        getObject(arg0).linkProgram(getObject(arg1));\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_shader_source_WebGLRenderingContext = function(arg0, arg1, arg2, arg3) {\n    try {\n        getObject(arg0).shaderSource(getObject(arg1), getStringFromWasm(arg2, arg3));\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_use_program_WebGLRenderingContext = function(arg0, arg1) {\n    try {\n        getObject(arg0).useProgram(getObject(arg1));\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {\n    try {\n        getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_instanceof_Window = function(arg0) {\n    try {\n        const ret = getObject(arg0) instanceof Window;\n        _assertBoolean(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __widl_f_document_Window = function(arg0) {\n    try {\n        const ret = getObject(arg0).document;\n        return isLikeNone(ret) ? 0 : addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_is_undefined = function(arg0) {\n    try {\n        const ret = getObject(arg0) === undefined;\n        _assertBoolean(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_object_clone_ref = function(arg0) {\n    try {\n        const ret = getObject(arg0);\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_buffer_d31feadf69cb45fc = function(arg0) {\n    try {\n        const ret = getObject(arg0).buffer;\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_newnoargs_6ad69a50998c5acb = function(arg0, arg1) {\n    try {\n        const ret = new Function(getStringFromWasm(arg0, arg1));\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_call_4499dca0c553c196 = function(arg0, arg1) {\n    try {\n        try {\n            const ret = getObject(arg0).call(getObject(arg1));\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_globalThis_36c1f2e85948e420 = function() {\n    try {\n        try {\n            const ret = globalThis.globalThis;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_self_73c7a601ff857345 = function() {\n    try {\n        try {\n            const ret = self.self;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_window_ca735e04cb2b0566 = function() {\n    try {\n        try {\n            const ret = window.window;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_global_99312a595fd2e761 = function() {\n    try {\n        try {\n            const ret = global.global;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_newwithbyteoffsetandlength_a5176866b4bc401c = function(arg0, arg1, arg2) {\n    try {\n        const ret = new Float32Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_boolean_get = function(arg0) {\n    const v = getObject(arg0);\n    try {\n        const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;\n        _assertNum(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    try {\n        throw new Error(getStringFromWasm(arg0, arg1));\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_rethrow = function(arg0) {\n    try {\n        throw takeObject(arg0);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_memory = function() {\n    try {\n        const ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"];\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, start, __wbindgen_exn_store, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./index.js */ \"./pkg/index.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);