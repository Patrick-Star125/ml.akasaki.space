"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[3713],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62782:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return f},metadata:function(){return m},toc:function(){return v},default:function(){return y}});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&p(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&p(e,t,n[t]);return e};const d={sidebar_position:8},f="VGG\u7684\u4ee3\u7801\u5b9e\u73b0",m={unversionedId:"ch2p2/[8]VGGNet-code",id:"ch2p2/[8]VGGNet-code",isDocsHomePage:!1,title:"VGG\u7684\u4ee3\u7801\u5b9e\u73b0",description:"\u8fd9\u91cc\u4e0d\u4f1a\u5305\u542b\u4efb\u4f55\u8bb2\u89e3\u7684\u5185\u5bb9\uff0c\u8bb2\u89e3\u7684\u5185\u5bb9\u8bf7\u53c2\u8003VGG\uff1a\u53ef\u590d\u7528\u7684\u7f51\u7edc\u5757VGGNet)\u3002",source:"@site/docs/ch2p2/[8]VGGNet-code.mdx",sourceDirName:"ch2p2",slug:"/ch2p2/[8]VGGNet-code",permalink:"/ch2p2/[8]VGGNet-code",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"VGG\uff1a\u53ef\u590d\u7528\u7684\u7f51\u7edc\u5757",permalink:"/ch2p2/[7]VGGNet"},next:{title:"GoogLeNet\uff1a\u81f4\u656cLeNet",permalink:"/ch2p2/[9]GoogLeNet"}},v=[],g={toc:v};function y(e){var n,t=e,{components:o}=t,p=((e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=u(u({},g),p),a(n,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"vgg\u7684\u4ee3\u7801\u5b9e\u73b0"}),"VGG\u7684\u4ee3\u7801\u5b9e\u73b0"),(0,r.kt)("p",null,"\u8fd9\u91cc\u4e0d\u4f1a\u5305\u542b\u4efb\u4f55\u8bb2\u89e3\u7684\u5185\u5bb9\uff0c\u8bb2\u89e3\u7684\u5185\u5bb9\u8bf7\u53c2\u8003",(0,r.kt)("a",u({parentName:"p"},{href:"./%5B7%5DVGGNet"}),"VGG\uff1a\u53ef\u590d\u7528\u7684\u7f51\u7edc\u5757"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-python"}),"import tensorflow as tf\nfrom tensorflow.keras.layers import Conv2D, BatchNormalization, Activation, MaxPool2D, Dropout, Flatten, Dense\n\n(x_train, y_train), (x_test, y_test) = tf.keras.datasets.cifar10.load_data()\nx_train, x_test = x_train / 255.0, x_test / 255.0\n\nmodel = tf.keras.Sequential([\n    # \u5377\u79ef\u5c42 01\n    Conv2D(filters=64, kernel_size=(3, 3), padding='same'),\n    BatchNormalization(),  # BN\u5c42\n    Activation('relu'),  # \u6fc0\u6d3b\u5c42\n    # \u5377\u79ef\u5c42 02\n    Conv2D(filters=64, kernel_size=(3, 3), padding='same', ),\n    BatchNormalization(),  # BN\u5c42\n    Activation('relu'),  # \u6fc0\u6d3b\u5c42\n    MaxPool2D(pool_size=(2, 2), strides=2, padding='same'),  # \u6c60\u5316\u5c42\n    Dropout(0.2),  # \u4e22\u5f03\u5c42\n    # \u5377\u79ef\u5c42 03\n    Conv2D(filters=128, kernel_size=(3, 3), padding='same'),\n    BatchNormalization(),  # BN\u5c42\n    Activation('relu'),  # \u6fc0\u6d3b\u5c42\n    # \u5377\u79ef\u5c42 04\n    Conv2D(filters=128, kernel_size=(3, 3), padding='same'),\n    BatchNormalization(),  # BN\u5c42\n    Activation('relu'),  # \u6fc0\u6d3b\u5c42\n    MaxPool2D(pool_size=(2, 2), strides=2, padding='same'),  # \u6c60\u5316\u5c42\n    Dropout(0.2),  # \u4e22\u5f03\u5c42\n    # \u5377\u79ef\u5c42 05\n    Conv2D(filters=256, kernel_size=(3, 3), padding='same'),\n    BatchNormalization(),  # BN\u5c421\n    Activation('relu'),  # \u6fc0\u6d3b\u5c421\n    # \u5377\u79ef\u5c42 06\n    Conv2D(filters=256, kernel_size=(3, 3), padding='same'),\n    BatchNormalization(),  # BN\u5c421\n    Activation('relu'),  # \u6fc0\u6d3b\u5c421\n    Conv2D(filters=256, kernel_size=(3, 3), padding='same'),\n    BatchNormalization(),  # BN\u5c421\n    Activation('relu'),  # \u6fc0\u6d3b\u5c421\n    # \u5377\u79ef\u5c42 07\n    MaxPool2D(pool_size=(2, 2), strides=2, padding='same'),  # \u6c60\u5316\u5c42\n    Dropout(0.2),  # \u4e22\u5f03\u5c42\n    Conv2D(filters=512, kernel_size=(3, 3), padding='same'),\n    BatchNormalization(),  # BN\u5c42\n    Activation('relu'),  # \u6fc0\u6d3b\u5c42\n    # \u5377\u79ef\u5c42 08\n    Conv2D(filters=512, kernel_size=(3, 3), padding='same'),\n    BatchNormalization(),  # BN\u5c42\n    Activation('relu'),  # \u6fc0\u6d3b\u5c42\n    # \u5377\u79ef\u5c42 09\n    Conv2D(filters=512, kernel_size=(3, 3), padding='same'),\n    BatchNormalization(),  # BN\u5c42\n    Activation('relu'),  # \u6fc0\u6d3b\u5c42\n    MaxPool2D(pool_size=(2, 2), strides=2, padding='same'),\n    Dropout(0.2),\n    # \u5377\u79ef\u5c42 10\n    Conv2D(filters=512, kernel_size=(3, 3), padding='same'),\n    BatchNormalization(),  # BN\u5c42\n    Activation('relu'),  # \u6fc0\u6d3b\u5c42\n    # \u5377\u79ef\u5c42 11\n    Conv2D(filters=512, kernel_size=(3, 3), padding='same'),\n    BatchNormalization(),  # BN\u5c42\n    Activation('relu'),  # \u6fc0\u6d3b\u5c42\n    # \u5377\u79ef\u5c42 12\n    Conv2D(filters=512, kernel_size=(3, 3), padding='same'),\n    BatchNormalization(),  # BN\u5c42\n    Activation('relu'),  # \u6fc0\u6d3b\u5c42\n    MaxPool2D(pool_size=(2, 2), strides=2, padding='same'),  # \u6c60\u5316\u5c42\n    Dropout(0.2),  # \u4e22\u5f03\u5c42\n    # \u6253\u5e73\u8fdb\u5165\u5168\u8fde\u63a5\n    Flatten(),\n    Dense(512, activation='relu'),\n    Dropout(0.2),  # \u4e22\u5f03\u5c42\n    Dense(512, activation='relu'),\n    Dropout(0.2),  # \u4e22\u5f03\u5c42\n    Dense(10, activation='softmax')\n])\n\nmodel.compile(optimizer='adam',\n              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=False),\n              metrics=['sparse_categorical_accuracy'])\nmodel.fit(x_train, y_train, batch_size=32, epochs=5, validation_data=(x_test, y_test))\n")))}y.isMDXComponent=!0}}]);