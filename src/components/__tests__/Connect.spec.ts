import Connect from '../Connect.vue'
import { render, fireEvent, waitFor, screen } from '@testing-library/vue'
import { useState } from '@/stores'
import { WALLET_CONNECT, WINDOW_LUKSO } from '@/helpers/config'

window.lukso = {} as typeof window.lukso

jest.mock('@/utils/isDesktop', () => ({
  isDesktop: jest.fn().mockReturnValue(true),
}))

const mockCall = jest.fn()
const mockGetProvider = jest.fn()
const mockSetupWeb3 = jest.fn()
const mockAccounts = jest.fn()
const mockGetBalance = jest.fn()
const mockRequestAccounts = jest.fn()
const mockDisconnect = jest.fn()

jest.mock('@/compositions/useWeb3Connection', () => ({
  __esModule: true,
  default: () => ({
    disconnect: () => mockDisconnect(),
    setupProvider: (arg: string) => mockSetupWeb3(arg),
    getChainId: () => 22,
    accounts: () => mockAccounts(),
    getBalance: () => mockGetBalance(),
    requestAccounts: () => mockRequestAccounts(),
    contract: () => ({
      methods: {
        owner: () => ({
          call: () => mockCall(),
        }),
      },
    }),
  }),
}))

beforeEach(() => {
  const { setDisconnected } = useState()
  setDisconnected()
  jest.resetAllMocks()
})

test('can connect to wallet connect V2', async () => {
  mockGetProvider.mockReturnValue({
    wc: {
      connected: false,
    },
  })

  render(Connect)

  expect(mockSetupWeb3).toBeCalledTimes(1)

  await fireEvent.click(screen.getByTestId('connect-wc-v2'))

  expect(mockSetupWeb3).toBeCalledTimes(2)
  expect(mockSetupWeb3).toHaveBeenLastCalledWith(WALLET_CONNECT)
})

test('can disconnect from wallet connect V2', async () => {
  mockGetProvider.mockReturnValue({
    wc: {
      connected: true,
    },
  })
  mockGetBalance.mockReturnValue('2')
  const { setConnected } = useState()
  await setConnected(
    '0x8e54b33F8d42E59c0B4Cf02e6457CF8bb6a71094',
    WALLET_CONNECT
  )

  render(Connect)

  expect(mockSetupWeb3).toBeCalledTimes(1)
  expect(screen.getByTestId('address')).toHaveTextContent('0x8e54b3...')

  await fireEvent.click(screen.getByTestId('disconnect'))

  await waitFor(() => {
    expect(mockDisconnect).toHaveBeenCalled()
  })
})

test('can connect to browser extension when authorized', async () => {
  mockAccounts.mockResolvedValue('0xD8B0b80Fa7938f2F841b314d8b6052EAe97db826')
  mockGetProvider.mockReturnValue({
    wc: {
      connected: false,
    },
  })
  mockGetBalance.mockReturnValue('2')
  const { setConnected } = useState()

  render(Connect)

  await fireEvent.click(screen.getByTestId('connect-extension'))

  expect(mockSetupWeb3).toBeCalledTimes(2)
  await setConnected('0x8e54b33F8d42E59c0B4Cf02e6457CF8bb6a71094', WINDOW_LUKSO)
  await waitFor(() => {
    expect(screen.getByTestId('address')).toHaveTextContent(
      /.*0x8e54b3\.\.\..*/,
      {
        normalizeWhitespace: true,
      }
    )
  })
  await waitFor(() => {
    expect(screen.getByTestId('balance')).toHaveTextContent('2 LYX')
  })
})

test('can connect to browser extension when not authorized', async () => {
  mockAccounts.mockResolvedValue(undefined)
  mockRequestAccounts.mockReturnValue([
    '0x7367C96553Ed4C44E6962A38d8a0b5f4BE9F6298',
  ])
  mockGetProvider.mockReturnValue({
    wc: {
      connected: false,
    },
  })
  mockGetBalance.mockReturnValue('3')
  const { setConnected } = useState()

  render(Connect)

  await waitFor(
    () => {
      expect(screen.getByTestId('connect-extension')).toBeEnabled()
    },
    { timeout: 1000 }
  )

  await fireEvent.click(screen.getByTestId('connect-extension'))
  await setConnected('0x8e54b33F8d42E59c0B4Cf02e6457CF8bb6a71094', WINDOW_LUKSO)

  await waitFor(() => {
    expect(screen.getByTestId('address')).toHaveTextContent(
      /.*0x8e54b3\.\.\..*/,
      { normalizeWhitespace: true }
    )
    expect(screen.getByTestId('balance')).toHaveTextContent('3 LYX')
  })
}, 5000)
