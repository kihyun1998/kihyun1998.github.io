"use strict";(self.webpackChunkblogsaurus=self.webpackChunkblogsaurus||[]).push([[9292],{3905:(n,t,e)=>{e.d(t,{Zo:()=>s,kt:()=>f});var i=e(67294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,i,o=function(n,t){if(null==n)return{};var e,i,o={},r=Object.keys(n);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var d=i.createContext({}),c=function(n){var t=i.useContext(d),e=t;return n&&(e="function"==typeof n?n(t):a(a({},t),n)),e},s=function(n){var t=c(n.components);return i.createElement(d.Provider,{value:t},n.children)},x="mdxType",u={inlineCode:"code",wrapper:function(n){var t=n.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(n,t){var e=n.components,o=n.mdxType,r=n.originalType,d=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),x=c(e),p=o,f=x["".concat(d,".").concat(p)]||x[p]||u[p]||r;return e?i.createElement(f,a(a({ref:t},s),{},{components:e})):i.createElement(f,a({ref:t},s))}));function f(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var r=e.length,a=new Array(r);a[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=n,l[x]="string"==typeof n?n:o,a[1]=l;for(var c=2;c<r;c++)a[c]=e[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,e)}p.displayName="MDXCreateElement"},7681:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=e(87462),o=(e(67294),e(3905));const r={sidebar_position:50},a="50. [flutter] dynamic text box",l={unversionedId:"flutter/flutter50",id:"flutter/flutter50",title:"50. [flutter] dynamic text box",description:"---",source:"@site/docs/flutter/flutter50.md",sourceDirName:"flutter",slug:"/flutter/flutter50",permalink:"/docs/flutter/flutter50",draft:!1,tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"dartSidebar",previous:{title:"49. [flutter] Windows Flutter\ud3d0\uc1c4\ub9dd \uac1c\ubc1c\ud658\uacbd \uad6c\ucd95",permalink:"/docs/flutter/flutter49"},next:{title:"51. [flutter] [ERROR] \ud3d0\uc1c4\ub9dd package \uc5c5\ub370\uc774\ud2b8\uac00 \uc548\ub41c\ub2e4\uba74",permalink:"/docs/flutter/flutter51"}},d={},c=[{value:"\uae30\ubcf8\uc801\uc778 TextBox",id:"\uae30\ubcf8\uc801\uc778-textbox",level:2},{value:"\ucd5c\ub300 \uae38\uc774 \uc9c0\uc815 text box",id:"\ucd5c\ub300-\uae38\uc774-\uc9c0\uc815-text-box",level:2},{value:"dynamic text box",id:"dynamic-text-box",level:2},{value:"tooltip \uc801\uc6a9",id:"tooltip-\uc801\uc6a9",level:3}],s={toc:c},x="wrapper";function u(n){let{components:t,...e}=n;return(0,o.kt)(x,(0,i.Z)({},s,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"50-flutter-dynamic-text-box"},"50. ","[flutter]"," dynamic text box"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\ub3d9\uc801 \ud14d\uc2a4\ud2b8 \ubc15\uc2a4 \uc608\uc81c\uc785\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\uae30\ubcf8\uc801\uc778-textbox"},"\uae30\ubcf8\uc801\uc778 TextBox"),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:flutter/material.dart';\n\nclass BasicTextBox extends StatelessWidget {\n  final String text;\n  final IconData icon;\n\n  const BasicTextBox({\n    super.key,\n    required this.text,\n    required this.icon,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n      padding: const EdgeInsets.all(12),\n      decoration: BoxDecoration(\n        color: Colors.grey[200],\n        borderRadius: BorderRadius.circular(8),\n      ),\n      child: Row(\n        children: [\n          Icon(icon),\n          const SizedBox(width: 8),\n          Text(text),\n        ],\n      ),\n    );\n  }\n}\n")),(0,o.kt)("p",null,"\uae30\ubcf8\uc801\uc778 textbox\ub294 \uc774\ub807\uac8c \uc124\uacc4\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\ucd5c\ub300-\uae38\uc774-\uc9c0\uc815-text-box"},"\ucd5c\ub300 \uae38\uc774 \uc9c0\uc815 text box"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"\nclass MaxWidthTextBox extends StatelessWidget {\n  final String text;\n  final IconData icon;\n  final double maxWidth;\n\n  const MaxWidthTextBox({\n    super.key,\n    required this.text,\n    required this.icon,\n    this.maxWidth = 300,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n      constraints: BoxConstraints(maxWidth: maxWidth),\n      padding: const EdgeInsets.all(12),\n      decoration: BoxDecoration(\n        color: Colors.grey[200],\n        borderRadius: BorderRadius.circular(8),\n      ),\n      child: Row(\n        children: [\n          Icon(icon),\n          const SizedBox(width: 8),\n          Expanded(\n            child: Text(\n              text,\n              overflow: TextOverflow.ellipsis,\n            ),\n          ),\n        ],\n      ),\n    );\n  }\n}\n\n")),(0,o.kt)("p",null,"\uc774 text box\ub294 \ucd5c\ub300\uae38\uc774\uac00 \uc9c0\uc815\ub41c text box\uc785\ub2c8\ub2e4. \uc0ac\uc2e4\uc0c1 \uae30\ubcf8 text box\uc640\uc758 \ucc28\uc774\uac00 \uac70\uc758 \uc5c6\ub2e4\uace0 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uae30\ubcf8 text box\uc5d0\uc11c width\ub97c \uc124\uc815\ud55c \uc218\uc900.."),(0,o.kt)("h2",{id:"dynamic-text-box"},"dynamic text box"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\uc0ac\uc2e4 \uc774\uac70 \ubcf4\uc5ec\uc8fc\ub824\uace0 \uae00 \uc37c\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"class DynamicTextBox extends StatelessWidget {\n  final String text;\n  final IconData icon;\n  final double maxWidth;\n  final TextStyle? textStyle;\n  final Color backgroundColor;\n  final double iconSize;\n\n  const DynamicTextBox({\n    super.key,\n    required this.text,\n    required this.icon,\n    this.maxWidth = double.infinity,\n    this.textStyle,\n    this.backgroundColor = Colors.white,\n    this.iconSize = 24.0,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n      constraints: BoxConstraints(maxWidth: maxWidth),\n      child: IntrinsicWidth(\n        child: Container(\n          padding: const EdgeInsets.all(12),\n          decoration: BoxDecoration(\n            color: backgroundColor,\n            borderRadius: BorderRadius.circular(8.0),\n          ),\n          child: Row(\n            mainAxisSize: MainAxisSize.min,\n            children: [\n              Icon(\n                icon,\n                size: iconSize,\n              ),\n              const SizedBox(width: 8),\n              Expanded(\n                child: Text(\n                  text,\n                  style: textStyle,\n                  overflow: TextOverflow.ellipsis,\n                ),\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  }\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IntrinsicWidth")," \uc704\uc82f\uc744 \uc0ac\uc6a9\ud558\uace0 Row\uc5d0 ",(0,o.kt)("inlineCode",{parentName:"p"},"MainAxisSize.min"),"\uc744 \uc0ac\uc6a9\ud55c\ub2e4\uba74 \uac04\ub2e8\ud558\uac8c dynamic text box\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc800\ub294 \uc774\uac78 \ubab0\ub790\uc5b4\uc11c TextPainter\ub97c \uc0ac\uc6a9\ud574\uc11c Text \uae38\uc774\ub97c \uacc4\uc0b0\ud558\uace0.. \uadf8\ub7ac\ub294\ub370.. \uc774\uac8c \uc0ac\uae30\uc785\ub2c8\ub2e4 !!"),(0,o.kt)("p",null,"\uadf8\ub9ac\uace0 Container\ub85c \uac10\uc2f8\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"BoxConstraints"),"\ub85c \uac04\ub2e8\ud558\uac8c ",(0,o.kt)("inlineCode",{parentName:"p"},"maxWidth"),"\uae4c\uc9c0 \uc801\uc6a9\ud560 \uc218 \uc788\ub294\ub370 ",(0,o.kt)("inlineCode",{parentName:"p"},"maxWidth"),"\uc744 ",(0,o.kt)("inlineCode",{parentName:"p"},"double.infinity"),"\ub85c\ub3c4 \uc801\uc6a9\ud560 \uc218 \uc788\uae30\uc5d0 \uc544\uc8fc \uac04\ud3b8\ud569\ub2c8\ub2e4 !"),(0,o.kt)("h3",{id:"tooltip-\uc801\uc6a9"},"tooltip \uc801\uc6a9"),(0,o.kt)("p",null,"\uc0ac\uc2e4 Tooltip\uc801\uc6a9\uc774 \ud575\uc2ec\uc774\uc600\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"width\uac00 double.infinity\uc778 \uacbd\uc6b0\uc5d0 overflow \ub41c\uac70\uc5d0 \ub300\ud55c \ud0d0\uc9c0\uac00 \uc5b4\ub824\uc6e0\ub294\ub370 LayoutBuilder\ub97c \uc774\uc6a9\ud574\uc11c \uc2e4\uc81c \uc704\uc82f \uc0ac\uc774\uc988\uc640 \ube44\uad50\ud558\uac8c \ud558\uc5ec\uc11c \uad6c\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"class DynamicTextBox extends StatelessWidget {\n  final String text;\n  final IconData icon;\n  final double maxWidth;\n  final TextStyle? textStyle;\n  final Color backgroundColor;\n  final double iconSize;\n\n  const DynamicTextBox({\n    super.key,\n    required this.text,\n    required this.icon,\n    this.maxWidth = double.infinity,\n    this.textStyle,\n    this.backgroundColor = Colors.white,\n    this.iconSize = 24.0,\n  });\n\n  @override\n  Widget build(BuildContext context) {\n    return LayoutBuilder(\n      builder: (BuildContext context, BoxConstraints constraints) {\n        final effectiveMaxWidth =\n            maxWidth == double.infinity ? constraints.maxWidth : maxWidth;\n\n        // Icon\uc758 \uc2e4\uc81c \ud06c\uae30\ub97c \uace0\ub824\n        final iconWidth = iconSize;\n        const horizontalPadding = 24.0; // \uc88c\uc6b0 \ud328\ub529 12.0 * 2\n        const iconSpacing = 8.0;\n\n        // \ud14d\uc2a4\ud2b8\uac00 \uc2e4\uc81c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub108\ube44\n        final availableTextWidth =\n            effectiveMaxWidth - iconWidth - horizontalPadding - iconSpacing;\n\n        // TextPainter\ub85c \ud14d\uc2a4\ud2b8 \ub108\ube44 \uacc4\uc0b0\n        final TextPainter textPainter = TextPainter(\n          text: TextSpan(\n            text: text,\n            style: textStyle ?? Theme.of(context).textTheme.bodyMedium,\n          ),\n          textDirection: TextDirection.ltr,\n          maxLines: 1,\n        )..layout(maxWidth: double.infinity); // \uba3c\uc800 \uc81c\uc57d \uc5c6\uc774 \uce21\uc815\n\n        final bool isOverflowing = textPainter.width > availableTextWidth;\n\n        Widget textBox = Container(\n          constraints: BoxConstraints(maxWidth: effectiveMaxWidth),\n          child: IntrinsicWidth(\n            child: Container(\n              padding: const EdgeInsets.all(12),\n              decoration: BoxDecoration(\n                color: backgroundColor,\n                borderRadius: BorderRadius.circular(8.0),\n              ),\n              child: Row(\n                mainAxisSize: MainAxisSize.min,\n                children: [\n                  Icon(\n                    icon,\n                    size: iconSize,\n                  ),\n                  const SizedBox(width: 8),\n                  Expanded(\n                    child: Text(\n                      text,\n                      style: textStyle,\n                      overflow: TextOverflow.ellipsis,\n                    ),\n                  ),\n                ],\n              ),\n            ),\n          ),\n        );\n\n        return isOverflowing\n            ? Tooltip(\n                message: text,\n                preferBelow: false,\n                child: textBox,\n              )\n            : textBox;\n      },\n    );\n  }\n}\n\n")))}u.isMDXComponent=!0}}]);