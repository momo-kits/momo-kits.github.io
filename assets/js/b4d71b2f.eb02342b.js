"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[56123],{77611:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var o=t(49397);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),u=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||a;return t?o.createElement(d,i(i({ref:n},c),{},{components:t})):o.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95400:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var o=t(58168),r=t(98587),a=(t(49397),t(77611)),i=["components"],l={id:"headerRight",title:"Header Right",hide_table_of_contents:!0},s=void 0,u={unversionedId:"headerRight",id:"headerRight",title:"Header Right",description:"Features",source:"@site/docs/header_right.mdx",sourceDirName:".",slug:"/headerRight",permalink:"/docs/next/headerRight",draft:!1,editUrl:"https://github.com/docs/header_right.mdx",tags:[],version:"current",frontMatter:{id:"headerRight",title:"Header Right",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Navigation Transition",permalink:"/docs/next/transition"},next:{title:"Navigation Options",permalink:"/docs/next/options"}},c={},p=[{value:"Features",id:"features",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Shortcut",id:"shortcut",level:3}],g={toc:p},m="wrapper";function d(e){var n=e.components,t=(0,r.A)(e,i);return(0,a.yg)(m,(0,o.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"features"},"Features"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Shortcut Button"),":")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Displays a customizable shortcut icon (",(0,a.yg)("inlineCode",{parentName:"li"},"pin_star")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"pin_star_checked")," by default)."),(0,a.yg)("li",{parentName:"ul"},'Toggles the "favorite" state using the ',(0,a.yg)("inlineCode",{parentName:"li"},"onPressShortcut")," handler.")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Help Center Button"),":")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Launches the help center using ",(0,a.yg)("inlineCode",{parentName:"li"},"onPressHelpCenter"),".")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Close Button"),":")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Closes the current modal or screen with ",(0,a.yg)("inlineCode",{parentName:"li"},"onClose"),"."),(0,a.yg)("li",{parentName:"ul"},"If ",(0,a.yg)("inlineCode",{parentName:"li"},"preventClose")," is provided, shows a confirmation popup before closing.")),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Dynamic Tools"),":")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Supports multiple tools that can be grouped."),(0,a.yg)("li",{parentName:"ul"},'Displays a "more" icon (',(0,a.yg)("inlineCode",{parentName:"li"},"navigation_more_icon"),") for accessing additional tools if there are multiple items.")),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Badge Support"),":")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Shows a badge on the shortcut button if any tool has ",(0,a.yg)("inlineCode",{parentName:"li"},"showBadge: true"),".")),(0,a.yg)("h2",{id:"example-usage"},"Example Usage"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import React, {useEffect} from 'react';\n\nconst ExampleHeaderToolkit = ({navigation}) => {\n  const tools = [\n    {\n      title: 'Group 1',\n      items: [\n        {\n          key: 'tool1',\n          icon: 'icon_tool1',\n          onPress: () => console.log('Tool 1 pressed'),\n        },\n        {\n          key: 'tool2',\n          icon: 'icon_tool2',\n          onPress: () => console.log('Tool 2 pressed'),\n        },\n      ],\n    },\n    {\n      title: 'Group 2',\n      items: [\n        {\n          key: 'tool3',\n          icon: 'icon_tool3',\n          onPress: () => console.log('Tool 3 pressed'),\n          showBadge: true,\n        },\n      ],\n    },\n  ];\n\n  useEffect(() => {\n    navigation?.setOptions({\n      headerRight: {\n        useShortcut: true,\n        tools\n      },\n    });\n  }, []);\n};\n\nexport default ExampleHeaderToolkit;\n")),(0,a.yg)("h3",{id:"shortcut"},"Shortcut"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'Default it will be a "Pin to home" action.'),(0,a.yg)("li",{parentName:"ul"},"Custom 1 action -> Show custom action"),(0,a.yg)("li",{parentName:"ul"},"Custom 2 or more actions -> Show more icon"),(0,a.yg)("li",{parentName:"ul"},"Prevent close to show popup ask for close")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import React, {FC, useContext, useEffect, useState} from 'react';\nimport {\n  ApplicationContext,\n  Button,\n  Card,\n  Input,\n  Item,\n  NavigationScreenProps,\n  PopupNotifyProps,\n  Radio,\n  Screen,\n  Spacing,\n  Text,\n} from '@momo-kits/foundation';\nimport {Alert} from 'react-native';\n\nconst ToolkitUsage: FC<NavigationScreenProps> = ({navigation}) => {\n  const testValue = ['onFavorite', 'test2', 'something'];\n  const [badgeValue, setBadgeValue] = useState('');\n  const [pin, setPin] = useState('');\n  const [badgeType, setBadgeType] = useState(undefined);\n  const {navigator} = useContext(ApplicationContext);\n  const [useShortcut, setUseShortcut] = useState(true);\n  useEffect(() => {\n    const popup: PopupNotifyProps = {\n      buttonDirection: 'row',\n      primary: {\n        title: 'V\u1ec1 Trang Tr\u01b0\u1edbc',\n        onPress: () => {},\n      },\n      secondary: {\n        title: '\u1ede l\u1ea1i',\n        onPress: () => {},\n      },\n      description:\n        'Cell team t\xf9y \xfd custom n\u1ed9i dung text \u1edf title, description v\xe0 2 n\xfat CTA. Kh\xf4ng custom b\u1ea5t k\xec style n\xe0o trong popup',\n      title: 'Title',\n    };\n\n    navigation.setOptions({\n      headerRight: {\n        preventClose: popup,\n      },\n    });\n  }, []);\n\n  const iconSource =\n    'https://img.mservice.com.vn/app/img/kits/32_notifications_bell_alert.png';\n\n  return (\n    <Screen navigation={navigation} scrollable={true}>\n      <Card>\n        <Item>\n          <Input\n            floatingValue={'Badge value'}\n            placeholder={'Input badge value'}\n            value={badgeValue}\n            onChangeText={text => {\n              setBadgeValue(text);\n            }}\n          />\n        </Item>\n        <Item>\n          <Text\n            style={{marginBottom: Spacing.M}}\n            typography={'label_default_medium'}>\n            Config pinned tool\n          </Text>\n          {testValue.map(item => {\n            return (\n              <Radio\n                value={item}\n                onChange={() => setPin(item)}\n                groupValue={pin}\n                label={item}\n              />\n            );\n          })}\n        </Item>\n        <Item>\n          <Text\n            style={{marginBottom: Spacing.M}}\n            typography={'label_default_medium'}>\n            Badge type\n          </Text>\n          {['number', 'dot'].map(item => {\n            return (\n              <Radio\n                value={item}\n                onChange={() => setBadgeType(item)}\n                groupValue={badgeType}\n                label={item}\n              />\n            );\n          })}\n        </Item>\n        <Item>\n          <Button\n            title={'Show/Hide shortcut'}\n            onPress={() => {\n              navigation?.setOptions({\n                headerRight: {\n                  useShortcut: !useShortcut,\n                },\n              });\n              setUseShortcut(!useShortcut);\n            }}\n          />\n        </Item>\n        <Item>\n          <Button\n            title={'Custom 1 shortcut'}\n            onPress={() => {\n              navigation?.setOptions({\n                headerRight: {\n                  useShortcut: true,\n                  tools: [\n                    {\n                      title: {vi: 'Title 1', en: 'Title 1'},\n                      items: [\n                        {\n                          name: {\n                            vi: 'TITLE 2',\n                            en: 'EN',\n                          },\n                          key: 'test 2',\n                          icon: iconSource,\n                          showBadge: true,\n                          onPress: () => {\n                            Alert.alert('Test service 2');\n                          },\n                        },\n                      ],\n                    },\n                  ],\n                },\n              });\n            }}\n          />\n        </Item>\n        <Item>\n          <Button\n            title={'Use more'}\n            onPress={() => {\n              navigation?.setOptions({\n                headerRight: {\n                  useShortcut: true,\n                  useMore: true,\n                  tools: [\n                    {\n                      title: {vi: 'Title 1', en: 'Title 1'},\n                      items: [\n                        {\n                          name: {\n                            vi: 'TITLE 2',\n                            en: 'EN',\n                          },\n                          key: 'test 2',\n                          icon: iconSource,\n                          showBadge: true,\n                          onPress: () => {\n                            Alert.alert('Test service 2');\n                          },\n                        },\n                      ],\n                    },\n                  ],\n                },\n              });\n            }}\n          />\n        </Item>\n        <Item>\n          <Button\n            title={'Custom 2 shortcut'}\n            onPress={() => {\n              navigation?.setOptions({\n                headerRight: {\n                  useShortcut: true,\n                  tools: [\n                    {\n                      title: {vi: 'Title 1', en: 'Title 1'},\n                      items: [\n                        {\n                          name: {\n                            vi: 'TITLE 1',\n                            en: 'EN',\n                          },\n                          key: 'test 1',\n                          icon: iconSource,\n                          showBadge: true,\n                          onPress: () => {\n                            Alert.alert('Test service 1');\n                          },\n                        },\n                        {\n                          name: {\n                            vi: 'TITLE 2',\n                            en: 'EN',\n                          },\n                          key: 'test 2',\n                          icon: iconSource,\n                          showBadge: true,\n                          onPress: () => {\n                            Alert.alert('Test service 2');\n                          },\n                        },\n                      ],\n                    },\n                  ],\n                },\n              });\n            }}\n          />\n        </Item>\n      </Card>\n    </Screen>\n  );\n};\n\nexport default ToolkitUsage;\n")))}d.isMDXComponent=!0}}]);