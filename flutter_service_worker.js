'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"appicon.ico": "2c2cf5bdc876ff52583212f5d80a0b5e",
"appicon.png": "ed7564db754c8daa18b9cd81d1c381ef",
"assets/AssetManifest.bin": "9130b5bc56417927421ee4d7c35f1759",
"assets/AssetManifest.bin.json": "cf78063d805ca35fc5f0ba7cb604a7f1",
"assets/AssetManifest.json": "f42845ed5cbc97f3c5ef15617a6f6be0",
"assets/assets/1img.png": "8fc1bc0e29851717eaba40a2b96019d0",
"assets/assets/2img.png": "dbbae7557346ac5fc791af3105ccb2d4",
"assets/assets/3img.png": "fd430269f1fca487d24de08fbc217522",
"assets/assets/4img.jpg": "16a47eb42db0d3714ab0431e678ccf84",
"assets/assets/4img.webp": "b6e8a1d06e9bda5956250435e1037383",
"assets/assets/authbag.png": "1d0811f997500060286e107fb68e6c4d",
"assets/assets/background.png": "81173bed9341b1d16d765c12d8300157",
"assets/assets/call_icon.png": "74bd3cddddb6f4f27a556549b14e96b7",
"assets/assets/cdsl.png": "4a27806751a228ddfb7c1d46952bd148",
"assets/assets/dealercall_icon.png": "74bd3cddddb6f4f27a556549b14e96b7",
"assets/assets/dealerwhatsapp_icon.png": "090c59595eafcb463e097a1441440a41",
"assets/assets/default-news.jpg": "19ac58a6a8f86a475439c1b1e1aa196d",
"assets/assets/down_arrow.png": "0bf72311649cf36af4d968e69e3d9327",
"assets/assets/env_var/env_config": "f5c218d497085d175280da9f1bff1f9c",
"assets/assets/eye.png": "648ffcd800fb82adc5b61d76e87860b4",
"assets/assets/forgotPassword.png": "11c5ffd6f6201707abf93b6702bd7a36",
"assets/assets/gcllogo2.png": "fed43a44c639e48797d428dce72bfc0e",
"assets/assets/giftOpenBox.png": "d5840dc5109f8c3305ddbf9cddf6bf0b",
"assets/assets/global_eco.png": "05b01b7034bf32fdbe24e68d9bab7030",
"assets/assets/hide_eye.png": "9e7424008267681885f1b81693a578b9",
"assets/assets/icon/appLogo.png": "828e6d490f4e511be8c498992f6b697a",
"assets/assets/icon/appLogo2.png": "56626efdeb9dbf9205c65590e598a47e",
"assets/assets/icon/background.png": "a42f4333f5819a2f8eefad1ec11eae56",
"assets/assets/icon/capstock_logo.png": "04bd25390dc8a2092d825da2c53443e0",
"assets/assets/icon/facebook.svg": "abb114c81e0ef0aeb44d771a5e7d18d4",
"assets/assets/icon/insta.png": "c76205fa1f525e3a96c4fa2dcac9856a",
"assets/assets/icon/linkedIn.svg": "53df645bdab2c4840c08067fbee11bc0",
"assets/assets/icon/twitter.svg": "c83aff49e51de7bfecf98655cdb83710",
"assets/assets/icon/youTube.svg": "d885d465b7aae58436a69c101740d48f",
"assets/assets/info.png": "93930daa49621b1c8000fc39f6570ac9",
"assets/assets/learning/Bear-Call-Spread.jpg": "15d86653d5d33660736152e4a8e60261",
"assets/assets/learning/Bear-Put-Spread.jpg": "619f4d55f80e049c98abf26d2259eaeb",
"assets/assets/learning/Bull-Call-Spread.jpg": "0f4710a5eb29b236f227eba87b3c5f6d",
"assets/assets/learning/Bull-Put-Spread.jpg": "98d3773ef0c0aac58ff8e52ca602520a",
"assets/assets/learning/Butterfly.jpg": "ccc797eb063ed990d4caf3005bb61b41",
"assets/assets/learning/Covered-call.png": "0e76759a363646ead1fe697dc3323271",
"assets/assets/learning/Ironcondor.jpg": "8546236ea02678cbd1688999d2fb6e19",
"assets/assets/learning/Protective%2520Put1.png": "87b08f512db7fe96f9e31d6fcde040d7",
"assets/assets/learning/Protective-put.jpg": "f5c85b0d7e1240b8d4e46b27f2c940ad",
"assets/assets/learning/Protective-put.png": "d378fe67a9e1b76d2536806dfb99ebc2",
"assets/assets/learning/Put-ration-spread.jpg": "397b818477139da05626c471008b48bf",
"assets/assets/learning/Ratio-call-spread.png": "2c79d81844893e89b021adf2420b9121",
"assets/assets/learning/Ratio-put-spread.png": "4a60b0ffc88bfb51f9ec4674b9f8a524",
"assets/assets/learning/Short-Straddle.jpg": "08c4a00c8272a6ecc7a74c26d402d7d1",
"assets/assets/learning/Short-Strangle.jpg": "db384c1eeeb24ad632596bdc5aa638c0",
"assets/assets/learningOnClick/bear-call-spread.png": "976b0bb0746bc2aec704c3f5cf8ecf08",
"assets/assets/learningOnClick/bear-put-spread.png": "9963b58a84c7316dc872f8f9761f1451",
"assets/assets/learningOnClick/Bull-call-spread.png": "40129eae6cdebc42f54defce935683ad",
"assets/assets/learningOnClick/Bull-put-spread.png": "6d437aaf77b65a2ccff4acb305f1f66c",
"assets/assets/learningOnClick/Butterfly.png": "c5e60bd5f62e3a095107572e8d5c094a",
"assets/assets/learningOnClick/Covered-call.png": "764853222502bb9b098047ee8c2c6483",
"assets/assets/learningOnClick/Iron-condor.png": "ebb258c9a84aa6f1e0572be3bbbbab91",
"assets/assets/learningOnClick/Protective-Put.png": "edfb84d7d7ab7d96d84098eb9227bfcf",
"assets/assets/learningOnClick/Ratio-call-spread.png": "f79d5f3af21d03348f00ecac969aadd3",
"assets/assets/learningOnClick/Ratio-put-spread.png": "d174cf27887c3fee842835ad8b2e40cc",
"assets/assets/learningOnClick/Short-straddle.png": "dd2526656fce63bd0856d9be8ce301f4",
"assets/assets/learningOnClick/Short-strangle.png": "2b320437bec277739226938d1c1a4dbc",
"assets/assets/location_icon.png": "72103a88f880f26e5d31098dc518f3a5",
"assets/assets/loginbanner.png": "8d73426c16c31c38c90367f51bd7da4e",
"assets/assets/mail_icon.png": "ae32e4eb7ef373842e949a8560265328",
"assets/assets/mf.png": "831445d87ff2340853bc57db9bfdf807",
"assets/assets/minimize.png": "b1b7ddf1124d4441bb7b66bb32afbc6a",
"assets/assets/news3.png": "86eeae20baac65c17b813c44a445a672",
"assets/assets/nsdl.jpg": "6f1528dd933bad129130660de3fc97a3",
"assets/assets/optionEgde.png": "5b04f844374a238e63d2adecd29a1408",
"assets/assets/pdf.png": "3523e067bb374f1f882a963f483c2299",
"assets/assets/pledge.png": "c791a30b6e1b1c948b071e663db4478f",
"assets/assets/rupeeseed.png": "202968890984906d2ef9b9857c18b510",
"assets/assets/rupeeseedLogo.png": "340460b46f2272b87b57f9174bd03a71",
"assets/assets/svg/activestockbypcr.svg": "22d8f6de2c5d34f663636eef7d2d339b",
"assets/assets/svg/add-dark.svg": "b552b655fd85bcf35e3163416490f5af",
"assets/assets/svg/add-light.svg": "8ebc99e8a7a192ddd133ae8469d49974",
"assets/assets/svg/add.svg": "20d2ea442b95351a8d4e5b07da2f03ad",
"assets/assets/svg/addFund.svg": "c26c012fb7ee42d4ddbe799d0582310c",
"assets/assets/svg/addmoney.svg": "048f661723cd259deaa9c18b9d114a41",
"assets/assets/svg/addmore_hover2.svg": "2664fc520ae24730bc821a4c62fa4597",
"assets/assets/svg/ADD_alert.svg": "1d722a4b173e02e929ab09a2ecbaa624",
"assets/assets/svg/ADD_alert_gold.svg": "d9761894cc2bb5509a6a3dcf0df5dd15",
"assets/assets/svg/alert.svg": "298e57c8e6784d2c8cb3cf2ea6c4520c",
"assets/assets/svg/alerts.svg": "7f289d1461c3013f94e52e9307efb6cd",
"assets/assets/svg/alerts2.svg": "7abccaec3471235811d6dcff89676fa1",
"assets/assets/svg/analytics_portfolio.svg": "1078bb99b0ad4f55eb44f3ae302871d5",
"assets/assets/svg/background.png": "81173bed9341b1d16d765c12d8300157",
"assets/assets/svg/background.svg": "21b846a8f4630196c0f3fd50d5e3a738",
"assets/assets/svg/background.webp": "de123d495ef9f6327e726bc4d69f615e",
"assets/assets/svg/backoffice.svg": "73525cdd370f35f93d5f12337ec92785",
"assets/assets/svg/backoffice2.svg": "f44dfffb2c6b426a1f652db20c0d8caf",
"assets/assets/svg/backofficedetails.svg": "84d29d74e988e909d62d40cea28ef374",
"assets/assets/svg/bankacc.svg": "a10e83cd76b6fbf4bf45d9e33ea170c2",
"assets/assets/svg/basket/background.svg": "21b846a8f4630196c0f3fd50d5e3a738",
"assets/assets/svg/basket/basket.svg": "4fddcbfdb8166967a9e5c6e3082e6ac3",
"assets/assets/svg/basket/basket_blue.svg": "5e36248f37f649d6d131aa23a8ea3464",
"assets/assets/svg/basket/delete.svg": "e9695c448c0022574f65b87462cdbeec",
"assets/assets/svg/basket/edit.svg": "cbe64f7b00ed3074ba6ef6f06084c1d4",
"assets/assets/svg/basket.svg": "e742a1e1c66280ba3f8d117a7c2fc071",
"assets/assets/svg/basket2.svg": "9b8c02ceca87b1c39b4df32563572a0d",
"assets/assets/svg/bearish.svg": "6cafeb17e3232c22e7ae6b1777436bcd",
"assets/assets/svg/Bellnonoti.svg": "7f289d1461c3013f94e52e9307efb6cd",
"assets/assets/svg/blue_minus.svg": "d6346d36284cf852e91a2d12e1b4400e",
"assets/assets/svg/blue_plus.svg": "b32d6fdcac4f7505775f1bb140ae0108",
"assets/assets/svg/bullets.svg": "8927ed3b57b1ad1b90d745c02a6cfb79",
"assets/assets/svg/bullish.svg": "4ebaffd043a79a303614061c42bcd03b",
"assets/assets/svg/buy.svg": "1598bdc7806c1f7376531fdac8a390bb",
"assets/assets/svg/calculator_margin.svg": "211d23130d834aa6a4584bf1ce8b3e8e",
"assets/assets/svg/calculator_option.svg": "467e201aae200435e000bd96715a296b",
"assets/assets/svg/chart.svg": "756b7aeeb918cd06bf2cda25548db565",
"assets/assets/svg/chart_current_value.svg": "75be561140788cb8075a54d3591df3d7",
"assets/assets/svg/checked.svg": "63eabbf266048159f720adcf4d0a0d4c",
"assets/assets/svg/circuitbreakers.svg": "1fea385157e5f67eb0c6ab700849c992",
"assets/assets/svg/close.svg": "f613d32ced36243a5815b5722ba9daf4",
"assets/assets/svg/close_eye.svg": "b747855b5c160a501b58311cd4164f71",
"assets/assets/svg/close_grey.svg": "20212bc40ae074cdb4c36cd1598612d2",
"assets/assets/svg/collapse.svg": "92308a721a6ed94c59351481db101bae",
"assets/assets/svg/combinemargin.svg": "9a866d3b87b487333b72268ddf921d81",
"assets/assets/svg/contractnote.svg": "c09d878a274c86b62122111e57833acd",
"assets/assets/svg/convert-dark.svg": "bef79909feac14ec3386d641167aa080",
"assets/assets/svg/convert-light.svg": "3640ee7c1b64e30246009fc59dc823c7",
"assets/assets/svg/copy.svg": "bf4a59b2b8b8de50b72512f8f8a4434f",
"assets/assets/svg/dailog_right_arrow.svg": "69549aeb9757366ff91e4db5b8f031f7",
"assets/assets/svg/dashboard.svg": "6efa64db8e08dd1cd7c3df82fd9de560",
"assets/assets/svg/delete_alert.svg": "77f79ba894b0f46d557625737b8971ce",
"assets/assets/svg/delete_cross.svg": "3cb4b0198bcba5d58bf8b829a4531b41",
"assets/assets/svg/depth.svg": "359e0149afc3817ababefc0df5833673",
"assets/assets/svg/depthicon.svg": "3b683f006392ea8e7ef6baa726aa1658",
"assets/assets/svg/disclosureImg.svg": "cb39fc410f68048fa9fbc897426eae90",
"assets/assets/svg/dividend_icon.svg": "fed0768f805eb9aebba3401815430a3a",
"assets/assets/svg/downarrow.svg": "2af9a8a91fb009ad6c859d2c9f6b7def",
"assets/assets/svg/downloadApp.svg": "64d05b6121dea0d03b772e76e1b572c6",
"assets/assets/svg/down_arrow.svg": "488c89c02c6b3719b6a5b1158eb3b76d",
"assets/assets/svg/dp%2520holding.svg": "191455e565ff28263768f4020dcec254",
"assets/assets/svg/dropArrow.svg": "9ba6e898ee2bd12d4d087f913eaee5f3",
"assets/assets/svg/e-ipo.svg": "eb70190491d02b46bdce46e7800c4ec6",
"assets/assets/svg/e-kyc.svg": "d9c8980edef2d2078e383aa685997ac3",
"assets/assets/svg/e-voting.svg": "25b4beee2e25c9e13ecc8f94df8d01fc",
"assets/assets/svg/editWL.svg": "d7eba4ab9fd3d5c8958b309573a320dd",
"assets/assets/svg/edit_alert.svg": "037e96706d1aa80fc56462fa58cc74ad",
"assets/assets/svg/errorimg.svg": "51c118421ff2e2c5459d0fb34cb9b2e9",
"assets/assets/svg/exit.svg": "9d6b4f1e6f21930fa136231d5823a887",
"assets/assets/svg/expand.svg": "58393f18d840c6370bab6a2a3e492224",
"assets/assets/svg/eye_icon.svg": "896166c5208d05ada4c4128857c05802",
"assets/assets/svg/facebook.svg": "abb114c81e0ef0aeb44d771a5e7d18d4",
"assets/assets/svg/filter.svg": "841f7df8da4090b57b02e3618d5f710b",
"assets/assets/svg/financialledger.svg": "1be314ae4b8f2dfc5e1c7156e0eef041",
"assets/assets/svg/financialledgerbalance.svg": "2f9662bb4218e573a5d0a7382ae52972",
"assets/assets/svg/foactivation.svg": "dae751f905de3f870f47af05b0b62ba5",
"assets/assets/svg/funandmargin.svg": "3630ffa7e6aaca6d15f6ff752a5d4857",
"assets/assets/svg/funds.svg": "0897ff30d975e65a12302ed4ce94e61f",
"assets/assets/svg/GapUp&Down.svg": "f37e565c4b9a989f5e4ff1213053f70a",
"assets/assets/svg/grid_new.svg": "290261db60b09a414ae9b8659051a72a",
"assets/assets/svg/Group%25202466.svg": "63eabbf266048159f720adcf4d0a0d4c",
"assets/assets/svg/Group%25202922.svg": "783f6b1e95ecde8f5264d8f5748431df",
"assets/assets/svg/heatmap.svg": "085b4e9519d2a142946e18a7b72721ca",
"assets/assets/svg/high&lowbreaker.svg": "f37e565c4b9a989f5e4ff1213053f70a",
"assets/assets/svg/holding.svg": "ddb714a79f10f068fd02ca91546ed23d",
"assets/assets/svg/holdingcumfinancial.svg": "6ad83e85cc818127e57a728856c93a8b",
"assets/assets/svg/holdings.svg": "ddb714a79f10f068fd02ca91546ed23d",
"assets/assets/svg/ic_cancel.svg": "0d37dbd171ee2994bb77fe6ecf370754",
"assets/assets/svg/ic_delete.svg": "77f79ba894b0f46d557625737b8971ce",
"assets/assets/svg/ic_depth.svg": "5ee80d5a1aebb43787fe281fd3a25406",
"assets/assets/svg/ic_freeze.svg": "84d29d74e988e909d62d40cea28ef374",
"assets/assets/svg/ic_KRA.svg": "0b10ae4486a7e90acd3f5fbdb426bd9c",
"assets/assets/svg/ic_modify.svg": "ef42dbec04636fefdbfa66feffab9f8c",
"assets/assets/svg/ic_search.svg": "5684e576462f752eccda956c6ea59c13",
"assets/assets/svg/ic_sell.svg": "9a9f16ab967983f1ecfffb5ac88aade5",
"assets/assets/svg/ic_trail.svg": "c9adfd7740e1ccc90c4a3ca402e9815c",
"assets/assets/svg/ic_xcl.svg": "43d2c7f8f65488fce0f24950fc9e57c6",
"assets/assets/svg/indices.svg": "a93347420feb6e7464dda8a0b6ee4992",
"assets/assets/svg/info_hover.svg": "d511734d4a6b3e5454453a9ab639d2d5",
"assets/assets/svg/info_new.svg": "acd85379352950c7c7a28f78ae3a036e",
"assets/assets/svg/inner_circle.svg": "3b401ce88bb6299fa4a95b62a948bed9",
"assets/assets/svg/insta.png": "c76205fa1f525e3a96c4fa2dcac9856a",
"assets/assets/svg/Instagram.svg": "17293cea6e5f0f66011ea850ddb5fe24",
"assets/assets/svg/insurance.svg": "cc89b033acec99bfc4a8549f09a4b2c2",
"assets/assets/svg/intellistock.svg": "b284dfdf082ee8bb0b1723a878e56cfc",
"assets/assets/svg/invested_value.svg": "6dbf5a88250c904065fa661c3d9c350f",
"assets/assets/svg/ipo.svg": "681ef3be13559ae75c55575ae27c6c57",
"assets/assets/svg/ivscanners.svg": "1ec4bfd4ddcf7966f1fba2c349313ef8",
"assets/assets/svg/jump.svg": "dea34e72751f12b82b526ff4c4634e75",
"assets/assets/svg/layer1.svg": "ff6d8be4a634219393a4045e5d3c2ed4",
"assets/assets/svg/learnmore.svg": "af7075b3a51365ee2226b3ce744cfdd6",
"assets/assets/svg/ledger.svg": "20ceba56213a65a649ae51a568caaadc",
"assets/assets/svg/linkedIn.svg": "53df645bdab2c4840c08067fbee11bc0",
"assets/assets/svg/links.svg": "2a43aba4fb73489735c8f1df097da7ce",
"assets/assets/svg/list_new.svg": "1fa99c5e5973029304039c10379805fd",
"assets/assets/svg/logout_new.svg": "a83a417f5bffcefa2a16c982e0d30929",
"assets/assets/svg/longshortbuildup.svg": "f2f850640fff5ace79c203816d78f198",
"assets/assets/svg/manage.svg": "7b264513e95609771c6d9e4a3e5f4cd1",
"assets/assets/svg/margincalculator.svg": "12c8cc902e460ccc43bb1b49a676b769",
"assets/assets/svg/market.svg": "c6c28ab86115cd17a071130b49fd84dd",
"assets/assets/svg/markets.svg": "69a305b74ee6c5497f60670fcf7f4c1b",
"assets/assets/svg/mcxreports.svg": "f44dfffb2c6b426a1f652db20c0d8caf",
"assets/assets/svg/menu.svg": "cdf8b779cc0fdc28d306aaf7c5470b6d",
"assets/assets/svg/mfportfolio.svg": "e905d89c0bc50bd0d066d403a0b129e5",
"assets/assets/svg/minus.svg": "7c1591c6a28494e653bf8532cdf3406c",
"assets/assets/svg/Minus_green.svg": "4da85e1f4b590a5cffad2287474cc77a",
"assets/assets/svg/money.svg": "0897ff30d975e65a12302ed4ce94e61f",
"assets/assets/svg/moreOpt.svg": "0792b1b8db5d166ae09bac37a2a48690",
"assets/assets/svg/mostactivef&o.svg": "db666cd0cbdd0b3790d9f08c2730aa6d",
"assets/assets/svg/mutualfunds.svg": "15c75cbe712cf7cf049c81587000ced2",
"assets/assets/svg/myyesinvest.svg": "b284dfdf082ee8bb0b1723a878e56cfc",
"assets/assets/svg/my_profile.svg": "451274275717f80a3f90fdb7d0ced8be",
"assets/assets/svg/net_banking.svg": "51d86de5fa117905aef00a845018ca13",
"assets/assets/svg/neutral.svg": "f50f148e0c6d04d8c83ec7993dc83fc3",
"assets/assets/svg/new.svg": "3f7aeef88a9fa7446fe1243b5fb481df",
"assets/assets/svg/newRepeat.svg": "462ddbed78cb3d6b06174d0613774a3d",
"assets/assets/svg/nomineeupdate.svg": "63672158cfc49118f1c795b97782ec5f",
"assets/assets/svg/notification-alert-icon.svg": "3967c46b2a016cd9b5d0a70f541b7cc7",
"assets/assets/svg/Notification.svg": "f1af8f51098454976f33f446892cbe7d",
"assets/assets/svg/ofs.svg": "a5c4b403fc3201de547393ef8676e11b",
"assets/assets/svg/openanaccount.svg": "a5c4b403fc3201de547393ef8676e11b",
"assets/assets/svg/openhighorlow.svg": "b6445de1d0a06f080d94124a5d9c9074",
"assets/assets/svg/openinterestlimit.svg": "c87a6a559a4f98e0cc1b6d8492d4d5e4",
"assets/assets/svg/option_edge.svg": "73525cdd370f35f93d5f12337ec92785",
"assets/assets/svg/orders.svg": "9c66a676fdbf182752c6c4121a943c43",
"assets/assets/svg/otpPlaceholder.svg": "836f2e5e11b9932322a02f052b36a8b7",
"assets/assets/svg/outer_circle.svg": "f89baae16af8046edd20ae8609d86240",
"assets/assets/svg/pan.svg": "50cf008acff5f4ecfaef9cf810b18839",
"assets/assets/svg/password.svg": "faba288b0192485ad94fa0b8f1ac7112",
"assets/assets/svg/pendingclock.svg": "41c1522271cf48d2eaff1ff98d3bdb21",
"assets/assets/svg/personal_statistic.svg": "931338128912daaef9ad59b37bcfad3e",
"assets/assets/svg/pledge.svg": "4f237de929e72dad0069c3c5bff17fe0",
"assets/assets/svg/pledge_req.svg": "7f93c0d4707ba7973fa8213a3f9a9ab5",
"assets/assets/svg/plus.svg": "6479bd968146668a3fab52d032e6da96",
"assets/assets/svg/Plus_green.svg": "64b0c8c82fe4373718de1e92f0fc4f2f",
"assets/assets/svg/pnlstatement.svg": "b284dfdf082ee8bb0b1723a878e56cfc",
"assets/assets/svg/portfolio.svg": "191455e565ff28263768f4020dcec254",
"assets/assets/svg/positions.svg": "eb1e02ebbecc564b74f881646954e61a",
"assets/assets/svg/premiumdiscount.svg": "57e63562bc52b5a38a17eb46a16ce77c",
"assets/assets/svg/pricecalculator.svg": "cd9da516842945bbb94b0fa249691cb9",
"assets/assets/svg/products.svg": "19c7de0c574d9cb8bcf9a3c6bc4399ad",
"assets/assets/svg/pulse.svg": "7e2b344e0fe448bec2008ded15b14316",
"assets/assets/svg/quote.svg": "c07011f83c7f2ab631fcb061665b38dd",
"assets/assets/svg/raise_margin.svg": "5384964c4684459fc3e98f6f8f793fa4",
"assets/assets/svg/Referr_Icon.svg": "0d24fa4b165b0916233907fca3352f59",
"assets/assets/svg/reject.svg": "c6e820f3b4f3650d71017cdf286e0720",
"assets/assets/svg/reports.svg": "2ddf72a23d9c8b0b0c8ee211ae05665a",
"assets/assets/svg/researchcalls.svg": "f7881d9f25a3552a1bc313434b147889",
"assets/assets/svg/researchcalls2.svg": "2ed4074fcd344ef32ee4170ee7570132",
"assets/assets/svg/researchcalls3.svg": "9a7fa4a0cc34f72094a8496d29c116e0",
"assets/assets/svg/researchreport.svg": "b284dfdf082ee8bb0b1723a878e56cfc",
"assets/assets/svg/researchreport2.svg": "63672158cfc49118f1c795b97782ec5f",
"assets/assets/svg/right_arrow.svg": "bae8eb8d8e577bd62df33ca3cf8906ba",
"assets/assets/svg/rising&falling.svg": "e64aace6589a6952c272eeb554cd2015",
"assets/assets/svg/rolloverdata.svg": "6bd55d0c743ec2c96ce2d8924ecbb112",
"assets/assets/svg/rupeeSign.svg": "bd8cc845c2af129bd4f5cb773300cef9",
"assets/assets/svg/scanners.svg": "a55aefc62f838d128bb31b931c95104e",
"assets/assets/svg/screener.svg": "a55aefc62f838d128bb31b931c95104e",
"assets/assets/svg/screeners.svg": "a55aefc62f838d128bb31b931c95104e",
"assets/assets/svg/security1.svg": "b48449346527a01e142e2ed64f5423d2",
"assets/assets/svg/selected_checkbox.svg": "f8ed71dc87f71b2f1a67c428acfd952e",
"assets/assets/svg/selected_un_checkbox.svg": "096f2a1ab517ca6539be8569bb038937",
"assets/assets/svg/sell.svg": "6814c7a618e466db971a5c9c6a3483a2",
"assets/assets/svg/sgb.svg": "49236209ec6c636443a6b181419a9a66",
"assets/assets/svg/SIP.svg": "126ec539dc59c57677fb2b3ca59edfad",
"assets/assets/svg/sipbasket.svg": "9b8c02ceca87b1c39b4df32563572a0d",
"assets/assets/svg/sort.svg": "5462adac94494ccf1e9a3eae037272d2",
"assets/assets/svg/sort1.svg": "2e49061eef21af4f2872b3e3f2509be8",
"assets/assets/svg/sort2.svg": "bfea7bc926b4b5eb9d35e62fd3e7ea93",
"assets/assets/svg/speed-e.svg": "c6c28ab86115cd17a071130b49fd84dd",
"assets/assets/svg/spreads.svg": "e642f3186f8c3a35754879dd7ae3e659",
"assets/assets/svg/squareoff-dark.svg": "74259d9691a5ece819e6dafa88022f09",
"assets/assets/svg/squareoff-light.svg": "495e4e707257a424b7f3b3384e114ffe",
"assets/assets/svg/starttradingnow.svg": "b19ed76abe756733e01910e004a880db",
"assets/assets/svg/strong&weak.svg": "41f4caa79bd69522e8a7b32b9565642a",
"assets/assets/svg/success.svg": "ceb04630d0608a5b7d629b1c5e9e4117",
"assets/assets/svg/success1.svg": "12fa5ff7775f9e1d8305c7c968e6b136",
"assets/assets/svg/Successimg.svg": "76dd6f75bcd403344eeaac3d5a04ef0a",
"assets/assets/svg/suite.svg": "19c7de0c574d9cb8bcf9a3c6bc4399ad",
"assets/assets/svg/telephone.svg": "d285fcfd0b26e8bcff7baf9f6dc9bb42",
"assets/assets/svg/threedots.svg": "74d7badb4f853e8e06a7f21795cb6e49",
"assets/assets/svg/tick.svg": "81e4131bde37c20b572aa3603f9cd3ed",
"assets/assets/svg/timer.svg": "1a43db2609ab41eb8c9c2a71c7c79681",
"assets/assets/svg/tradeHistory.svg": "ca03c767aca49ebe0c60fbacbe159396",
"assets/assets/svg/transactions_pledge.svg": "e020f6807816f4dc3270c79123a97452",
"assets/assets/svg/twitter.svg": "c83aff49e51de7bfecf98655cdb83710",
"assets/assets/svg/uparrow.svg": "5c1dbc0e386a29d5d0d915c933fb7931",
"assets/assets/svg/upi_icon.svg": "8cbd4f46d68fc4a9f07b843869b5197e",
"assets/assets/svg/up_arrow.svg": "74558f08941d5f9278d810fca93c43a3",
"assets/assets/svg/user.svg": "76da031af56b5bff2e8bd94e7c7090dd",
"assets/assets/svg/volumeshocker.svg": "60f8e5180f2791da7ff2e9ad9b287a27",
"assets/assets/svg/Warning.svg": "9cb976431f24a9c3991ea0944a62e1cd",
"assets/assets/svg/watchlist.svg": "b2196461275371e0c2967d3f41dca84a",
"assets/assets/svg/watchlistRearrengeIcon.svg": "8f95e102e8fb7c3aa8c14e0c4203e9f7",
"assets/assets/svg/wealthbox.svg": "0897ff30d975e65a12302ed4ce94e61f",
"assets/assets/svg/withdraw.svg": "3e8128bc2c43d263c9e92befa03b9eec",
"assets/assets/svg/withdrawl_pledge.svg": "42d32cc1b3dc8a4673c4896df03d9206",
"assets/assets/svg/Withdraw_bank.svg": "4e6c1b4272b02a2179775b19b78b518e",
"assets/assets/svg/worldinvesting.svg": "a188c1d3dabc6b2bb3ad6c60b5e5fcae",
"assets/assets/svg/youtube.svg": "d885d465b7aae58436a69c101740d48f",
"assets/assets/tick.png": "936a57e8d58575d52db20b2fa9fb11fc",
"assets/assets/upi_logo.png": "bfbb5ae275af871b5af425e71addf45f",
"assets/assets/up_arrow.png": "fad1a0cafa4edf69e08188be2730e5fb",
"assets/assets/webp/1img.webp": "1f1fdf645f1a81f2ac04ef408e7b6149",
"assets/assets/webp/2img.webp": "857ccdb06cde49a18eb9f0b4b8f9624a",
"assets/assets/webp/3img.webp": "ba4fa810e30932f409a15efba0ce8b3d",
"assets/assets/webp/4img.webp": "41423d49ab827cdf7223c0b119405fc7",
"assets/assets/webp/5img.webp": "af8d2b99b121d2c1f1933fc68ada0abf",
"assets/assets/webp/insta.png": "c76205fa1f525e3a96c4fa2dcac9856a",
"assets/assets/webp/insta.webp": "eca9029e78d491939a944ce53a9012c6",
"assets/assets/webp/login1.webp": "df12fbdb9f62eb33b832f4cbffa0dfee",
"assets/assets/webp/touchLogin.webp": "0e3a2b597550f42018c0632e05b1c8b0",
"assets/assets/whatsapp_icon.png": "090c59595eafcb463e097a1441440a41",
"assets/assets/whatsNew.png": "5bf8de45521f4918ee3759a776eeeb8c",
"assets/FontManifest.json": "86fe2bd3d8acbcb7cc9de49a0da6758a",
"assets/fonts/MaterialIcons-Regular.otf": "5a66629a7aae2004541148807ddcb8af",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/NOTICES": "b54f90501680be88bddd2f38a7608974",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "dc2204dcf9de2fb4940360fda1b0a3ab",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/appLogo.gif": "b6b0c01eada33b3f5d6369eb34a3a059",
"icons/appLogo.png": "828e6d490f4e511be8c498992f6b697a",
"index.html": "72f2c44577112a8aef34eb3b691a0e46",
"/": "72f2c44577112a8aef34eb3b691a0e46",
"js/appicon.png": "ac08c0a60279deaf2565be41164e4e41",
"js/bundle.js": "e65354c3edf39eef4148b10e5e9eec09",
"js/custom.js": "ddaaad6311f5045fbba6eeae89181931",
"js/payment.js": "10dcf5a1fed3b6242025e582335da943",
"main.dart.js": "5e1d811d02f3ae98859140ba61f974e4",
"main.dart.js_1.part.js": "8360df2ba5ecdfc4f8da69e1ec3ef706",
"manifest.json": "095fe3edaf988f5f9e2a25f7aaff62cd",
"version.json": "48631b04b01787b084fc0cff23c8d7cd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
