# Universal Profile Test dApp

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/lukso-network/universalprofile-test-dapp/Build%20and%20Test?label=tests)

A sample app to demonstrate the displaying, deploying and usage of a universal profile inside a web app.

Running version: <http://up-test-dapp.lukso.tech/>

Stack:

- [Vite 3](https://vitejs.dev/guide/)
- [Vue 3](https://vuejs.org/guide/introduction.html)
- [web3.js](https://web3js.readthedocs.io/)
- [erc725.js](https://docs.lukso.tech/tools/erc725js/getting-started/)
- [lsp-factory.js](https://docs.lukso.tech/tools/lsp-factoryjs/getting-started/)
- [Bulma](https://bulma.io/)
- [Vue Router](https://github.com/vuejs/router)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
- [Jest](https://jestjs.io/)

## Project setup

```sh
yarn install
yarn prepare
```

Yarn prepare will correctly install husky and lint-staged to validate commits pre-commit.

### Development

```sh
yarn dev
```

### Tests/linters

```sh
yarn test:unit
yarn lint
```

For checking production version:

```sh
yarn preview
```

### Upgrades

```sh
yarn upgrade-interactive
```

> NOTE: Current all jest related npms are still on version 28. Please do not upgrade to 29 as it's a very
> large piece of work

## Wallet Connect V2

This project supports Wallet Connect V2, a [project ID should be set](https://docs.walletconnect.com/2.0/javascript/sign/installation) in `constants.ts` file.

# MAARTENMAARTENMAARTENMAARTENMAARTENMAARTENMAARTENMAARTENMAARTENMAARTEN

# project tree reference:

├─ CNAME
├─ README.md
├─ bigBagBoogy.md
├─ index.html
├─ jest.config.cjs
├─ jest.setup.cjs
├─ package.json
├─ public
│ ├─ cube.png
│ ├─ logo.png
│ ├─ lukso.png
│ └─ walletconnect-logo.svg
├─ src
│ ├─ App.vue
│ ├─ abis
│ │ ├─ CustomERC20AndERC165
│ │ │ ├─ CustomERC20AndERC165.json
│ │ │ └─ CustomERC20AndERC165.sol
│ │ ├─ eip165ABI.ts
│ │ ├─ erc20ABI.ts
│ │ ├─ erc721ABI.ts
│ │ └─ erc777ABI.ts
│ ├─ assets
│ │ └─ main.scss
│ ├─ components
│ │ ├─ Connect.vue
│ │ ├─ Navbar.vue
│ │ ├─ Notification.vue
│ │ ├─ **tests**
│ │ │ ├─ Connect.spec.ts
│ │ │ └─ Notification.spec.ts
│ │ ├─ endpoints
│ │ │ ├─ Accounts.vue
│ │ │ ├─ Assets.vue
│ │ │ ├─ CustomRelayer.vue
│ │ │ ├─ GetNetworkId.vue
│ │ │ ├─ ImportProfile.vue
│ │ │ ├─ Mint.vue
│ │ │ ├─ Permissions.vue
│ │ │ ├─ SendTransaction.vue
│ │ │ ├─ SetData.vue
│ │ │ ├─ Sign.vue
│ │ │ ├─ Transfer.vue
│ │ │ └─ **tests**
│ │ │ ├─ Accounts.spec.ts
│ │ │ ├─ Assets.spec.ts
│ │ │ ├─ CustomRelayer.spec.ts
│ │ │ ├─ Mint.spec.ts
│ │ │ ├─ Permissions.spec.ts
│ │ │ ├─ SendTransaction.spec.ts
│ │ │ ├─ SetData.spec.ts
│ │ │ └─ Sign.spec.ts
│ │ ├─ modals
│ │ │ └─ ProfileModal.vue
│ │ ├─ profile
│ │ │ └─ profile-list-ipfs
│ │ │ └─ ProfileListIpfs.vue
│ │ └─ shared
│ │ ├─ ContractFunction.vue
│ │ ├─ CustomSelect.vue
│ │ ├─ LSPSelect.vue
│ │ ├─ Lsp4MetadataForm.vue
│ │ ├─ ParamField.vue
│ │ └─ **tests**
│ │ └─ ContractFunction.spec.ts
│ ├─ compositions
│ │ ├─ **tests**
│ │ │ ├─ useDropdown.spec.ts
│ │ │ ├─ useLspFactory.spec.ts
│ │ │ ├─ useNotification.spec.ts
│ │ │ └─ useWeb3Connection.spec.ts
│ │ ├─ useDropdown.ts
│ │ ├─ useErc20.ts
│ │ ├─ useErc725.ts
│ │ ├─ useLspFactory.ts
│ │ ├─ useNotifications.ts
│ │ ├─ useWalletConnectV2.ts
│ │ ├─ useWeb3Connection.ts
│ │ └─ useWeb3Onboard.ts
│ ├─ enums.ts
│ ├─ global.d.ts
│ ├─ helpers
│ │ ├─ config.ts
│ │ ├─ deployment.helper.ts
│ │ ├─ formatNumber.ts
│ │ ├─ functionUtils.ts
│ │ ├─ localstorage.ts
│ │ └─ tokenUtils.ts
│ ├─ interfaces
│ │ ├─ html-input-event.ts
│ │ └─ network.d.ts
│ ├─ main.ts
│ ├─ router
│ │ └─ index.ts
│ ├─ shims-vue.d.ts
│ ├─ stores
│ │ └─ index.ts
│ ├─ types.d.ts
│ ├─ utils
│ │ ├─ **tests**
│ │ │ ├─ createLinks.spec.ts
│ │ │ └─ dateTime.spec.ts
│ │ ├─ createLinks.ts
│ │ ├─ dateTime.ts
│ │ ├─ hexToBytes.ts
│ │ ├─ isDesktop.ts
│ │ ├─ parseLspStringToJson.ts
│ │ └─ sliceAddress.ts
│ └─ views
│ ├─ Home.vue
│ ├─ IFrame.vue
│ ├─ Profile.vue
│ └─ profile
│ ├─ Deploy.vue
│ ├─ Detail.vue
│ ├─ Upload.vue
│ └─ **tests**
│ ├─ Deploy.spec.ts
│ ├─ Detail.spec.ts
│ └─ Upload.spec.ts
├─ tests
│ └─ setup-env.ts
├─ tsconfig.json
├─ tsconfig.node.json
├─ versions.json
├─ vite.config.ts
└─ yarn.lock

```

```
