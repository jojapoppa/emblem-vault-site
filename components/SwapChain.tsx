import { Box, Flex, Text, Link, Image, Stack, Button, BoxProps, Input } from '@chakra-ui/core'
import Loader from 'react-loader'
import Refreshing from './Refreshing'
import { useRouter } from 'next/router'
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { validImage, toContractValue } from '../utils'
import { useContract } from '../hooks'
import { Contract } from '@ethersproject/contracts'
import { EMBLEM_API, contractAddresses } from '../constants'
import { TransactionToast } from './TransactionToast'
import { parseUnits } from '@ethersproject/units'

export default function SwapChain() {
  const { query } = useRouter()
  const { account, chainId } = useWeb3React()
  // const [vaults, setVaults] = useState([])
  const [state, setState] = useState({ loaded: false })
  const [loadingApi, setLoadingApi] = useState(false)
  const [approving, setApproving] = useState(false)
  const [transfering, setTransfering] = useState(false)
  const [balance, setBalance] = useState(null)
  const [address, setAddress] = useState(query.address)
  const [experimental, setExperimental] = useState(query.experimental)
  const [decimals, setDecimals] = useState(null)
  const [allowance, setAllowance] = useState(null)
  const [covalApprovedFor, setIsCovalApproved] = useState(0)
  const [hash, setHash] = useState(null)
  const [swapAmount, setSwapAmount] = useState(0)
  const [isInvalid, setIsInvalid] = useState(false)

  const handlerContract = useContract(contractAddresses.vaultHandler[chainId], contractAddresses.vaultHandlerAbi, true)
  const covalContract = useContract(contractAddresses.coval[chainId], contractAddresses.covalAbi, true)


  interface ErrorWithCode extends Error {
    code?: number
  }

  const transferToChain = async () => {
    setTransfering(true)
    ;(handlerContract as Contract)
    .transferToChain(chainId == 137 ? 1: 137, swapAmount.toString())
    .then(({ hash }: { hash: string }) => {
      setHash(hash)
    })
    .catch((error: ErrorWithCode) => {
      if (error?.code == 4001) {
        setTransfering(false)
      }
    })
  }

  const getContractStates = async () => {
    setHash(null)
    setDecimals(await covalContract.decimals())
    setAllowance(
      await covalContract
        .allowance(account, contractAddresses.vaultHandler[chainId])
        .then((balance: { toString: () => string }) => balance.toString())
    )
    setBalance(await covalContract.balanceOf(account).then((balance: { toString: () => string }) => balance.toString()))
    if (Number(allowance) >= Number(0)) {      
      setIsCovalApproved(allowance)
    }
    setState({ loaded: true })
  }

  const approveCovalFlow = () => {
    setApproving(true)
    ;(covalContract as Contract)
      .approve(contractAddresses.vaultHandler[chainId], 1000000 * Math.pow(10, +decimals) )
      .then(({ hash }: { hash: string }) => {
        setHash(hash)
      })
      .catch((error: ErrorWithCode) => {
        if (error?.code == 4001) {
          setApproving(false)
        }
      })
  }

  const getTransferLogs = async () =>{
    console.log("getting logs")
    fetch(EMBLEM_API + '/transfersOut', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        service: 'evmetadata',
        chainid: chainId.toString()
      }
    }).then(async function (response) {
      console.log("doing transfers")
      fetch(EMBLEM_API + '/doTransfers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          service: 'evmetadata',
          chainid: chainId.toString()
        }
      }).then(async function (response) {
        getContractStates()
      })
    })
  }

  function SwapText({ children, ...rest }: BoxProps): JSX.Element {
    return (
      <Text fontSize="2xl" lineHeight={1} py="0.3rem" {...rest}>
        {children}
      </Text>
    )
  }

  const [acct, setAcct] = useState('')
  useEffect(() => {
    if (account && acct != account) {
      setAcct(account)
      setState({ loaded: false })
      getContractStates()
    }
  }, [account, acct])

  const [chain, setChain] = useState(chainId)
  useEffect(() => {
    if (chainId && chain != chainId) {
      setChain(chainId)
      setState({ loaded: false })
      getContractStates()
    }
  }, [chainId, chain])

  useEffect(() => {
    account && chainId ? setState({ loaded: true }) : null
  }, [])

  return (
    <Loader loaded={state.loaded}>
      {loadingApi ? <Refreshing /> : ''}

      <Flex w="100%" justify="center" mt={10}>
        <Stack align="center">
          {true ? (
            <>
              {/* <Box mt="2" ml="4" lineHeight="tight">
                <Text mt={2} as="h4" ml="4" mr="4" fontSize="s" fontStyle="" >
                  Transfer up to {allowance > balance ? balance * Math.pow(10, -decimals) : allowance * Math.pow(10, -decimals) } Coval from {chainId == 137 ? "Matic" : "Ethereum"} Network to {chainId == 137 ? "Etherum" : "Matic"} Network
                </Text>              
              </Box>
              {balance > allowance ? (                 
                <Box mt="2" ml="4" lineHeight="tight">
                  <Button onClick={approveCovalFlow} type="submit">
                    Increase transfer allowance to { balance * Math.pow(10, -decimals) } Coval
                  </Button>
                </Box>
              ) : null } */}
              <Stack direction="row" align="flex-start" spacing="1rem" flexWrap="wrap" shouldWrapChildren>
                <SwapText>I want to transfer </SwapText>
                <Input variant="flushed"
                  fontSize="1xl"
                  textAlign="center"
                  // universal input options
                  inputMode="decimal"
                  title="Token Amount"
                  autoComplete="off"
                  autoCorrect="off"
                  // text-specific options
                  type="text"
                  placeholder="0"
                  minLength={1}
                  maxLength={79}
                  isInvalid={isInvalid}
                  onChange={(e) => {
                    let calculatedAmount = Number(parseUnits(e.target.value, decimals).toString())
                    
                    if (calculatedAmount > Number(balance) || calculatedAmount > Number(allowance)) {
                      setIsInvalid(true)
                    } else {                      
                      setIsInvalid(false)
                    }
                    setSwapAmount(Number(calculatedAmount))
                  }}
                  spellCheck="false"/>
                  <SwapText>$Coval</SwapText>                  
              </Stack>
              <Stack direction="row" align="flex-start" spacing="1rem" flexWrap="wrap" shouldWrapChildren>
                <SwapText> <Text  float={'left'}>from {chainId == 137 ? "Matic" : "Ethereum"} Network to</Text> <Image float={'left'} margin={2} w={3} src="./next.png" />{chainId == 137 ? "Etherum" : "Matic"} Network </SwapText>
                { swapAmount > 0 ? (
                  <Button isDisabled={isInvalid} onClick={transferToChain}>
                    { isInvalid ? "Invalid Transfer Amount" : "Transfer Now"}
                  </Button>
                ) : null }
              </Stack>
            </>    
          ) : null }
          {
          allowance == 0 && balance > 0 && !approving ? (
            <Box mt="2" ml="4" lineHeight="tight">
              <Text mt={2} as="h4" ml="4" mr="4" fontSize="s" fontStyle="italic" >
                <Button onClick={approveCovalFlow} type="submit">
                  Approve Transfer of up {balance * Math.pow(10, -decimals)} Coval
                </Button>
              </Text>
            </Box>
          ) : balance == 0 ? (
            <Box mt="2" ml="4" lineHeight="tight">
              <Text mt={2} as="h4" ml="4" mr="4" fontSize="s" fontStyle="italic" >
                You have no Coval to transfer
              </Text>
            </Box>
          ) : !approving ? (
            <Box mt="2" ml="4" lineHeight="tight">
              <Text mt={2} as="h4" ml="4" mr="4" fontSize="s" fontStyle="italic" >
                Approved to transfer up to {allowance * Math.pow(10, -decimals)} Coval. Note: Swaps between networks can take up to 25 minutes.
              </Text>
            </Box>
          ) : null }
          { !approving && ((Number(balance) > Number(allowance)) || Number(allowance) * Math.pow(10, -decimals) < 1000000) ? (
            <Box mt="2" ml="4" lineHeight="tight">
              <Text mt={2} as="h4" ml="4" mr="4" fontSize="s" fontStyle="italic" >
              <Button onClick={approveCovalFlow} type="submit">
                  Approve Transfer 1,000,000 Coval
                </Button>
              </Text>
            </Box>
          ) : null }
        </Stack>
      </Flex>
      {hash ? (
        <TransactionToast
          hash={hash}
          onComplete={() => {
              if (transfering) {
                setTransfering(false)
                getTransferLogs()
              } else {                
                setApproving(false)
                getContractStates()
              }              
          }}
        />
      ) : null}
    </Loader>
  )
}
