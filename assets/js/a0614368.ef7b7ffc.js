"use strict";(self.webpackChunkmomo_kits_website=self.webpackChunkmomo_kits_website||[]).push([[50234],{77611:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>f});var r=t(49397);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},86205:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=t(58168),o=t(98587),a=(t(49397),t(77611)),i=["components"],s={id:"options",title:"Navigation Options",hide_table_of_contents:!0},l="HeaderTitle",c={unversionedId:"options",id:"options",title:"Navigation Options",description:"UserTitle",source:"@site/docs/navigation_options.mdx",sourceDirName:".",slug:"/options",permalink:"/docs/next/options",draft:!1,editUrl:"https://github.com/docs/navigation_options.mdx",tags:[],version:"current",frontMatter:{id:"options",title:"Navigation Options",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Header Right",permalink:"/docs/next/headerRight"},next:{title:"IconSources",permalink:"/docs/next/iconSource"}},d={},u=[{value:"UserTitle",id:"usertitle",level:3},{value:"LocationTitle",id:"locationtitle",level:3},{value:"JourneyTitle",id:"journeytitle",level:3},{value:"OnboardingTitle",id:"onboardingtitle",level:3},{value:"HeaderTypes",id:"headertypes",level:3},{value:"AnimatedHeader",id:"animatedheader",level:3},{value:"AnimatedHeaderSlider",id:"animatedheaderslider",level:3}],p={toc:u},m="wrapper";function f(e){var n=e.components,t=(0,o.A)(e,i);return(0,a.yg)(m,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"headertitle"},"HeaderTitle"),(0,a.yg)("h3",{id:"usertitle"},"UserTitle"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import {Colors, Screen, TitleUserProps} from '@momo-kits/foundation';\nimport {Alert} from 'react-native';\nimport {useEffect} from 'react';\n\nconst titleUser: TitleUserProps = {\n  title: 'Default title',\n  subTitle: 'Default subtitle',\n  image:\n    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4160&q=80',\n  dotColor: Colors.green_03,\n  verify: true,\n  tintColor: 'Tint color',\n  onPress: () => {\n    Alert.alert('You pressed');\n  },\n};\n\nconst UserTitleUsage = ({navigation}) => {\n  useEffect(() => {\n    navigation.setOptions({\n      headerTitle: {\n        type: 'user',\n        data: titleUser,\n      },\n    });\n  }, []);\n  return <Screen></Screen>;\n};\n")),(0,a.yg)("h3",{id:"locationtitle"},"LocationTitle"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import {Screen, TitleLocationProps} from '@momo-kits/foundation';\nimport {Alert} from 'react-native';\nimport {useEffect} from 'react';\n\nconst titleLocation: TitleLocationProps = {\n  description: 'Nh\xe0 c\u1ee7a Nguy\u1ec5n V\u0103n A',\n  location: 'Ph\xfa M\u1ef9, Q.7, H\u1ed3 Ch\xed Minh',\n  onPress: () => Alert.alert('onPress location'),\n  tintColor: '#000000',\n};\n\nconst LocationTitleUsage = ({navigation}) => {\n  useEffect(() => {\n    navigation.setOptions({\n      headerTitle: {\n        type: 'location',\n        data: titleLocation,\n      },\n    });\n  }, []);\n  return <Screen></Screen>;\n};\n")),(0,a.yg)("h3",{id:"journeytitle"},"JourneyTitle"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import {Screen, TitleJourneyProps} from '@momo-kits/foundation';\nimport {Alert} from 'react-native';\nimport {useEffect} from 'react';\n\nconst titleJourney: TitleJourneyProps = {\n  start: 'Ha Noi',\n  end: 'Ho Chi Minh',\n  description: 'Th\u1ee9 3, 31/06/2024 \u2022 2 h\xe0nh kh\xe1ch',\n  icon: 'travel_plane_take_off',\n  onPress: () => Alert.alert('onPress Journey'),\n  tintColor: '#000000',\n};\n\nconst JourneyTitleUsage = ({navigation}) => {\n  useEffect(() => {\n    navigation.setOptions({\n      headerTitle: {\n        type: 'journey',\n        data: titleJourney,\n      },\n    });\n  }, []);\n  return <Screen></Screen>;\n};\n")),(0,a.yg)("h3",{id:"onboardingtitle"},"OnboardingTitle"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import {NavigationScreenProps, Screen} from '@momo-kits/foundation';\nimport {useEffect} from 'react';\nimport {Alert} from 'react-native';\n\nconst OnBoardingUsage: React.FC<NavigationScreenProps> = ({navigation}) => {\n  useEffect(() => {\n    navigation?.setOptions({\n      headerRight: {\n        useOnBoarding: true,\n        onPress: () => {\n          Alert.alert('Press');\n        },\n      },\n    });\n  }, []);\n  return <Screen></Screen>;\n};\n")),(0,a.yg)("h1",{id:"concept"},"Concept"),(0,a.yg)("h3",{id:"headertypes"},"HeaderTypes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"HeaderType includes 3 types default, extended, none."),(0,a.yg)("li",{parentName:"ul"},"It also has other templates such as search header or search animated header."),(0,a.yg)("li",{parentName:"ul"},"inputSeachProps: Props of input search in type of animated search header."),(0,a.yg)("li",{parentName:"ul"},"headerRightWidth: To config width of headerRight component if you custom it."),(0,a.yg)("li",{parentName:"ul"},"useHeaderShadow: To config shadow in bottom of header (if false, it will be set as a border)"),(0,a.yg)("li",{parentName:"ul"},"use ScreenRef to config searchHeader without animation (example below)")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import {\n  ApplicationContext,\n  Button,\n  Card,\n  HeaderType,\n  Input,\n  Item,\n  NavigationScreenProps,\n  ScreenRef,\n  Styles,\n  Switch,\n} from '@momo-kits/foundation';\nimport {useContext, useEffect, useState} from 'react';\nimport {View} from 'react-native';\nconst HeaderTypeUsage: React.FC<NavigationScreenProps> = ({navigation}) => {\n  const {theme} = useContext(ApplicationContext);\n  const screenRef = React.useRef<ScreenRef>();\n  const [headerType, setHeaderType] = useState<HeaderType>('default');\n  const [showSearchAnimated, setShowSearchAnimated] = useState(false);\n  const [showSearchHeader, setShowSearchHeader] = useState(false);\n  const [useHeaderShadow, setUseHeaderShadow] = useState(true);\n\n  const data = [\n    {\n      value: 'default',\n      props: {value: 'default', groupValue: 'default'},\n    },\n    {\n      value: 'extended',\n      props: {value: 'extended', groupValue: 'extended'},\n    },\n    {\n      value: 'none',\n      props: {value: 'none', groupValue: 'none'},\n    },\n  ];\n\n  useEffect(() => {\n    setTimeout(() => {\n      screenRef.current?.setOptions({title: 'Hello'});\n    }, 1000);\n  }, []);\n\n  return (\n    <Screen\n      ref={screenRef}\n      inputSearchProps={\n        showSearchAnimated\n          ? {\n              placeholder: 'Search input',\n              leftPosition: 12,\n            }\n          : undefined\n      }\n      headerType={headerType}\n      headerRightWidth={0}\n      navigation={navigation}\n      scrollable={true}\n      backgroundColor={theme.colors.background.default}\n      useShadowHeader={useHeaderShadow}>\n      <Card>\n        <Item>\n          {data?.map(item => {\n            return (\n              <Radio\n                label={item.value}\n                value={headerType}\n                onChange={() => setHeaderType(item.value as HeaderType)}\n                groupValue={item?.props?.groupValue}\n              />\n            );\n          })}\n        </Item>\n      </Card>\n      <Card>\n        <Item>\n          <View style={Styles.rowSpace}>\n            <Text typography={'title_default'}>Search Animated</Text>\n            <Switch\n              onChange={() => {\n                const value = !showSearchAnimated;\n                if (value) {\n                  setShowSearchHeader(false);\n                }\n                setShowSearchAnimated(value);\n              }}\n              value={showSearchAnimated}\n            />\n          </View>\n        </Item>\n      </Card>\n      <Card>\n        <Item>\n          <View style={Styles.rowSpace}>\n            <Text typography={'title_default'}>Search Header</Text>\n            <Switch\n              onChange={() => {\n                const value = !showSearchHeader;\n                if (value) {\n                  setShowSearchAnimated(false);\n                }\n                setShowSearchHeader(value);\n              }}\n              value={showSearchHeader}\n            />\n          </View>\n          {showSearchHeader && (\n            <>\n              <Input\n                onChangeText={(text: string) => {\n                  screenRef.current?.setSearchHeader({\n                    defaultValue: 'Search input',\n                    onChangeText: text => {\n                      console.log(text);\n                    },\n                    onPress: () => {\n                      console.log('onPress');\n                    },\n                    buttonText: text,\n                    showButtonText: true,\n                  });\n                }}\n              />\n              <Button\n                size={'medium'}\n                title={'Show search header'}\n                onPress={() => {\n                  screenRef.current?.setSearchHeader({\n                    defaultValue: 'Search input',\n                    onChangeText: text => {\n                      console.log(text);\n                    },\n                    onPress: () => {\n                      console.log('onPress');\n                    },\n                  });\n                }}\n              />\n            </>\n          )}\n        </Item>\n      </Card>\n      <Card>\n        <Item>\n          <View style={Styles.rowSpace}>\n            <Text typography={'title_default'}>use Header Shadow</Text>\n            <Switch\n              onChange={() => {\n                setUseHeaderShadow(!useHeaderShadow);\n              }}\n              value={useHeaderShadow}\n            />\n          </View>\n        </Item>\n      </Card>\n      <Card>\n        <Item>\n          <View style={{height: 1000}} />\n        </Item>\n      </Card>\n    </Screen>\n  );\n};\n")),(0,a.yg)("h3",{id:"animatedheader"},"AnimatedHeader"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import {\n  ApplicationContext,\n  Colors,\n  HeaderAnimated,\n  NavigationScreenProps,\n  Screen,\n  ScreenRef,\n} from '@momo-kits/foundation';\nimport {RefreshControl} from 'react-native';\nimport React, {useContext, useRef, useState} from 'react';\n\nexport const AnimatedHeader: React.FC<NavigationScreenProps> = ({\n  navigation,\n}) => {\n  const {theme} = useContext(ApplicationContext);\n  const ref = useRef<ScreenRef>();\n  const [refreshing, setRefresh] = useState(false);\n  const [surface, setSurface] = useState(true);\n  const [scale, setScale] = useState(true);\n\n  return (\n    <Screen\n      ref={ref}\n      scrollable\n      navigation={navigation}\n      layoutOffset={-56}\n      scrollViewProps={{\n        scrollEventThrottle: 8,\n        keyboardShouldPersistTaps: 'handled',\n        onScroll: () => {},\n        refreshControl: (\n          <RefreshControl\n            refreshing={refreshing}\n            tintColor={theme.colors.background.surface}\n            onRefresh={() => {\n              setRefresh(true);\n              setTimeout(() => {\n                setRefresh(false);\n              }, 3000);\n            }}\n            colors={[\n              theme.colors.background.default,\n              theme.colors.background.surface,\n            ]}\n          />\n        ),\n      }}\n      animatedHeader={{\n        headerTintColor: surface ? Colors.black_01 : Colors.black_17,\n        component: (props: any) => (\n          <HeaderAnimated\n            {...props}\n            onPress={() => {}}\n            useScale={scale}\n            image={\n              'https://static.momocdn.net/app/img/booking/holiday/mid_atumn_dldl.jpeg'\n            }\n          />\n        ),\n      }}\n      enableKeyboardAvoidingView={true}></Screen>\n  );\n};\n")),(0,a.yg)("h3",{id:"animatedheaderslider"},"AnimatedHeaderSlider"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"import {ApplicationContext, Colors, NavigationScreenProps, Screen, } from '@momo-kits/foundation';\nimport {RefreshControl, ScrollView} from 'react-native';\nimport React, {useContext, useRef, useState} from 'react';\nimport {HeaderSliderBanner} from '@momo-kits/template';\n\nexport const HeaderSliderBannerUsage: React.FC<NavigationScreenProps> = ({\n  navigation,\n}) => {\n  const {theme} = useContext(ApplicationContext);\n  const ref = useRef<ScrollView>();\n  const [refreshing, setRefresh] = useState(false);\n  const [activeIndex, setActiveIndex] = useState(0);\n  const [surface, setSurface] = useState(false);\n\n  return (\n    <Screen\n      ref={ref}\n      scrollable\n      layoutOffset={-56}\n      navigation={navigation}\n      scrollViewProps={{\n        scrollEventThrottle: 8,\n        keyboardShouldPersistTaps: 'handled',\n        onScroll: e => {\n          console.log('onScroll', e);\n        },\n        refreshControl: (\n          <RefreshControl\n            refreshing={refreshing}\n            tintColor={theme.colors.background.surface}\n            onRefresh={() => {\n              setRefresh(true);\n              setTimeout(() => {\n                setRefresh(false);\n              }, 3000);\n            }}\n            colors={[\n              theme.colors.background.default,\n              theme.colors.background.surface,\n            ]}\n          />\n        ),\n      }}\n      animatedHeader={{\n        headerTintColor: surface ? Colors.black_01 : Colors.black_17,\n        component: (props: any) => (\n          <HeaderSliderBanner\n            {...props}\n            paginationBottom={56}\n            onSnapToItem={setActiveIndex}\n            data={[\n              'https://static.momocdn.net/app/img/booking/holiday/mid_atumn_dldl.jpeg',\n              'https://static.momocdn.net/app/img/booking/holiday/mid_atumn_dldl.jpeg',\n              'https://static.momocdn.net/app/img/booking/holiday/mid_atumn_dldl.jpeg',\n            ]}\n            activeIndex={activeIndex}\n          />\n        ),\n      }}\n      enableKeyboardAvoidingView={true}>\n    </Screen>\n  );\n};\n\n")))}f.isMDXComponent=!0}}]);