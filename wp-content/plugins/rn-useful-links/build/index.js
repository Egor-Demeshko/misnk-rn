/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/buttons/DeleteButton.jsx":
/*!*************************************************!*\
  !*** ./src/components/buttons/DeleteButton.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteButton)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function DeleteButton({
  onDelete
}) {
  const [popup, setPopup] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  function cancel(e) {
    e.stopPropagation();
    setPopup(false);
  }
  function deleteSlide(e) {
    e.stopPropagation();
    setPopup(false);
    setTimeout(() => onDelete());
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "rn-useful-links-editor__delete",
    onClick: () => setPopup(true),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Удалить слайд", "rn-useful-links"),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Dashicon, {
      icon: "no"
    }), popup && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Popover, {
      className: "rn-useful-links-editor__delete_popup_wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "rn-useful-links-editor__delete_popup",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Вы уверены, что хотите удалить этот один слайд", "rn-slider")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "rn-useful-links-editor__delete_popup-buttons",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            variant: "primary",
            onClick: cancel,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Отмена", "rn-slider")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            isDestructive: true,
            onClick: deleteSlide,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Удалить", "rn-slider")
          })]
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/components/controllinkdata/AddLink.jsx":
/*!****************************************************!*\
  !*** ./src/components/controllinkdata/AddLink.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddLink)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_stateShare_imagePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/stateShare/imagePicker */ "./src/js/stateShare/imagePicker.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_objects_linkData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/objects/linkData */ "./src/js/objects/linkData.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function AddLink({
  title = "Добавить ссылку",
  icon = "plus",
  link = null,
  linksCount
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "rn-useful-links-editor__card",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
      className: "rn-useful-links-editor__add-button",
      onClick: () => (0,_js_stateShare_imagePicker__WEBPACK_IMPORTED_MODULE_1__.activateRedactor)(link !== null && link !== void 0 ? link : (0,_js_objects_linkData__WEBPACK_IMPORTED_MODULE_3__["default"])(linksCount + 1)),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Dashicon, {
          icon: icon
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        children: [" ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(title, "rn-useful-links"), " "]
      })]
    })
  });
}

/***/ }),

/***/ "./src/components/controllinkdata/ControlImageFromRow.jsx":
/*!****************************************************************!*\
  !*** ./src/components/controllinkdata/ControlImageFromRow.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ControlImageFromRow)
/* harmony export */ });
/* harmony import */ var _AddLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddLink */ "./src/components/controllinkdata/AddLink.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function ControlImageFromRow({
  link
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "rn-useful-links-editor__image-controll",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_AddLink__WEBPACK_IMPORTED_MODULE_0__["default"], {
      title: "Изменить информацию",
      icon: "admin-customizer",
      link: link
    })
  });
}

/***/ }),

/***/ "./src/components/controllinkdata/ImagePicker.jsx":
/*!********************************************************!*\
  !*** ./src/components/controllinkdata/ImagePicker.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImagePicker)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function ImagePicker({
  updateData,
  link = null
}) {
  const url = link ? link?.imgUrl : null;
  const [urlState, setUrlState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(url);
  function ImageChoosens(data) {
    const url = data.sizes.medium.url;
    setUrlState(url);
    updateData({
      imgUrl: url
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUploadCheck, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
        onSelect: ImageChoosens,
        render: ({
          open
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "useful-links-editor__image_picker",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
            className: "useful-links-editor__image",
            src: !urlState ? usefulLinks.pluginUrl + "assets/menu_image_placeholder.jpeg" : urlState
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(AddPicture, {
            open: open
          })]
        })
      })
    })
  });
}
function AddPicture({
  open
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
    onClick: open,
    className: "useful-link-editor__add_image",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      icon: "plus"
    })
  });
}

/***/ }),

/***/ "./src/components/controllinkdata/ImageSetting.jsx":
/*!*********************************************************!*\
  !*** ./src/components/controllinkdata/ImageSetting.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageSetting)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ImagePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImagePicker */ "./src/components/controllinkdata/ImagePicker.jsx");
/* harmony import */ var _inputs_InputWithLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inputs/InputWithLabel */ "./src/components/inputs/InputWithLabel.jsx");
/* harmony import */ var _js_stateShare_imagePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../js/stateShare/imagePicker */ "./src/js/stateShare/imagePicker.js");
/* harmony import */ var _js_objects_linkData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../js/objects/linkData */ "./src/js/objects/linkData.js");
/* harmony import */ var _usefullinks_workOnLinks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../usefullinks/workOnLinks */ "./src/components/usefullinks/workOnLinks.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










function ImageSetting({
  updateLinks,
  linksCount
}) {
  var _linkData$link, _linkData$title;
  const [linkData, setLinkData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  function updateData(data) {
    setLinkData({
      ...linkData,
      ...data
    });
  }
  function saveData() {
    debugger;
    if (linkData.id <= linksCount) {
      updateLinks({
        ...linkData,
        type: _usefullinks_workOnLinks__WEBPACK_IMPORTED_MODULE_8__.UPDATE_LINK
      });
    } else {
      updateLinks({
        ...linkData,
        type: _usefullinks_workOnLinks__WEBPACK_IMPORTED_MODULE_8__.ADD_LINK
      });
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    _js_stateShare_imagePicker__WEBPACK_IMPORTED_MODULE_6__.CardPickerState.subscribe(value => {
      if (!value.id || linkData && linkData.id === value.id) return;
      const activeData = (0,_js_objects_linkData__WEBPACK_IMPORTED_MODULE_7__.createActiveData)(value);
      setLinkData(activeData);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    children: linkData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Panel, {
      name: "rn-usefullinks-link",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Редактирование ссылки"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
        className: "useful-links-editor__panel",
        icon: "heading",
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Редактирование ссылки"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ImagePicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
          updateData: updateData,
          link: linkData
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_inputs_InputWithLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
          updateData: updateData,
          field: "link",
          value: (_linkData$link = linkData?.link) !== null && _linkData$link !== void 0 ? _linkData$link : "",
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Укажите сcылку для перехода:")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_inputs_InputWithLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
          updateData: updateData,
          field: "title",
          value: (_linkData$title = linkData?.title) !== null && _linkData$title !== void 0 ? _linkData$title : "",
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Укажите заголовок для ссылки:")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          onClick: saveData,
          className: "rn-useful-links-editor__save",
          isPrimary: true,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Сохранить", "rn-useful-links")
        })]
      })
    }, linkData.id)
  });
}

/***/ }),

/***/ "./src/components/inputs/InputWithLabel.jsx":
/*!**************************************************!*\
  !*** ./src/components/inputs/InputWithLabel.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputWithLabel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function InputWithLabel({
  updateData,
  value,
  field,
  title
}) {
  const [valueState, setValueState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);
  function updateFromInput(e) {
    var _e$target;
    const target = (_e$target = e.target) !== null && _e$target !== void 0 ? _e$target : null;
    if (!target) return;
    updateData({
      [field]: target.value
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
    className: "rn-useful-links-editor__input-with-label",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
      onChange: updateFromInput,
      value: valueState,
      onInput: e => setValueState(e.target.value)
    })]
  });
}

/***/ }),

/***/ "./src/components/linkcard/LinkCard.jsx":
/*!**********************************************!*\
  !*** ./src/components/linkcard/LinkCard.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LinkCard)
/* harmony export */ });
/* harmony import */ var _controllinkdata_ControlImageFromRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllinkdata/ControlImageFromRow */ "./src/components/controllinkdata/ControlImageFromRow.jsx");
/* harmony import */ var _usefullinks_workOnLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../usefullinks/workOnLinks */ "./src/components/usefullinks/workOnLinks.js");
/* harmony import */ var _buttons_DeleteButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buttons/DeleteButton */ "./src/components/buttons/DeleteButton.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function LinkCard({
  link,
  updateLinks
}) {
  function onDelete() {
    updateLinks({
      id: link.id,
      type: _usefullinks_workOnLinks__WEBPACK_IMPORTED_MODULE_1__.DELETE_LINK
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "rn-useful-links-editor__card",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "rn-useful-links-editor__card-img-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        className: "rn-useful-links-editor__card-img",
        src: link.imgUrl
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      className: "rn-useful-links-editor__card-text",
      children: link?.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_controllinkdata_ControlImageFromRow__WEBPACK_IMPORTED_MODULE_0__["default"], {
      link: link
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_buttons_DeleteButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: link.id,
      onDelete: onDelete
    })]
  });
}

/***/ }),

/***/ "./src/components/usefullinks/UsefulLinks.jsx":
/*!****************************************************!*\
  !*** ./src/components/usefullinks/UsefulLinks.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UsefulLinks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _workOnLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workOnLinks */ "./src/components/usefullinks/workOnLinks.js");
/* harmony import */ var _linkcard_LinkCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../linkcard/LinkCard */ "./src/components/linkcard/LinkCard.jsx");
/* harmony import */ var _controllinkdata_AddLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controllinkdata/AddLink */ "./src/components/controllinkdata/AddLink.jsx");
/* harmony import */ var _controllinkdata_ImageSetting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controllinkdata/ImageSetting */ "./src/components/controllinkdata/ImageSetting.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








function UsefulLinks({
  attributes,
  setAttributes
}) {
  // blockTitle // linksData
  const {
    blockTitle,
    linksData
  } = attributes;
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(blockTitle);
  const [links, updateLinks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((state, action) => {
    const newLinks = (0,_workOnLinks__WEBPACK_IMPORTED_MODULE_3__["default"])({
      links: state,
      action
    });
    setTimeout(() => setAttributes({
      linksData: newLinks
    }), 50);
    return newLinks;
  }, linksData);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("section", {
    className: "rn-useful-links-editor",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_controllinkdata_ImageSetting__WEBPACK_IMPORTED_MODULE_6__["default"], {
      updateLinks: updateLinks,
      linksCount: links.length
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
      tagName: "h4",
      value: title,
      className: "rn-useful-links-editor__title rn-useful-links-editor__is-hovered",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Введите название блока: "),
      onChange: value => setTitle(value)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "rn-useful-links-editor__list",
      children: [links.length > 0 && links.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_linkcard_LinkCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        link: link,
        updateLinks: updateLinks
      }, link.id)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_controllinkdata_AddLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
        linksCount: links.length
      })]
    })]
  });
}

/***/ }),

/***/ "./src/components/usefullinks/workOnLinks.js":
/*!***************************************************!*\
  !*** ./src/components/usefullinks/workOnLinks.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_LINK: () => (/* binding */ ADD_LINK),
/* harmony export */   DELETE_LINK: () => (/* binding */ DELETE_LINK),
/* harmony export */   UPDATE_LINK: () => (/* binding */ UPDATE_LINK),
/* harmony export */   "default": () => (/* binding */ wirkOnLinks)
/* harmony export */ });
const DELETE_LINK = 'delete_link';
const ADD_LINK = 'add_link';
const UPDATE_LINK = 'update_link';
function wirkOnLinks({
  links,
  action
}) {
  const {
    type
  } = action;
  switch (type) {
    case DELETE_LINK:
      return deleteLink(links, action);
    case ADD_LINK:
      return addLink(links, action);
    case UPDATE_LINK:
      return updateLink(links, action);
    default:
      return links;
  }
}
function deleteLink(links, action) {
  const {
    id
  } = action;
  return links.filter(link => link.id !== id);
}
function addLink(links, action) {
  delete action.type;
  return [...links, action];
}
function updateLink(links, action) {
  const {
    id
  } = action;
  delete action.type;
  return links.map(link => {
    if (link.id === id) {
      return {
        ...link,
        ...action
      };
    }
    return link;
  });
}

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.css */ "./src/editor.css");
/* harmony import */ var _components_usefullinks_UsefulLinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/usefullinks/UsefulLinks */ "./src/components/usefullinks/UsefulLinks.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

function Edit({
  attributes,
  setAttributes
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_usefullinks_UsefulLinks__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      setAttributes: setAttributes
    })
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/js/objects/linkData.js":
/*!************************************!*\
  !*** ./src/js/objects/linkData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createActiveData: () => (/* binding */ createActiveData),
/* harmony export */   "default": () => (/* binding */ createLinkData)
/* harmony export */ });
const linkDataFields = ['id', 'title', 'imgUrl', 'link'];
function createLinkData(id) {
  const obj = {};
  setFields(obj, id);
  return Object.seal(obj);
}
function createActiveData(data) {
  const obj = {};
  setFields(obj, null, data);
  return Object.seal(obj);
}
function setFields(obj, id = null, data = null) {
  if (data && !data.id) {
    throw new Exception("[RN-Useful-Links]: Link data must have id field");
  }
  linkDataFields.forEach(field => {
    if (data) {
      obj[field] = data[field];
    } else if (field === 'id') {
      obj[field] = id;
    } else {
      obj[field] = '';
    }
  });
}

/***/ }),

/***/ "./src/js/stateShare/createWritable.js":
/*!*********************************************!*\
  !*** ./src/js/stateShare/createWritable.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ writable)
/* harmony export */ });
function writable(initialValue = null) {
  return Object.seal({
    value: initialValue,
    callbacks: new Set(),
    subscribe,
    update
  });
  function subscribe(callback) {
    this.callbacks.add(callback);
  }
  function update(fn) {
    this.value = fn(this.value);
    this.callbacks.forEach(callback => callback(this.value));
  }
}

/***/ }),

/***/ "./src/js/stateShare/imagePicker.js":
/*!******************************************!*\
  !*** ./src/js/stateShare/imagePicker.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardPickerState: () => (/* binding */ CardPickerState),
/* harmony export */   activateRedactor: () => (/* binding */ activateRedactor)
/* harmony export */ });
/* harmony import */ var _createWritable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWritable */ "./src/js/stateShare/createWritable.js");

const CardPickerState = (0,_createWritable__WEBPACK_IMPORTED_MODULE_0__["default"])();
function activateRedactor(link) {
  CardPickerState.update(oldValue => link);
}

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
function save() {
  return null;
}

/***/ }),

/***/ "./src/editor.css":
/*!************************!*\
  !*** ./src/editor.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/rn-useful-links","version":"0.1.0","title":"Блок Полезные ссылки","category":"widgets","icon":"layout","description":"Блок позволяет добавлять ссылки и украшать их картинками","example":{},"supports":{"html":false},"textdomain":"rn-useful-links","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"blockTitle":{"type":"string","default":"Полезные ссылки"},"linksData":{"type":"array","default":[]}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrn_useful_links"] = self["webpackChunkrn_useful_links"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map