# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```
travel-shop
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ 01
│  │  │  └─ 0ef4ac0591fb6b619c1866024acc079ffe5e45
│  │  ├─ 05
│  │  │  ├─ 499a75b988b686732683a7c9553b3cf150bae0
│  │  │  └─ e341decf36c2282b933a598b9bb8f8d203c090
│  │  ├─ 09
│  │  │  └─ 99b697bf37049e83ddafe8566fdc9b074de4ff
│  │  ├─ 0b
│  │  │  └─ 61e089e47a94e9b70934d5236065ed17c5efdb
│  │  ├─ 0c
│  │  │  ├─ 3037258296774fb1f5655fa2d8e166fd1203cc
│  │  │  └─ a1167dd80e831c95b851878265c7c0d5702b64
│  │  ├─ 0e
│  │  │  ├─ 41d5e35436b38124b505b9c367eddbe75a07cc
│  │  │  └─ ad14fb922d787c0e79e536b363cbc640f0615c
│  │  ├─ 0f
│  │  │  └─ 9eb616b0874134182c4d0c56acf7e5d84e4ab3
│  │  ├─ 11
│  │  │  └─ 36ddebf29b2932e09a8c95a30b0c85f5ac2b12
│  │  ├─ 12
│  │  │  └─ 63f7eed9aacba73bb40ea4cc3359af159cf049
│  │  ├─ 13
│  │  │  ├─ 2cf0860275eeacf55cf7521b7739df1807b41e
│  │  │  └─ 6c3d2385406a28e62f06f774bb688ab2e644eb
│  │  ├─ 14
│  │  │  └─ a4c0046f7aa11365d7c3f4fb09b22a370ebafb
│  │  ├─ 17
│  │  │  └─ 94336779dab5a88ccf6e72b15dc1f7d95b39a9
│  │  ├─ 18
│  │  │  └─ 9e408d473402af51ce4af07242850051dd3c0b
│  │  ├─ 1c
│  │  │  ├─ b028d32fd91739d459f666eee2717630b62dc4
│  │  │  ├─ cb0894e4c5cb39767928f4a50c6ef54a1cd1e8
│  │  │  ├─ e809f3cb3c02e7f1f06b699af54434849aa5b9
│  │  │  └─ effcfa1b835c705dd1a6c40106acdccee9e463
│  │  ├─ 1f
│  │  │  └─ def4b7ddbfe6135bf3749a464eda800b7de5ee
│  │  ├─ 20
│  │  │  ├─ 61861d0af00feb84349bb761a3855a82e961b9
│  │  │  └─ 810312346420d1c108a9fee554355eb0f0422a
│  │  ├─ 22
│  │  │  ├─ 45d730c370f979b5fcd30e366b9c661f0ce6c0
│  │  │  └─ 80876990c0efa6c5a2e2f9baeaba63b84afa0d
│  │  ├─ 23
│  │  │  └─ 0674ab1ec2e426a1776b9ae21eee10084e6ded
│  │  ├─ 28
│  │  │  └─ 0774faed19a22d89fd2ddbd1d748f153c9c868
│  │  ├─ 29
│  │  │  └─ db63e2070fd15c1a86e9f34726b077a93d0cc9
│  │  ├─ 2b
│  │  │  └─ fdb82332a4ce28ced7cb32b49a3e393618a25e
│  │  ├─ 2d
│  │  │  └─ 024492f3ed677fedac32813465d8566c429dcd
│  │  ├─ 30
│  │  │  └─ b0ee653c15dc6f020b6a312257cf2015039c55
│  │  ├─ 33
│  │  │  └─ 7ee2b65550815ebc595fc6a461e6dbd571874b
│  │  ├─ 34
│  │  │  └─ 135530435bde395d023d4405f0132fe71d7c22
│  │  ├─ 35
│  │  │  ├─ 2d4be2b92b9eda268b374a3c09d185ca7c75ca
│  │  │  └─ 706ab5e6f6638e84b6d4db4fd1557055b5edc0
│  │  ├─ 36
│  │  │  └─ 0396213e507ee42d17d9358af5f399873b8d72
│  │  ├─ 37
│  │  │  ├─ 19c80495b4c60a7d771e2bb9ae86ffd60f9777
│  │  │  ├─ 3f9dd9c8a9f8a98497d539c2d811ca4d39ec91
│  │  │  └─ da4d9ee62f5234a037cb3fbf9ac3fc54a6473b
│  │  ├─ 38
│  │  │  └─ 8a356792772b1f9d6d6c9cd2d0de0d9ced7246
│  │  ├─ 39
│  │  │  ├─ 18def3f3458e0e9dfb9ac26da37a31d371335b
│  │  │  ├─ 43caa5889aad138bce3a632172d540cf1b865a
│  │  │  └─ 96708ad962ab20bc7c4394aa6ccd037d562773
│  │  ├─ 3c
│  │  │  └─ 5d3c071b0e2e2d07e17b0780e4f9e06e8c0c67
│  │  ├─ 3d
│  │  │  └─ fa45b41a49df5a457012acb962257b3f48446e
│  │  ├─ 40
│  │  │  └─ 9688052956ac0be3292d59235f662a6a28a533
│  │  ├─ 41
│  │  │  └─ 08b33e7b3aae71ade8d7e209a72f99f17c3485
│  │  ├─ 44
│  │  │  └─ 72f34f7c07271a42618a924e1d1bb551eb1025
│  │  ├─ 45
│  │  │  ├─ 43da749a229c4e1156b20f5db64b8702f19977
│  │  │  └─ c172ff21bf6f65696be5c9027f6a48b6674f35
│  │  ├─ 47
│  │  │  ├─ 04f35ef93a23a73385ea048c7af059f8da38f2
│  │  │  └─ f450f54e747afb6f58117ee04b41322c85b192
│  │  ├─ 4a
│  │  │  └─ b7fc39894fff4b208fa497db2d137e69bfdf8e
│  │  ├─ 4b
│  │  │  ├─ 31e62daca63eb47a8e517a88e0c87a1f0db7cf
│  │  │  └─ 825dc642cb6eb9a060e54bf8d69288fbee4904
│  │  ├─ 57
│  │  │  └─ 6611eba9fa38f2fc31e33a87f48e5880222029
│  │  ├─ 58
│  │  │  └─ 3caac1e0493a8b6e57718ce98b3a1f77a5d93a
│  │  ├─ 5a
│  │  │  └─ cc5e435a9c1355ee4c525aff72e0af5b0a479f
│  │  ├─ 5b
│  │  │  └─ 69faf037285d88c9407a81443d22f7a9968edd
│  │  ├─ 5e
│  │  │  └─ 0ffdf32522e4f61d35e0df4ee41634cf70af9a
│  │  ├─ 67
│  │  │  └─ babc2620fc2d584e97d4ff9a72220110d5711b
│  │  ├─ 6a
│  │  │  └─ da33cf4807fd7e7fa70cacdd28350c7147ad5c
│  │  ├─ 6d
│  │  │  └─ c689e4880a649ef0b21382a9a6ea583812f0c5
│  │  ├─ 6e
│  │  │  ├─ 55b39c4f77945f722867160aaea90a7c630fef
│  │  │  └─ fa25f7abc7707545e59e43c6d77e4663ecdeb9
│  │  ├─ 6f
│  │  │  └─ a63a0810ed462f7e360de4c3b9837823ccb636
│  │  ├─ 70
│  │  │  └─ eb60e6badc363b253b2e7df4a158be2852ed04
│  │  ├─ 71
│  │  │  └─ 9cb37d225a79c64aaafbebbae46d3a54944c3c
│  │  ├─ 74
│  │  │  └─ 6f35fe48936fe6f559923236f1a8fda0ba59c2
│  │  ├─ 75
│  │  │  └─ b4ed2864a65033b200a94fd4559644822a73d2
│  │  ├─ 76
│  │  │  └─ ee13f7d1aee2efac3d8196bd996ac81979eb63
│  │  ├─ 77
│  │  │  └─ c68d6d5d82e04396a7081eafff7a6809900664
│  │  ├─ 7c
│  │  │  └─ ddf2d3782700fac8da719d943f4b91af356b39
│  │  ├─ 7d
│  │  │  ├─ 0ff9efa9d6b0fd823a2f371308a9f92c7771c1
│  │  │  └─ bd9d18b2f1adce60d00f8060fde8333626e3f6
│  │  ├─ 7e
│  │  │  └─ b9d8ba9769cb938e72746515725d4438cad712
│  │  ├─ 83
│  │  │  ├─ 318d34e6c93ac364bedfcf1a66b4aaa60d39d1
│  │  │  └─ 6e4b5c1503be4be01656108aa052071b091c4d
│  │  ├─ 87
│  │  │  └─ 3d7655d75184ffab816fea639002b95b3e6bb4
│  │  ├─ 89
│  │  │  └─ 9795c6eba429094c26167cdfa661a26b48e473
│  │  ├─ 8a
│  │  │  ├─ 6aefe65661afb8bcec3dd1c3b018113d4c828b
│  │  │  └─ 788eedc5aee38220ea2b683f0bed2be3780ba3
│  │  ├─ 8c
│  │  │  ├─ bf5a7fab8a71c6c3ca1f08367f37936d7a0473
│  │  │  └─ dd1a23b02f9d7d40a68f2580271821f3fa050c
│  │  ├─ 8f
│  │  │  └─ 156fa2190c67ddc18707ac285ffe41209a1859
│  │  ├─ 93
│  │  │  └─ c6c8f781d1517ec80adeb3e628297fd639b9a9
│  │  ├─ 95
│  │  │  └─ e45f4041ce73e4a50d77f1a3bb59be346db9f6
│  │  ├─ 96
│  │  │  └─ 9c20b4d2a4231bbacb81c5f5e8700dc4213fad
│  │  ├─ 99
│  │  │  └─ b910185e31d6ac2021b9d59df89ddd28a30426
│  │  ├─ 9a
│  │  │  ├─ a9bbf18ac3fa31f37eddf7994e582d40cc1002
│  │  │  └─ f87c8eafd94e712d17d0aabc03ab0b804d78db
│  │  ├─ a2
│  │  │  └─ feb2fb6798d5caf3b38bf669ccff8994ed783c
│  │  ├─ a4
│  │  │  ├─ 1d209676e457d78c52f6795278456d2e437c9e
│  │  │  └─ 96e3d5be6fdfee4acfa847059f81e4c8703c32
│  │  ├─ a5
│  │  │  └─ 73d17ae955c7d347847226e75686389cbe27a6
│  │  ├─ a9
│  │  │  ├─ 88449b957caea0e79405598e08ca113250ed48
│  │  │  ├─ aef380c58d3a61fc7a0baede317e4ed3e8d632
│  │  │  └─ bf4e4dc0458903a377f1ede31a8ace2c833a75
│  │  ├─ ac
│  │  │  └─ 0d091e0947a656509437ef9d97153532876178
│  │  ├─ ad
│  │  │  ├─ 0b66e7db7570733245e657666389bc15d00eb5
│  │  │  └─ fafe91ead998e00eec23af1b4bf0ea69647ef3
│  │  ├─ b0
│  │  │  └─ b3f5ec61eea009d3c22285a9e0a0e7f22f5c64
│  │  ├─ b4
│  │  │  └─ 22e2fbbe5050162f5c66310eb1cc47a7dbbe02
│  │  ├─ b8
│  │  │  └─ 50582096101bf4712f6b68386524ab3d4af418
│  │  ├─ bd
│  │  │  └─ 1ebe353c929460def000926e1c54d22554f6df
│  │  ├─ be
│  │  │  ├─ 9bbf45256802443f0916a2050b122ac95787ae
│  │  │  └─ ca49e12ebdcb91f8c412c8de8efdc16d22f569
│  │  ├─ c0
│  │  │  ├─ 427eee4aef56ed256e5f535a2e6ebdf29b1d22
│  │  │  ├─ cc0713b247aec960cb630252653e5665d24d1a
│  │  │  └─ e5821605ee887cc1098e5c4d6a03f25a42f8c3
│  │  ├─ c4
│  │  │  ├─ 477eade78f2082af87e5a23863852d6e2d9a98
│  │  │  ├─ 6fefa0229b38d2b311f3c27e3abb50c16750e4
│  │  │  └─ c431e4246cf144c2d1e34ad7c98c096801a00b
│  │  ├─ c7
│  │  │  └─ a81b69e47b594f1dde87951f479535e5b134e0
│  │  ├─ c8
│  │  │  └─ 2e5e7cd3c82cb91b4a99dee489d5aeb441d366
│  │  ├─ c9
│  │  │  └─ 00d078ad6fb1ae319e0005874f645e10a01b51
│  │  ├─ ca
│  │  │  └─ f8bf6be240f30d62342d6811e5a91efea5c7e3
│  │  ├─ cd
│  │  │  └─ 633dc7fdd18404ec4c27fa2a60026b2405312e
│  │  ├─ ce
│  │  │  └─ 906e92ffb97c922fdf63358f1d473331ec2e40
│  │  ├─ cf
│  │  │  ├─ 9ec6dbc94ed494536f04265124d2f745ece16a
│  │  │  └─ cfc474e8db8bcbaea0a9de386706f9237f80ac
│  │  ├─ d2
│  │  │  └─ f4ef1b2dd584f501ce5116a990a240292637d2
│  │  ├─ d4
│  │  │  └─ 2164053db0d57d4edcbd046ad9c35ac4c6e5e8
│  │  ├─ d5
│  │  │  ├─ 6ff481447450cb7439f2bbff582357cb6161bf
│  │  │  └─ a52054413d58be7136df417dc6094c9bc89e96
│  │  ├─ d6
│  │  │  ├─ 598999bcf7a0bfda61ec420461c7ae96f0491b
│  │  │  └─ c79dbcf101cb7fe8d30628f73b3de99bbc987a
│  │  ├─ d9
│  │  │  ├─ 2c1890259fdd2284c2702897f6295642d21a19
│  │  │  └─ bf90ca49032aa4e502f1319e558e6459650890
│  │  ├─ da
│  │  │  └─ ceda28a57e76302e636d84b28f2ababba19047
│  │  ├─ df
│  │  │  └─ c8b2e0a47a08962d5dac389372b273fc96d029
│  │  ├─ e0
│  │  │  └─ 99ddd024627822ff1892b8cfc28789532c3be5
│  │  ├─ e5
│  │  │  ├─ 428e3c1a31e9cb79b87041cc59be97f05b7b60
│  │  │  └─ a1c3d95636043a30c3f8f4c0719a941c847ea7
│  │  ├─ e6
│  │  │  ├─ 7351182ec90659468998a823820468165cd7aa
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ e7
│  │  │  ├─ 91824f985ad66b583f8d7f2f93da98c1e96dae
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ ea
│  │  │  └─ 3e777076db4ebce903375e531384d67c8cf88e
│  │  ├─ ee
│  │  │  └─ 5953fccbec3448d8223312fb1ab3250ec804da
│  │  ├─ ef
│  │  │  ├─ 284889bd2fdceb213a5ba6d1490d1ef15752f1
│  │  │  └─ 30c0e07e85b2795c9f2b58355aa4e54059bf25
│  │  ├─ f0
│  │  │  └─ 2aedf840a894bd862b80cc54c75e985f4b1b1d
│  │  ├─ f3
│  │  │  ├─ c8df619bcac1a77998fadc8905a2ca3f083a3c
│  │  │  └─ f545084aa4a53c59a2cb7c9441c70e27491d84
│  │  ├─ f4
│  │  │  └─ 4c3fb631bd014abde42e4966eb0b8a3c9573b1
│  │  ├─ f5
│  │  │  ├─ 2e189fe6c69d2b7c9e330cfff650098852e36e
│  │  │  └─ 52514d0aae63e1c794666159c17f513d5b107b
│  │  ├─ f6
│  │  │  └─ f6d6e67e91384ddb9ad0b74f9f7465c7baf2f7
│  │  ├─ f8
│  │  │  ├─ ca20b17108e1bc1aac021cbd30c62c62a4f985
│  │  │  └─ e9ef8510b64db55837771590401235fa011a1e
│  │  ├─ fa
│  │  │  ├─ c380bd12d7e453ac46433009746ab49a25f049
│  │  │  └─ fe4d9ed96617c0604e1ce174471c0393b5dbf8
│  │  ├─ fb
│  │  │  └─ ef398be3c294e7b83775da527b9183fe57250c
│  │  ├─ fd
│  │  │  ├─ b4d1132da2f220cbff5e25f5319c335b666c06
│  │  │  └─ e10037919a91321d84c7aac449fa9de92b70dc
│  │  ├─ info
│  │  └─ pack
│  ├─ refs
│  │  ├─ heads
│  │  │  ├─ feature
│  │  │  │  └─ backend
│  │  │  └─ main
│  │  ├─ remotes
│  │  │  └─ origin
│  │  │     ├─ feature
│  │  │     │  └─ backend
│  │  │     └─ main
│  │  └─ tags
│  └─ sourcetreeconfig
├─ .gitignore
├─ README.md
├─ electron-builder.json5
├─ electron.vite.config.ts
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ electron-vite.animate.svg
│  ├─ electron-vite.svg
│  └─ vite.svg
├─ server
│  ├─ .env
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ app.ts
│  │  ├─ config
│  │  │  ├─ database.ts
│  │  │  └─ env.ts
│  │  ├─ controllers
│  │  │  ├─ auth.controller.ts
│  │  │  ├─ authController.ts
│  │  │  ├─ chatController.ts
│  │  │  ├─ orderController.ts
│  │  │  ├─ product.controller.ts
│  │  │  └─ productController.ts
│  │  ├─ middleware
│  │  │  ├─ auth.ts
│  │  │  ├─ error.ts
│  │  │  ├─ errorHandler.ts
│  │  │  ├─ logger.ts
│  │  │  └─ validateRequest.ts
│  │  ├─ models
│  │  │  ├─ Chat.ts
│  │  │  ├─ Order.ts
│  │  │  ├─ Product.ts
│  │  │  └─ User.ts
│  │  ├─ routes
│  │  │  ├─ auth.routes.ts
│  │  │  ├─ auth.ts
│  │  │  ├─ chat.ts
│  │  │  ├─ index.ts
│  │  │  ├─ orders.ts
│  │  │  ├─ product.routes.ts
│  │  │  ├─ products.ts
│  │  │  └─ test.routes.ts
│  │  ├─ utils
│  │  │  ├─ ApiError.ts
│  │  │  ├─ AppError.ts
│  │  │  └─ catchAsync.ts
│  │  └─ validations
│  │     └─ auth.validation.ts
│  └─ tsconfig.json
├─ src
│  ├─ main
│  │  └─ index.ts
│  ├─ preload
│  │  └─ index.ts
│  ├─ renderer
│  │  ├─ index.html
│  │  ├─ package-lock.json
│  │  ├─ package.json
│  │  └─ src
│  │     ├─ App.tsx
│  │     ├─ api
│  │     │  ├─ config.ts
│  │     │  ├─ index.ts
│  │     │  ├─ products.ts
│  │     │  └─ request.ts
│  │     ├─ assets
│  │     ├─ components
│  │     │  ├─ Auth
│  │     │  │  └─ PrivateRoute.tsx
│  │     │  ├─ CartItem
│  │     │  │  └─ index.tsx
│  │     │  ├─ Chat
│  │     │  │  ├─ ChatInput.tsx
│  │     │  │  ├─ ChatMessage.tsx
│  │     │  │  └─ ChatRoom.tsx
│  │     │  ├─ ProductCard
│  │     │  │  └─ index.tsx
│  │     │  └─ ProductList
│  │     │     └─ index.tsx
│  │     ├─ layouts
│  │     │  └─ MainLayout.tsx
│  │     ├─ main.tsx
│  │     ├─ mock
│  │     │  ├─ chat.ts
│  │     │  └─ products.ts
│  │     ├─ pages
│  │     │  ├─ Auth
│  │     │  │  ├─ Login.tsx
│  │     │  │  └─ Register.tsx
│  │     │  ├─ Cart
│  │     │  │  └─ index.tsx
│  │     │  ├─ Chat
│  │     │  │  └─ index.tsx
│  │     │  ├─ Home
│  │     │  │  └─ index.tsx
│  │     │  ├─ Orders
│  │     │  │  └─ index.tsx
│  │     │  ├─ ProductDetail
│  │     │  │  └─ index.tsx
│  │     │  ├─ Products
│  │     │  │  └─ index.tsx
│  │     │  └─ Products~
│  │     ├─ routes.tsx
│  │     ├─ stores
│  │     │  ├─ useAuthStore.ts
│  │     │  ├─ useCartStore.ts
│  │     │  ├─ useOrderStore.ts
│  │     │  ├─ useProductStore.ts
│  │     │  └─ useUserStore.ts
│  │     ├─ types
│  │     │  ├─ chat.ts
│  │     │  ├─ index.ts
│  │     │  ├─ product.ts
│  │     │  └─ user.ts
│  │     └─ utils
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```